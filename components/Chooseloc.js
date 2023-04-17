import { Cascader } from "antd";
import styles from "../styles/Chooseloc.module.css";
import Weather from "./Weather";

const options = [
  {
    value: "Zhejiang",
    label: "浙江",
    children: [
      {
        value: "hangzhou",
        label: "杭州",
      },
      {
        value: "ningbo",
        label: "宁波",
      },
      {
        value: "wenzhou",
        label: "温州",
      },
      {
        value: "jiaxing",
        label: "嘉兴",
      },
      {
        value: "huzhou",
        label: "湖州",
      },
      {
        value: "shaoxing",
        label: "绍兴",
      },
      {
        value: "jinhua",
        label: "金华",
      },
      {
        value: "quzhou",
        label: "衢州",
      },
      {
        value: "zhoushan",
        label: "舟山",
      },
      {
        value: "taizhou",
        label: "台州",
      },
      {
        value: "lishui",
        label: "丽水",
      },
    ],
  },
  {
    value: "jiangsu",
    label: "江苏",
    children: [
      {
        value: "nanjing",
        label: "南京",
      },
      {
        value: "suzhou",
        label: "苏州",
      },
      {
        value: "wuxi",
        label: "无锡",
      },
      {
        value: "changzhou",
        label: "常州",
      },
      {
        value: "zhenjiang",
        label: "镇江",
      },
      {
        value: "nantong",
        label: "南通",
      },
      {
        value: "yangzhou",
        label: "扬州",
      },
      {
        value: "yancheng",
        label: "盐城",
      },
      {
        value: "huaian",
        label: "淮安",
      },
      {
        value: "suqian",
        label: "宿迁",
      },
      {
        value: "lianyungang",
        label: "连云港",
      },
    ],
  },
  {
    value: "beijing",
    label: "北京",
    children: [
      {
        value: "dongcheng",
        label: "东城",
      },
      {
        value: "xicheng",
        label: "西城",
      },
      {
        value: "chaoyang",
        label: "朝阳",
      },
      {
        value: "haidian",
        label: "海淀",
      },
      {
        value: "fengtai",
        label: "丰台",
      },
      {
        value: "shijingshan",
        label: "石景山",
      },
      {
        value: "tongzhou",
        label: "通州",
      },
      {
        value: "changping",
        label: "昌平",
      },
      {
        value: "daxing",
        label: "大兴",
      },
      {
        value: "yizhuangkaifaqu",
        label: "亦庄开发区",
      },
      {
        value: "shunyi",
        label: "顺义",
      },
      {
        value: "fangshan",
        label: "房山",
      },
      {
        value: "mentougou",
        label: "门头沟",
      },
      {
        value: "pinggu",
        label: "平谷",
      },
    ],
  },
];

function Chooseloc() {
  function onChange(value) {
    console.log(value);
    Weather(value);
  }

  return (
    <div className={styles.choos}>
      <Cascader options={options} onChange={onChange} placeholder="Choose" />
    </div>
  );
}

export default Chooseloc;

