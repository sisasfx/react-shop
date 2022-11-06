import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@styles/global.css";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/Notfound";
import Checkout from "../pages/Checkout";
import CreateAccount from "../pages/CreateAccount";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";
import Orders from "../pages/Orders";
import SendEmail from "../pages/SendEmail";
import AppContext from "../context/AppContext";
import useInitialState from '../hooks/useInitialState';
import ClothesList from "../containers/ClothesList";
import ElectronicList from "../containers/ElectronicList";
import FurnitureList from "../containers/FurnitureList";
import ToysList from "../containers/ToysList";

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/clothes" element={<ClothesList />}/>
          <Route exact path="/electronic" element={<ElectronicList />}/>
          <Route exact path="/furniture" element={<FurnitureList />}/>
          <Route exact path="/toys" element={<ToysList />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/recovery-password" element={<RecoveryPassword/>} />
          <Route exact path="/checkout" element={<Checkout/>} />
          <Route exact path="/create-account" element={<CreateAccount/>}/>
          <Route exact path="/my-account" element={<MyAccount />} />
          <Route exact path="/new-password" element={<NewPassword/>} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/send-email" element={<SendEmail/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
