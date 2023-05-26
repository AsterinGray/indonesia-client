import styles from "./styles.module.scss";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  text?: string;
  altBg?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  rest?: ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({
  text,
  children,
  altBg,
  onClick,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${altBg && styles["button-alt"]}`}
      {...rest}
    >
      {children ? children : text}
    </button>
  );
};

export default Button;
