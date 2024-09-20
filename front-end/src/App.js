import Login from "./components/Login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import ChatBot from "./components/chatbot/ChatBot.js";
import Create from "./components/Create";
import JoinTrip from "./components/JoinTrip.js"
import { useEffect } from "react";
import About from "./components/About.js";
import { useTranslation } from "react-i18next";
import Contact from "./components/Contact.js";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && (savedLang === "en" || savedLang === "हिं")) {
      console.log("i am here", { savedLang });
      i18n.changeLanguage(savedLang);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <ChatBot />
            </>
          }
        />
        <Route path="/signup" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/create" element={<Create />} />
        <Route path="/join" element={<JoinTrip/>}></Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  );
}

export default App;
