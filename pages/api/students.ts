// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { findStudents } from "../../server/students";
import { withDatabase } from "../../server/utils";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    if (Array.isArray(search)) {
      return res.status(400).end();
    }
    const students = await findStudents(search);
    res.status(200).json(students);
  }
);
