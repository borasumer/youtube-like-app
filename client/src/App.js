import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./components/routes";
import Navbar from "./components/Navbar";
import YoutubeContextProvider from "./contexts/YoutubeContext";

export default function App() {
  return (
    <div className="App">
      <YoutubeContextProvider>
        <Navbar />
        <Routes />
      </YoutubeContextProvider>
    </div>
  );
}
