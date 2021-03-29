interface Student {
  _id: string;
  firstName: string;
  lastName: string;
}

export async function searchStudents(search: string): Promise<Student[]> {
  const url = `/api/students?search=${search}`;
  const response = await fetch(url);
  const students: Student[] = await response.json();
  return students;
}
