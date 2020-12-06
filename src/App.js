import React from "react";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import Link from "./components/Links";
export default function App() {
  return (
    <div className="container p-4 ">
      <div className="row">
        <Link/>
        
      </div>
      <ToastContainer/>
    </div>
  );
}
