import { Inter } from "next/font/google";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Four() {
  return (
    <div className={styles.card}>
      <Link href="/realtimeforecast">
        <h2 className={inter.className}>
          预报 <span>-&gt;</span>
        </h2>
        <p className={inter.className}>天气阴晴不定 &nbsp;祝你天天开心!</p>
      </Link>
    </div>
  );
}
