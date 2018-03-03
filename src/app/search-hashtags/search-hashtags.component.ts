import { Component, OnInit } from '@angular/core';
import { PostcrawlerService } from '../postcrawler.service'
import { Post } from '../post'

@Component({
  selector: 'search-hashtags',
  templateUrl: './search-hashtags.component.html',
  styleUrls: ['./search-hashtags.component.css']
})
export class SearchHashtagsComponent implements OnInit {
  private static MAX_CARD_POST = 3

  private currentHtags: Array<string>
  private dataStore: Object
  groupedPosts: Array<Array<Post>>
  loading: boolean = false

  constructor(private postService: PostcrawlerService) {
    this.currentHtags = []
    this.dataStore = {}
    this.groupedPosts = []
  }

  ngOnInit() {
    setInterval(this.rearrangePostsCB, 2500)
  }

  private rearrangePostsCB = () => {

    let temp: Map<string, Post> = new Map()
    if (this.currentHtags[0]) {
      this.dataStore[this.currentHtags[0]].forEach(p => {
        temp.set(p.id, p)
      });
    }
    let intersectd: Map<string, Post>
    if (this.currentHtags.length > 1) {
      for (let i = 1; i < this.currentHtags.length; i++) {
        intersectd = new Map()
        let currentHtDs = this.dataStore[this.currentHtags[i]]
        currentHtDs.forEach(p => {
          if (temp.has(p.id)) {
            intersectd.set(p.id, p)
          }
        })
        temp = intersectd;
      }
    } else {
      intersectd = temp;
    }

    let array = Array.from(intersectd.values()).sort(function (a, b) { return b.taken_at_timestamp - a.taken_at_timestamp });
    array.sort(function (a, b) { return b.taken_at_timestamp - a.taken_at_timestamp });
    let sliced = array.reduce(function (r, v, i) {
      if (i % 3 == 0) r.push(array.slice(i, i + 3));
      return r;
    }, []);
    if(this.groupedPosts.length != sliced.length || this.groupedPosts[this.groupedPosts.length-1].length != sliced[this.groupedPosts.length-1].length)
    this.groupedPosts = sliced
  }

  search(htags: string) {
    this.loading = true;
    this.currentHtags = htags.split(" ");
    this.currentHtags = this.currentHtags.map(ht => {
      if(ht[0] == "#") return ht.slice(1)
      return ht;
    });
    this.postService.getPostsForHtags(this.currentHtags).subscribe(
      post => {
        if (!this.dataStore[post.hashtag]) {
          this.dataStore[post.hashtag] = []
        }
        let htDatstore = this.dataStore[post.hashtag]
        let alreadyseen = htDatstore
          .filter(p => p.id == post.id).length > 0

        if (!alreadyseen) {
          htDatstore.push(post)
        }
      },
      error => { },
      () => {
        this.loading = false;
      }
    )
  }


}
