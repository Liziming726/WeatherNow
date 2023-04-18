import { Inter } from "next/font/google";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Trad() {
  const [ganzhiyear, setGanzhiyear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.seniverse.com/v3/life/chinese_calendar.json?key=SIKgGG7jSVrpD4Zb4&start=0&days=7`
      )
      .then((res) => {
        setGanzhiyear(res.data.results.chinese_calendar[0].ganzhi_year);
        setMonth(res.data.results.chinese_calendar[0].lunar_month_name);
        setDay(res.data.results.chinese_calendar[0].lunar_day_name);
      });
  }, []);

  return (
    <div className={styles.card}>
      <Link href="/tradition">
        <h2 className={inter.className}>
          传统历法 <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          {ganzhiyear}年{month}{day} {new Date().toLocaleDateString()}
        </p>
      </Link>
    </div>
  );
}
