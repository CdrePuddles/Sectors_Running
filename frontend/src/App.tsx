// src/App.tsx
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("Home");

  const renderPage = () => {
    switch (selectedPage) {
      case "Home":
        return <div>Welcome to the Home page!</div>;
      case "Dashboard":
        return <div><Dashboard /></div>;
      case "Contact":
        return <div>Contact us for more information!</div>;
      default:
        return <div>Page not found!</div>;
    }
  };


  return (

  
    <div>
      <Header onPageChange={setSelectedPage}/> {/* Your reusable header component */}
      <main>{renderPage()}</main>
    </div>


  );
};

// const Home: React.FC = () => <div>Welcome to the Home page!</div>;
// const About: React.FC = () => <Dashboard />;
// const Contact: React.FC = () => <div>Contact us for more information!</div>;
// const NotFound: React.FC = () => <div>Page not found!</div>;



export default App;