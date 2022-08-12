import React from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/product">Product</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
};

export default Navbar;
