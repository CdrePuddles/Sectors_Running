// src/App.tsx
import React, { useState, createContext, useContext } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Profile from "./components/Profile";

import { motion, AnimatePresence } from "framer-motion";
import { useAuth, AuthProvider, ProfileProps } from "./components/AuthContext";
import "./App.css"


// const profileData = {
//   name: "Kyle Smith",
//   photoUrl: "https://static-00.iconduck.com/assets.00/cat-face-emoji-2048x1821-x3kf878r.png",
//   username: "kyle123",
//   memberSince: "March 29, 2025",
//   distanceTravelled: 1500,
//   team: "Red"
// };

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("Home");
  //const { profile } = useAuth();


  const renderPage = () => {
    switch (selectedPage) {
      case "Home":
        return <Home/>;
      case "Dashboard":
        return <Dashboard />;
      case "Contact":
        return <Contact/>
      case "Team":
        return <Team/>
      case "Profile":
          return <Profile/>
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