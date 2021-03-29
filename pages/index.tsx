import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

interface Student {
  _id: string;
  firstName: string;
  lastName: string;
}

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [students, setStudents] = useState<Student[]>(null);

  useEffect(() => {
    if (!search) {
      return;
    }
    const timeoutId = setTimeout(() => {
      const url = `/api/students?search=${search}`;
      fetch(url)
        .then((response) => response.json())
        .then((students) => setStudents(students));
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <label>
          Search{" "}
          <input
            type="text"
            placeholder="First or last name"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
        <ul>
          {students?.map((student) => (
            <li key={student._id}>
              {student.firstName} {student.lastName}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
