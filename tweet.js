class Tweet {
  constructor(userName, context, link,) {
    this.sender = userName;
    this.content = context;
    this.link = link || 'no link provided';
    this.likes = 0;
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
}
like(numLikes) {
  this.likes = this.likes + 1
}
retweet() {
  this.retweets = this.retweets + 1
}
reply(reply) {
  this.replies.push(reply)
  this.replyCount = this.replies.length
}
}

module.exports = Tweet;
