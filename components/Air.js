import { Inter } from "next/font/google";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Air() {
   //空气质量
   const [air, setAir] = useState({});
   //舒适
    const [comfort, setComfort] = useState({});

   //发送axios请求,主页天气数据
   useEffect(() => {
     axios
       .get(
         "https://api.seniverse.com/v3/air/now.json?key=SIKgGG7jSVrpD4Zb4&location=jinan&language=zh-Hans&scope=city"
       )
       .then((res) => {
         //将获取数据渲染
         setAir(res.data.results[0].air.city);
       });
       axios
        .get(
          "https://api.seniverse.com/v3/life/suggestion.json?key=SjPJO8uWbDNjYyU4i&location=jinan&language=zh-Hans&days=1"
        )
        .then((res) => {
          setComfort(res.data.results[0].suggestion[0].comfort.brief);
        });
   }, []);
  return (
    <div className={styles.card}>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          空气 <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          {air.quality} Aqi-{air.aqi} {"~"} {comfort}
        </p>
      </a>
    </div>
  );
}
