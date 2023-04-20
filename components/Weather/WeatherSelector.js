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
  },//山东省
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
  },//浙江省
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
  },//江苏省
  {
    value: "北京",
    label: "北京",
    children: [
      {
        value: "朝阳",
        label: "朝阳",
      },
    ],
  },//北京市
  {
    value: "上海",
    label: "上海",
    children: [],
  },//上海
  {
    value: "天津",
    label: "天津",
    children: [],
  },//天津
  {
    value: "河北",
    label: "河北",
    children: [
      {
        value: "石家庄",
        label: "石家庄",
      },
    ],
  },//河北
  {
    value: "山西",
    label: "山西",
    children: [
      {
        value: "太原",
        label: "太原",
      },
    ],
  },//山西
  {
    value: "内蒙古自治区",
    label: "内蒙古自治区",
    children: [
      {
        value: "呼和浩特",
        label: "呼和浩特",
      },
    ],
  },//内蒙古
  {
    value: "辽宁",
    label: "辽宁",
    children: [
      {
        value: "沈阳",
        label: "沈阳",
      },
    ],
  },//辽宁
  {
    value: "吉林",
    label: "吉林",
    children: [
      {
        value: "长春",
        label: "长春",
      },
    ],
  },//吉林
  {
    value: "黑龙江",
    label: "黑龙江",
    children: [
      {
        value: "哈尔滨",
        label: "哈尔滨",
      },
    ],
  },//黑龙江
  {
    value: "安徽",
    label: "安徽",
    children: [
      {
        value: "合肥",
        label: "合肥",
      },
    ],
  },//安徽
  {
    value: "福建",
    label: "福建",
    children: [
      {
        value: "福州",
        label: "福州",
      },
    ],
  },//福建
  {
    value: "江西",
    label: "江西",
    children: [
      {
        value: "南昌",
        label: "南昌",
      },
    ],
  },//江西
  {
    value: "河南",
    label: "河南",
    children: [
      {
        value: "郑州",
        label: "郑州",
      },
    ],
  },
  {
    value: "湖北",
    label: "湖北",
    children: [
      {
        value: "武汉",
        label: "武汉",
      },
    ],
  },
  {
    value: "湖南",
    label: "湖南",
    children: [
      {
        value: "长沙",
        label: "长沙",
      },
    ],
  },
  {
    value: "广东",
    label: "广东",
    children: [
      {
        value: "广州",
        label: "广州",
      },
    ],
  },
  {
    value: "广西壮族自治区",
    label: "广西壮族自治区",
    children: [
      {
        value: "南宁",
        label: "南宁",
      },
    ],
  },
  {
    value: "海南",
    label: "海南",
    children: [
      {
        value: "海口",
        label: "海口",
      },
    ],
  },
  {
    value: "重庆",
    label: "重庆",
    children: [
      {
        value: "万州区",
        label: "万州区",
      },
    ],
  },
  {
    value: "四川",
    label: "四川",
    children: [
      {
        value: "成都",
        label: "成都",
      },
    ],
  },
  {
    value: "贵州",
    label: "贵州",
    children: [
      {
        value: "贵阳",
        label: "贵阳",
      },
    ],
  },
  {
    value: "云南",
    label: "云南",
    children: [
      {
        value: "昆明",
        label: "昆明",
      },
    ],
  },
  {
    value: "西藏自治区",
    label: "西藏自治区",
    children: [
      {
        value: "拉萨",
        label: "拉萨",
      },
    ],
  },
  {
    value: "陕西",
    label: "陕西",
    children: [
      {
        value: "西安",
        label: "西安",
      },
    ],
  },
  {
    value: "甘肃",
    label: "甘肃",
    children: [
      {
        value: "兰州",
        label: "兰州",
      },
    ],
  },
  {
    value: "青海",
    label: "青海",
    children: [
      {
        value: "西宁",
        label: "西宁",
      },
    ],
  },
  {
    value: "宁夏回族自治区",
    label: "宁夏回族自治区",
    children: [
      {
        value: "银川",
        label: "银川",
      },
    ],
  },
  {
    value: "新疆维吾尔自治区",
    label: "新疆维吾尔自治区",
    children: [
      {
        value: "乌鲁木齐",
        label: "乌鲁木齐",
      },
    ],
  },
  {
    value: "台湾",
    label: "台湾",
    children: [
      {
        value: "台北",
        label: "台北",
      },
    ],
  },
  {
    value: "香港",
    label: "香港",
    children: [
      {
        value: "香港",
        label: "香港",  
      },
    ],
  },
  {
    value: "澳门",
    label: "澳门",
    children: [
      {
        value: "澳门",
        label: "澳门",
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
        onWeatherChange(
          res.data.results[0].now,
          res.data.results[0].location.name
        );
      });
  }
  return (
    <>
      <Cascader options={options} onChange={onChange} placeholder="Choose"/>
    </>
  );
}
