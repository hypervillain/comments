const { google } = require('googleapis');

const youtube = google.youtube({
  version: 'v3',
  auth: ''
})

async function getComment(id) {
  const comment = await youtube.comments.list({
    id: [id],
    part: 'snippet'
  })

  if (comment.status === 200) {
    const data = comment.data.items[0]
    if (data.snippet.parentId) {
      const parent = await getComment(data.snippet.parentId)
      return { parent, comment: data }
    }
    return { comment: data }
  }
}

async function main(params) {
  // const res = await blogger.blogs.get({blogId: params.blogId});
  // console.log(`${res.data.name} has ${res.data.posts.totalItems} posts! The blog url is ${res.data.url}`)

  // console.log(youtube.comments.list)
  const { comment, parent } = await getComment('UgzGYZnIwn8VqT7dSid4AaABAg.9lBV6LkoPE59lBvvOoxaEO')
  console.log({ comment, parent })

};

main()

// main().catch(console.error);