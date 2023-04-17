import { useState, useEffect } from "react";
import { Cascader } from "antd";
import axios from "axios";

const options = [
  {
    value: "山东",
    label: "山东",
    children: [
      {
        value: "济南",
        label: "济南",
      },
      {
        value: "青岛",
        label: "青岛",
      },
      {
        value: "淄博",
        label: "淄博",
      },
      {
        value: "枣庄",
        label: "枣庄",
      },
      {
        value: "东营",
        label: "东营",
      },
      {
        value: "烟台",
        label: "烟台",
      },
      {
        value: "潍坊",
        label: "潍坊",
      },
      {
        value: "济宁",
        label: "济宁",
      },
      {
        value: "泰安",
        label: "泰安",
      },
      {
        value: "威海",
        label: "威海",
      },
      {
        value: "日照",
        label: "日照",
      },
      {
        value: "莱芜",
        label: "莱芜",
      },
      {
        value: "临沂",
        label: "临沂",
      },
      {
        value: "德州",
        label: "德州",
      },
      {
        value: "聊城",
        label: "聊城",
      },
      {
        value: "滨州",
        label: "滨州",
      },
      {
        value: "菏泽",
        label: "菏泽",
      },
    ],
  },
  {
    value: "浙江",
    label: "浙江",
    children: [
      {
        value: "杭州",
        label: "杭州",
      },
      {
        value: "宁波",
        label: "宁波",
      },
      {
        value: "温州",
        label: "温州",
      },
      {
        value: "嘉兴",
        label: "嘉兴",
      },
      {
        value: "湖州",
        label: "湖州",
      },
      {
        value: "绍兴",
        label: "绍兴",
      },
      {
        value: "金华",
        label: "金华",
      },
      {
        value: "衢州",
        label: "衢州",
      },
      {
        value: "舟山",
        label: "舟山",
      },
      {
        value: "台州",
        label: "台州",
      },
      {
        value: "丽水",
        label: "丽水",
      },
    ],
  },
  {
    value: "江苏",
    label: "江苏",
    children: [
      {
        value: "南京",
        label: "南京",
      },
      {
        value: "苏州",
        label: "苏州",
      },
      {
        value: "无锡",
        label: "无锡",
      },
      {
        value: "常州",
        label: "常州",
      },
      {
        value: "镇江",
        label: "镇江",
      },
      {
        value: "南通",
        label: "南通",
      },
      {
        value: "扬州",
        label: "扬州",
      },
      {
        value: "盐城",
        label: "盐城",
      },
      {
        value: "淮安",
        label: "淮安",
      },
      {
        value: "宿迁",
        label: "宿迁",
      },
      {
        value: "连云港",
        label: "连云港",
      },
    ],
  },
  {
    value: "北京",
    label: "北京",
    children: [
      {
        value: "朝阳",
        label: "朝阳",
      },
    ],
  },
];

export default function WeatherSelector({ onWeatherChange, onCityChange }) {
  const [city, setCity] = useState("济南");
  const [weather, setWeather] = useState({});

  function onChange(value) {
    setCity(value[1]);
    setWeather(value[1]);
    axios
      .get(
        `https://api.seniverse.com/v3/weather/now.json?key=SjPJO8uWbDNjYyU4i&location=${value[1]}&language=zh-Hans&unit=c`
      )
      .then((res) => {
        //将获取数据渲染
        setWeather(res.data.results[0].now);
        setCity(res.data.results[0].location.name);
        onWeatherChange(res.data.results[0].now, res.data.results[0].location.name);
      });
  }
  return (
    <div>
      <Cascader options={options} onChange={onChange} placeholder="Choose" />
    </div>
  );
}
