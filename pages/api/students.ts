// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { findStudents } from "../../server/students";
import { withDatabase } from "../../server/utils";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const students = await findStudents();
    res.status(200).json(students);
  }
);
