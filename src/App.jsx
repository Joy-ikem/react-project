import React from 'react'
import './App.css'
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import Body from './components/Body';
import Half from './components/Half';
import End from './components/End';
import Footer from './components/footer';
import Screen from './components/Screen';



const App = () => {
  return (
    <>
    <Navbar />  
    < Hero/>
    <Home/>
    <Body/>
    <Half/>
    <End/>
    <Footer/>
    <Screen/>
    </>
  )
}

export default App
