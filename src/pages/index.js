import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "./Dashboard";
import { Route,BrowserRouter, Routes } from "react-router-dom";
import Login from "./Login";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
 <Dashboard />
 

   </div>
  );
}
