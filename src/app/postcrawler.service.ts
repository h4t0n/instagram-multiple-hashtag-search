import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Post } from './post'

@Injectable()
export class PostcrawlerService {
  private static MAX_SEARCH_COUNTER = 10;


  constructor(private http: HttpClient) { }

  getPostsForHtags(htags: string[]): Observable<Post> {
    let posts = new Subject<Post>();
    for (let i = 0; i < htags.length; i++) {
      this.getPostsForHtag(htags[i], posts, i == htags.length - 1);
    }
    return posts.asObservable()
  }

  private getPostsForHtag(htag: string, posts: Subject<Post>, isLastHtag, next_cursor?: string, counter: number = 0) {
    this.http.get(this.getUrlForHtags(htag, next_cursor)).subscribe(data => {
      this.extractPostInfo(htag, data, posts, counter, isLastHtag);
    })
  }

  private extractPostInfo(htag: string, data: object, posts: Subject<Post>, counter: number, isLastHtag: boolean) {

    let media = data['graphql']['hashtag']['edge_hashtag_to_media']
    let edges = media['edges'];
    for(let edge of edges){
      let p = Post.formInstaHtagEdge(htag, edge['node'])
      posts.next(p)
    }

    let pageInfo = data['graphql']['hashtag']['edge_hashtag_to_media']['page_info']
    let hasNext = pageInfo['has_next_page']
    let end_cursor;
    let shouldContinue = hasNext && counter < PostcrawlerService.MAX_SEARCH_COUNTER
    if (shouldContinue) {
      end_cursor = pageInfo['end_cursor']
      setTimeout(() => this.getPostsForHtag(htag, posts, isLastHtag, end_cursor, counter + 1), 400)
    } else {
      if(isLastHtag){
        posts.complete()
      }
    }
  }

  private getSinglePostDetails(htag, edges, i, posts: Subject<Post>, end_cursor: string, counter, isLastHtag: boolean) {
    let edge = edges[i]['node']
    let shortcode = edge['shortcode']
    this.http.get(this.getUrlForSinglePost(shortcode)).subscribe(data => {
      let p = Post.fromInstaShortcodeMedia(htag, data);
      posts.next(p);
      i++;
      if (i < edges.length) {
        return this.getSinglePostDetails(htag, edges, i, posts, end_cursor, counter, isLastHtag)
      }
      if (end_cursor) {
        return this.getPostsForHtag(htag, posts, isLastHtag, end_cursor, counter + 1)
      }
     
    })
  }

  private getUrlForHtags(htag: string, next_cursor?: string): string {
    let ret = `https://www.instagram.com/explore/tags/${htag}/?__a=1`
    if (next_cursor)
      ret += `&max_id=${next_cursor}`
    return ret
  }

  private getUrlForSinglePost(shortcode: string): string {
    return `https://www.instagram.com/p/${shortcode}/?__a=1`
  }

}
