import Head from "next/head";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import styles from "../styles/Home.module.css";
import { searchStudents } from "../utils/api";

interface Student {
  _id: string;
  firstName: string;
  lastName: string;
}

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce<string>(search, 300);
  const [students, setStudents] = useState<Student[]>(null);

  useEffect(() => {
    if (!debounceSearch) {
      return;
    }
    (async () => {
      const newStudents = await searchStudents(debounceSearch);
      setStudents(newStudents);
    })();
  }, [debounceSearch]);

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
