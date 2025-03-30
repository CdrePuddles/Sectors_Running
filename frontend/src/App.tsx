// src/App.tsx
import React, { useState, createContext, useContext } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth, AuthProvider } from "./components/AuthContext";
import "./App.css"


const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("Home");
  //const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  //const { isLoggedIn, login, logout } = useAuth();


  const renderPage = () => {
    switch (selectedPage) {
      case "Home":
        return <Home/>;
      case "Dashboard":
        return <Dashboard />;
      case "Contact":
        return <Contact/>
      case "Profile":
        return <div>Contact us for more information!</div>
      case "Login":
          return <Login />
      default:
        return <div>Page not found!</div>;
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 100,
    },
  };


  return (

  
    <div>
      <AuthProvider>
      <Header onPageChange={setSelectedPage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPage}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
          <main id ='content'>{renderPage()}</main>
        </motion.div>
      </AnimatePresence>

      <Footer />
      </AuthProvider>
    </div>



  );
};


export default App;