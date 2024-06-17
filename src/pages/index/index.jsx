import { useState } from "react";
import { View, Button } from "@tarojs/components";
import { useReady } from "@tarojs/taro";
import CouponCard from "../../components/coupon-card";
import { buildData } from "../../data";
import {
  getTimeWithModal,
  getCurrentPageContext,
  setReadyStart,
  getReadyTimeWithModal,
} from "../../proxy";

import "./index.css";

export default function Index() {
  const [listData, setListData] = useState([]);
  const [listData2, setListData2] = useState([]);
  const [show2, setShow2] = useState(false);

  const reLaunch = () => {
    setReadyStart();
    wx.reLaunch({
      url: "/pages/index/index",
    });
  };

  const reLaunch2 = () => {
    setReadyStart();
    wx.reLaunch({
      url: "/pages/static/index",
    });
  };

  const toggleList = () => {
    getTimeWithModal(getCurrentPageContext());
    setShow2(!show2);
  };

  const add2Lot = () => {
    getTimeWithModal(getCurrentPageContext());
    setListData2(listData2.concat(buildData(1000, true)));
  };

  const add2Lot2 = () => {
    getTimeWithModal(getCurrentPageContext());
    setListData2(listData2.concat(buildData(5000, true)));
  };

  const add = () => {
    getTimeWithModal(getCurrentPageContext());
    setListData(listData.concat(buildData(100)));
  };

  const addLot = () => {
    getTimeWithModal(getCurrentPageContext());
    setListData(listData.concat(buildData(1000)));
  };

  const deleteOne = () => {
    getTimeWithModal(getCurrentPageContext());
    const copy = [...listData];
    copy.shift();
    setListData(copy);
  };

  const deleteAll = () => {
    getTimeWithModal(getCurrentPageContext());
    setListData([]);
  };

  const update = () => {
    getTimeWithModal(getCurrentPageContext());
    const copy = [...listData];
    if (copy[0]) {
      copy[0].amount++;
    }
    setListData(copy);
  };

  const updateAll = () => {
    getTimeWithModal(getCurrentPageContext());
    const copy = [...listData];
    copy.forEach((item) => {
      item.amount++;
    });
    setListData(copy);
  };

  useReady(() => {
    getReadyTimeWithModal();
  });

  return (
    <View>
      <View className="controls">
        <Button onClick={add}>新增可用券(100)</Button>
        <Button onClick={deleteAll}>删除可用券(all)</Button>
        <Button onClick={addLot}>新增可用券(1000)</Button>
        <Button onClick={update}>更新可用券(1)</Button>
        <Button onClick={updateAll}>更新可用券(all)</Button>
        <Button onClick={deleteOne}>删除可用券(1)</Button>
        <Button onClick={add2Lot}>新增不可用券(1000)</Button>
        <Button onClick={add2Lot2}>新增不可用券(5000)</Button>
        <Button onClick={toggleList}>
          切换到{show2 ? "可用券" : "不可用券"}
        </Button>
        <Button onClick={reLaunch}>刷新页面</Button>
        <Button onClick={reLaunch2}>进入静态测试</Button>
      </View>
      {!show2 ? (
        <View className="couponList">
          <View className="title">可用券列表({listData.length})</View>
          {listData.map((item) => (
            <CouponCard key={item.id} info={item} />
          ))}
        </View>
      ) : (
        <View className="couponList">
          <View className="title">不可用券列表({listData2.length})</View>
          {listData2.map((item) => (
            <CouponCard key={item.id} info={item} />
          ))}
        </View>
      )}
    </View>
  );
}
