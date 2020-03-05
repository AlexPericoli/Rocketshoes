import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import Header from "./components/Header";

import GlobalStyle from "./styles/global";

export default function App() {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyle />
         </BrowserRouter>
      </Provider>
   );
}
