import { Inter } from "next/font/google";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Air({ city }) {
  //空气质量
  const [air, setAir] = useState({});
  //舒适
  const [comfort, setComfort] = useState({});

  //发送axios请求,主页天气数据
  useEffect(() => {
    axios
      .get(
        `https://api.seniverse.com/v3/air/now.json?key=SIKgGG7jSVrpD4Zb4&location=${city}&language=zh-Hans&scope=city`
      )
      .then((res) => {
        //将获取数据渲染
        setAir(res.data.results[0].air.city);
      });
    axios
      .get(
        `https://api.seniverse.com/v3/life/suggestion.json?key=SjPJO8uWbDNjYyU4i&location=${city}&language=zh-Hans&days=1`
      )
      .then((res) => {
        setComfort(res.data.results[0].suggestion[0].comfort);
        // console.log(res.data.results[0].suggestion[0].comfort);
      });
  }, []);
  return (
    <div className={styles.card}>
      <Link href="/atmosphere">
        <h2 className={inter.className}>
          空气 <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
        <span className={styles.dev}></span> {air.quality} Aqi~{air.aqi} {comfort.brief} 
        </p>
      </Link>
    </div>
  );
}
