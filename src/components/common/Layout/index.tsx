import { ReactNode } from "react";
import Navbar from "../Navbar";

import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className={styles.wrapper}>{children}</section>
    </>
  );
};

export default Layout;
