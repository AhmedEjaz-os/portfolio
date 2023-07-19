import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<App />} exact ></Route>
        <Route path="*" element={<Navigate to="/portfolio" replace={true}  />} exact></Route>
      </Routes>
    <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();