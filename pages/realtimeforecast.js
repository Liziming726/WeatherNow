import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Cd from "@/components/Cd";
import Footer from "@/components/Footer";
import axios from "axios";
import Realtimeselect from "@/components/Realtimeforecast/Realtimeselect";
const inter = Inter({ subsets: ["latin"] });

export default function Realtimeforecast() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const [time, setTime] = useState();
  const [time1, setTime1] = useState();
  const [time2, setTime2] = useState();
  const [time3, setTime3] = useState();
  const [time4, setTime4] = useState();
  const [time5, setTime5] = useState();
  const [time6, setTime6] = useState();
  const [time7, setTime7] = useState();

  const [tem, setTem] = useState();
  const [tem1, setTem1] = useState();
  const [tem2, setTem2] = useState();
  const [tem3, setTem3] = useState();
  const [tem4, setTem4] = useState();
  const [tem5, setTem5] = useState();
  const [tem6, setTem6] = useState();
  const [tem7, setTem7] = useState();

  const [qix, setQix] = useState();
  const [qix1, setQix1] = useState();
  const [qix2, setQix2] = useState();
  const [qix3, setQix3] = useState();
  const [qix4, setQix4] = useState();
  const [qix5, setQix5] = useState();
  const [qix6, setQix6] = useState();
  const [qix7, setQix7] = useState();

  const [text, setText] = useState("");
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");
  const [wind, setWind] = useState("");
  const [low2, setLow2] = useState("");
  const [high2, setHigh2] = useState("");
  const [wind2, setWind2] = useState("");
  const [low3, setLow3] = useState("");
  const [high3, setHigh3] = useState("");
  const [wind3, setWind3] = useState("");

  function handleWeatherChange(
    newCity,
    newText,

    newTime,
    newTime1,
    newTime2,
    newTime3,
    newTime4,
    newTime5,
    newTime6,
    newTime7,

    newTem,
    newTem1,
    newTem2,
    newTem3,
    newTem4,
    newTem5,
    newTem6,
    newTem7,

    newQix,
    newQix1,
    newQix2,
    newQix3,
    newQix4,
    newQix5,
    newQix6,
    newQix7,

    newLow
    // newHigh,
    // newWind,
    // newLow2,
    // newHigh2,
    // newWind2,
    // newLow3,
    // newHigh3,
    // newWind3
  ) {
    // setCity(newCity);
    setText(newText);
    setLow(newLow);
    setTime(
      new Date(newTime).toLocaleString("zh-CN", {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setTime1(
      new Date(newTime1).toLocaleString("zh-CN", {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setTime2(
      new Date(newTime2).toLocaleString("zh-CN", {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setTime3(
      new Date(newTime3).toLocaleString("zh-CN", {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setTime4(
      new Date(newTime4).toLocaleString("zh-CN", {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setTime5(
      new Date(newTime5).toLocaleString("zh-CN", {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setTime6(
      new Date(newTime6).toLocaleString("zh-CN", {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setTime7(
      new Date(newTime7).toLocaleString("zh-CN", {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setTem(newTem);
    setTem1(newTem1);
    setTem2(newTem2);
    setTem3(newTem3);
    setTem4(newTem4);
    setTem5(newTem5);
    setTem6(newTem6);
    setTem7(newTem7);

    setQix(newQix);
    setQix1(newQix1);
    setQix2(newQix2);
    setQix3(newQix3);
    setQix4(newQix4);
    setQix5(newQix5);
    setQix6(newQix6);
    setQix7(newQix7);
  }
  return (
    <>
      <Head>
        <title>Weather Forecast!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Forecast &nbsp;
            <code className={styles.code}>
              When to Run
              {(qix && qix.includes("雨")) ||
              (qix1 && qix1.includes("雨")) ||
              (qix2 && qix2.includes("雨")) ||
              (qix3 && qix3.includes("雨")) ||
              (qix4 && qix4.includes("雨")) ||
              (qix5 && qix5.includes("雨")) ||
              (qix6 && qix6.includes("雨")) ||
              (qix7 && qix7.includes("雨"))
                ? " 需要带伞!"
                : "!"}
            </code>
          </p>
          <div>
            <Realtimeselect onWeatherChange={handleWeatherChange} />
          </div>
        </div>

        <div className={styles.center}>
          <h1 className={styles.title}>Live in {text ? text + "!" : "😉?"}</h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{time}</h3>
            <p>
              {tem ? "气温: " + tem + "°C" : ""}
              <br />
              {qix}
            </p>
          </div>
          <div className={styles.card}>
            <h3>{time1}</h3>
            <p>
              {tem1 ? "气温: " + tem1 + "°C" : ""}
              <br />
              {qix1}
            </p>
          </div>
          <div className={styles.card}>
            <h3>{time2}</h3>
            <p>
              {tem2 ? "气温: " + tem2 + "°C" : ""}
              <br />
              {qix2}
            </p>
          </div>
          <div className={styles.card}>
            <h3>{time3}</h3>
            <p>
              {tem3 ? "气温: " + tem3 + "°C" : ""}
              <br />
              {qix3}
            </p>
          </div>
          <div className={styles.card}>
            <h3>{time4}</h3>
            <p>
              {tem4 ? "气温: " + tem4 + "°C" : ""}
              <br />
              {qix4}
            </p>
          </div>
          <div className={styles.card}>
            <h3>{time5}</h3>
            <p>
              {tem5 ? "气温: " + tem5 + "°C" : ""}
              <br />
              {qix5}
            </p>
          </div>
          <div className={styles.card}>
            <h3>{time6}</h3>
            <p>
              {tem6 ? "气温: " + tem6 + "°C" : ""}
              <br />
              {qix6}
            </p>
          </div>
          <div className={styles.card}>
            <h3>{time7}</h3>
            <p>
              {tem7 ? "气温: " + tem7 + "°C" : ""}
              <br />
              {qix7}
            </p>
          </div>
        </div>
        <Cd />
        <Footer />
      </main>
    </>
  );
}
