// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.json({
    publicKey: process.env.VAPID_PUBLIC_KEY,
  });
};
