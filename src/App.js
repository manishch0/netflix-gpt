// // import logo from "./logo.svg";
// // import "./App.css";
// import Body from "./component/Body";
// import { Provider } from "react-redux";
// import appStore from "./utlis/appStore";

// function App() {
//   return (
//     <Provider store={appStore}>
//       <Body />
//     </Provider>
//   );
// }

// export default App;


import { Provider } from "react-redux";
// import Body from "./components/Body";
import Body from './component/Body'
// import appStore from "./utils/appStore";
import appStore from "./utlis/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;