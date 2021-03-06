import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from './redux/BaiTapDatVeXemPhim/reducer/rootReducer';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import BaitapXucXac from './BC20_BaiTapXucXac_NgoDiemHue';
// import OanTuXi from './BaiTapOanTuXi';
import BaiTapDatVeXemPhim from './BaiTapDatVeXemPhim';
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <Provider store={store}>
    <BaiTapDatVeXemPhim />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
