import { proxySetData, setReadyStart } from "./proxy";

import "./app.css";

proxySetData();

setReadyStart();

function App({ children }) {
  // children 是将要会渲染的页面
  return children;
}

export default App;
