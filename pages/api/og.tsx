import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

import { Comment } from '../../src/comment';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const res = new ImageResponse(
    (
      <Comment classProp="tw" scale />
    ),
    {
      width: 2400,
      height: 1260,
    },
  );
  return res
}