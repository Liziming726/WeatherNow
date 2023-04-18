import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function Weather() {

  const [weather, setWeather] = useState({});
  //发送axios请求
  useEffect(() => {
    axios
      .get(
        "https://api.seniverse.com/v3/weather/now.json?key=SjPJO8uWbDNjYyU4i&location=jinan&language=zh-Hans&unit=c"
      )
      .then((res) => {
        //将获取数据渲染
        setWeather(res.data.results[0].now);
      });
  }, []);
  return (
    <div>
      <h1 className={styles.title}>济南</h1>
      <h2>
        {weather.text} {weather.temperature}°C
      </h2>
    </div>
  );
}
