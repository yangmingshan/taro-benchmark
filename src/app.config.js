export default defineAppConfig({
  pages: ["pages/index/index", "pages/static/index"],
  window: {
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTextStyle: "black",
    navigationBarTitleText: "Taro",
    backgroundColor: "#ffffff",
    backgroundColorTop: "#ffffff",
    backgroundColorBottom: "#ffffff",
  },
  lazyCodeLoading: "requiredComponents",
});
