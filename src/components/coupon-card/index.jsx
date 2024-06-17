import { useState } from "react";
import { View } from "@tarojs/components";
import { getTimeWithModal, getCurrentPageContext } from "../../proxy";

import "./index.css";

export default function CouponCard({ info }) {
  const [selected, setSelected] = useState(false);

  const toggleSelect = () => {
    if (info.valid) {
      getTimeWithModal(getCurrentPageContext());
      setSelected(!selected);
    }
  };

  let className = "coupon";
  if (selected) {
    className = `${className} selected`;
  }
  if (!info.valid) {
    className = `${className} invalid`;
  }

  return (
    <View className={className} onClick={toggleSelect}>
      <View className="desc">
        <View className="main">{info.type}券</View>
        <View className="sub">有效期至 {info.date}</View>
        <View className="amount">
          <View className="unit">¥</View>
          <View className="num">{info.amount}</View>
        </View>
      </View>
      <View className="bottom">
        <View className="limit">
          {info.valid ? (
            <View>
              {info.city}，{info.limit}时段可用
            </View>
          ) : (
            <View>目前不可用</View>
          )}
        </View>
        <View className="detail">查看详情</View>
      </View>
    </View>
  );
}
