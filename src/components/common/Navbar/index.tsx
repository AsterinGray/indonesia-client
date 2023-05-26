"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import useMediaQuery from "@/hooks/useMediaQuery";

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const renderNav = () => {
    return (
      <nav className={styles.nav}>
        <Link href={"/provinsi"}>Provinsi</Link>
        <Link href={"/kota"}>Kota</Link>
        <Link href={"/kecamatan"}>Kecamatan</Link>
      </nav>
    );
  };

  const renderMenu = () => {
    return <div className={styles.menu}>{renderNav()}</div>;
  };

  const toogleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <Image
            src="/indonesia.svg"
            alt="Indonesia Flag"
            width={80}
            height={30}
          />
        </Link>
        {isMobile ? (
          <nav className={styles.nav} onClick={toogleMenu}>
            Menu
          </nav>
        ) : (
          renderNav()
        )}
      </header>
      {isMenuVisible && renderMenu()}
    </>
  );
};

export default Navbar;
