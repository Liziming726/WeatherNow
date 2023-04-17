import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import axios from "axios";
import { useState, useEffect } from "react";
//引入组件
import Footer from "@/components/Footer";
import WeatherSelector from "@/components/WeatherSelector";
import WeatherLogo from "@/components/WeatherLogo";
import Air from "@/components/Air";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [city, setCity] = useState("济南");
  const [weather, setWeather] = useState({});
  //空气质量
  const [air, setAir] = useState({});

  //发送axios请求,主页天气数据
  useEffect(() => {
    axios
      .get(
        "https://api.seniverse.com/v3/weather/now.json?key=SjPJO8uWbDNjYyU4i&location=jinan&language=zh-Hans&unit=c"
      )
      .then((res) => {
        //将获取数据渲染
        setWeather(res.data.results[0].now);
      });
    axios
      .get(
        "https://api.seniverse.com/v3/air/now.json?key=SIKgGG7jSVrpD4Zb4&location=jinan&language=zh-Hans&scope=city"
      )
      .then((res) => {
        //将获取数据渲染
        console.log(res.data.results[0].air.city);
        setAir(res.data.results[0].air.city);
      });
  }, []);

  function handleWeatherChange(newWeather, newCity) {
    setWeather(newWeather);
    setCity(newCity);
  }

  return (
    <>
      <Head>
        <title>Weather Now!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Welcome to &nbsp;
            <code className={styles.code}>Weather Now!</code>
          </p>
          <div>
            <WeatherSelector onWeatherChange={handleWeatherChange} />
          </div>
        </div>

        <div className={styles.center}>
          <WeatherLogo city={city} />
          <h1 className={styles.title}>{city}</h1>
          <h2>
            {weather.text} {weather.temperature}°C
          </h2>
        </div>

        <div className={styles.grid}>
          <Air/>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              气候 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              环境 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              预报 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
        <Footer />
      </main>
    </>
  );
}
