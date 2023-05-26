import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";

const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image
          src="/indonesia.svg"
          alt="Indonesia Flag"
          width={80}
          height={30}
        />
      </Link>
      <nav className={styles.nav}>
        <Link href={"/provinsi"}>Provinsi</Link>
        <Link href={"/kota"}>Kota</Link>
        <Link href={"/kecamatan"}>Kecamatan</Link>
      </nav>
    </header>
  );
};

export default Navbar;
