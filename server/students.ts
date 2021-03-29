import { FilterQuery } from "mongodb";
import { collection } from "./db";

interface Student {
  firstName: string;
  lastName: string;
}

export async function findStudents(search?: string): Promise<Student[]> {
  const regExp = new RegExp(search, "i");
  const query: FilterQuery<Student> = {
    $or: [{ firstName: regExp }, { lastName: regExp }],
  };
  const cursor = await collection<Student>("students").find(query);
  const students = await cursor.toArray();
  return students;
}
