import Link from "next/link";

import styles from "@/styles/pages/home.module.scss";

const Home = () => {
  return (
    <main className={styles.home}>
      <h4>Manage Regions in</h4>
      <h1>Indonesia</h1>
      <aside className={styles.aside}>
        <h3>Choose what to manage!</h3>
        <nav className={styles.nav}>
          <Link href={"/provinsi"}>Provinsi</Link>
          <Link href={"/kota"}>Kota</Link>
          <Link href={"/kecamatan"}>Kecamatan</Link>
        </nav>
      </aside>
    </main>
  );
};

export default Home;
