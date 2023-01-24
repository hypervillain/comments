import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

const youtube = google.youtube({
  version: 'v3',
  auth: ''
})

async function getComment(id: string) {
  const comment = await youtube.comments.list({
    id: [id],
    part: ['snippet']
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { comment, parent } = await getComment('UgzGYZnIwn8VqT7dSid4AaABAg.9lBV6LkoPE59lBvvOoxaEO')
  console.log({ comment, parent })
  return res.status(200).json({ comment, parent})
}