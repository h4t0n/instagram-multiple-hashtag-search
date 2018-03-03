export class Post {
    hashtags: Array<string>;
    id: string;
    shortcode: string;
    display_url: string;
    likes: number;
    owner_id: number;
    comments: number;
    caption: string;
    display_resources: string;
    taken_at_timestamp: number;
    hashtag: string;
    thumbnail_src: string;

    constructor() {
        this.hashtags = new Array();
    }

    public static fromInstaShortcodeMedia(htag, json): Post {
        let p = new Post()
        let node = json['graphql']['shortcode_media']
        p.id = node.id;
        p.shortcode = node.shortcode
        p.display_url = node.display_url
        p.display_resources = node.display_resources
        p.taken_at_timestamp = node.taken_at_timestamp
        p.hashtag = htag
        // try {
        //     p.caption = node['edge_media_to_caption']['edges'][0]['node']['text']
        //     p.hashtags = this.extractHashTag(p.caption)
        // } catch (e) {
        // }
        // try {
        //     let comment_node = node['edge_media_to_comment']['edges'][0]['node']
        //     if (comment_node['owner']['id'] == node['owner']['id']) {
        //         p.hashtags = p.hashtags.concat(this.extractHashTag(comment_node['text']))
        //     }
        // } catch (e) {
        // }
        return p
    }

    public static formInstaHtagEdge(htag, node): Post {
        let p = new Post()
        p.id = node.id;
        p.shortcode = node.shortcode
        p.display_url = node.display_url
        p.taken_at_timestamp = node.taken_at_timestamp
        p.thumbnail_src = node.thumbnail_src
        try {
            p.caption = node['edge_media_to_caption']['edges'][0]['node']['text']
            p.hashtags = this.extractHashTag(p.caption)
        } catch (e) {
        }
        p.hashtag = htag
        return p
    }

    private static extractHashTag(string): Array<string> {
        let reg = /(?:#)([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/g;
        let tags = new Array<string>();
        let match;
        while (match = reg.exec(string)) {
            tags.push(match[1]);
        }
        return tags;
    }
}