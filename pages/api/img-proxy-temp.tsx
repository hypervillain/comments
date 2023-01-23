import { ImageResponse } from "@vercel/og";
import { NextApiResponse, NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: 'edge',
};

// const url = "https://yt3.ggpht.com/XX1K_IPhILS54Sgv26VgCmxTN5KltpdWYS9wwWTIJ73wIScBFlzAPB1MMFudvmp06KFklYZR3w=s88-c-k-c0x00ffffff-no-rj";    

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const url = decodeURIComponent(searchParams.get('q'))
  console.log({ url })
  return new ImageResponse(
    (
      <div
        tw="w-12 h-12 rounded-full"
        style={{
          display: 'flex',
          backgroundImage: `url("${url}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
    ),
    { width: 48, height: 48 }
  )
  // return new ImageResponse(
  //   (<img src={url} style={{ width: '48px', height: '48px' }} />),
  //   { width: 48, height: 48}
  // )
}