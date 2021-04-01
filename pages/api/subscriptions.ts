// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { subscribe } from "../../server/subscriptions";
import { withDatabase } from "../../server/utils";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const subscription = req.body;
    await subscribe(subscription);
    res.status(201).json(subscription);
  }
);
