import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { searchStudents } from "../utils/api";

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
    const timeoutId = setTimeout(async () => {
      const newStudents = await searchStudents(search);
      setStudents(newStudents);
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
          Search
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
