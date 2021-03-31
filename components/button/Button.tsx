import { useState } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  primary: boolean;
  label: string;
};

function Button({ primary, label, ...props }: ButtonProps) {
  const [value, setValue] = useState(label);

  return (
    <button
      className={`${styles.btn} ${primary ? styles.primary : ""}`}
      onClick={() => setValue("clicked")}
      {...props}
    >
      {value}
    </button>
  );
}

export default Button;
