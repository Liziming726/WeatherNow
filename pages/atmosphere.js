import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Cd from "@/components/Cd";
import AirSelector from "@/components/Air/AirSelector";
import axios from "axios";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function AirPage() {
  const [city, setCity] = useState("");
  const [air, setAir] = useState("");
  const [airp, setAirp] = useState("");
  const [airr, setAirr] = useState("");
  const [all, setAll] = useState("");
  const [car, setCar] = useState("");
  const [com, setCom] = useState("");
  const [uv, setUv] = useState("");

  function handleWeatherChange(
    newCity,
    newAir,
    newAirp,
    newAirr,
    newAll,
    newCar,
    newCom,
    newUv
  ) {
    setCity(newCity);
    setAir(newAir);
    setAirp(newAirp);
    setAirr(newAirr);
    setAll(newAll);
    setCar(newCar);
    setCom(newCom);
    setUv(newUv);
  }
  return (
    <>
      <Head>
        <title>Air Now!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Air Now &nbsp;
            <code className={styles.code}>呼吸!</code>
          </p>
          <div>
            <AirSelector onWeatherChange={handleWeatherChange} />
          </div>
        </div>

        <div className={styles.center}>
          <h1 className={styles.title}>Breath in {" "}
          { city ? city + "!" : "😉?" }
          </h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={inter.className}>空调:{air.brief}</h2>
            <p className={inter.className}>
              <code className={styles.code}>{air.details}</code>
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={inter.className}>空气:{airp.brief}</h2>
            <p className={inter.className}>
              <code className={styles.code}>{airp.details}</code>
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={inter.className}>兜风:{airr.brief}</h2>
            <p className={inter.className}>
              <code className={styles.code}>{airr.details}</code>
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={inter.className}>过敏:{all.brief}</h2>
            <p className={inter.className}>
              <code className={styles.code}>{all.details}</code>
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={inter.className}>洗车:{car.brief}</h2>
            <p className={inter.className}>
              <code className={styles.code}>{car.details}</code>
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={inter.className}>舒适度:{com.brief}</h2>
            <p className={inter.className}>
              <code className={styles.code}>{com.details}</code>
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={inter.className}>紫外线:{uv.brief}</h2>
            <p className={inter.className}>
              <code className={styles.code}>{uv.details}</code>
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={inter.className}>一目了然?</h2>
            <p className={inter.className}>
              <code className={styles.code}>Breath Now!</code>
            </p>
          </div>
        </div>

        <Cd />
      <Footer/>

      </main>
    </>
  );
}
