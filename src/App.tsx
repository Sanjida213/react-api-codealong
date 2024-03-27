import {useState} from "react";
import "./App.scss";
import { User, UserResult } from "./types/User";
import Button from "./components/Button/Button";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";

const App = () => {
  
  return (
    <div className="app">
      <h1>Random User Generator</h1>
      
      <ProfileContainer />
    </div>
  );
};

export default App;
