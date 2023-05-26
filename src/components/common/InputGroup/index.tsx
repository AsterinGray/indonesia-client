import {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import styles from "./styles.module.scss";

type Props = {
  setValue: Dispatch<SetStateAction<any>>;
  value: any;
  label: string;
  select?: boolean;
  children?: ReactNode;
};

const InputGroup: React.FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  setValue,
  value,
  label,
  select = false,
  children,
  ...rest
}) => {
  return (
    <div className={styles.group}>
      <label htmlFor={label}>{label}</label>
      {select ? (
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name=""
          id={label}
        >
          {children}
        </select>
      ) : (
        <input
          id={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...rest}
        />
      )}
    </div>
  );
};

export default InputGroup;
