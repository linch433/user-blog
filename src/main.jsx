import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import {Provider} from "react-redux";
import {store} from "./app/store/store.js";
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {api} from "./app/store/features/api.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ApiProvider api={api}>
      <BrowserRouter>
        <ToastContainer position='top-center' autoClose={3000} theme='dark'/>
        <App/>
      </BrowserRouter>
    </ApiProvider>
  </Provider>
);
