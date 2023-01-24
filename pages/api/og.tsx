import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

import { Comment } from '../../src/comment';

export const config = {
  runtime: 'edge',
};

// const normal = fetch(new URL(`../../assets/${"Roboto-Regular"}.ttf`, import.meta.url)).then(
//   (res) => res.arrayBuffer(),
// );

// const bold = fetch(new URL(`../../assets/${"Roboto-Bold"}.ttf`, import.meta.url)).then(
//   (res) => res.arrayBuffer(),
// );

export default async function handler(req: NextRequest) {
  // const roboto = await normal
  // const robotoBold = await bold

  return new ImageResponse(
    (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex'
      // transform: `scale(${scale})`,
        }}
      >
        <Comment
          scale={3}
          isLiked
          classProp="tw"
          defaultFontSize={17}
          style={{ maxWidth: '34rem' }} // NO CLUE WHY
        />
      </div>
    ),
    {
      width: 2400,
      height: 1260,
      // fonts: [
      //   {
      //     name: 'Roboto',
      //     data: roboto,
      //     weight: 400,
      //     style: 'normal',
      //   },
      //   {
      //     name: 'RobotoBold',
      //     data: robotoBold,
      //     weight: 700,
      //     style: 'normal',
      //   },
      // ],
    },
  );
}