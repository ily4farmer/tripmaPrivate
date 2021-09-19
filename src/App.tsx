import React, { FC } from 'react'
import './App.scss'
import Header from './Components/Header/Header'
import Discount from './Components/Discount/Discount'
import Footer from './Components/Footer/Footer'
import Modal from './Components/Modal/Modal'
import { HashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'

const App:FC = () => {
  return (
    <HashRouter>
      <Discount/>
      <Header/>
      <Layout/>
      <Footer/>
      <Modal/>
    </HashRouter>
  )
}

export default App

