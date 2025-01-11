import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ResponsiveMenu from "./components/Navbar/ResponsiveMenu";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Footer from "./components/Footer/Footer";
const App = () => {
  return(
    <>
    <main className="overflow-x-hidden">
      <Navbar />
      <ResponsiveMenu/>
      <Hero/>
      <Menus/>
      <Footer/>
    </main>
    </>
  )
}
export default App
