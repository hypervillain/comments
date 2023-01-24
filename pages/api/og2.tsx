import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

import { Comment } from '../../src/comment';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {

  const res = new ImageResponse(
    (
      <div
    style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
       fontSize: '2.875rem',
    }}
  >
    <p style={{ fontSize: '4rem' }}>hi this is a simple repo!</p>
</div>

    ),
    {
      width: 400,
      height: 260,
    },
  );
  return res
}