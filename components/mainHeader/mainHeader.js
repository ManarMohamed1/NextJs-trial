import Link from "next/link";
import Image from 'next/image'

import MainHeaderBackground from './mainHeaderBackground'

import logoImg from "@/assets/logo.png";
import styles from "./mainHeader.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          {/* <img src={logoImg.src} alt="logoImg" /> */}
          <Image src={logoImg} alt='logoImage' width={150} height={150} priority />
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Browse Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
