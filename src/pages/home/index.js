import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import HomeView from "./homeView";

const validationMessage = "Name can't be empty";

export default function Home() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");
  let history = useHistory();
  let location = useLocation();
  const handleSubmit = e => {
    e.preventDefault();
    if (!inputs.userName) {
      return setMessage(validationMessage);
    } else {
      let { from } = location.state || { from: { pathname: "/map" } };
      history.replace(from);
    }
  };

  const onChange = e => {
    let { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    value ? setMessage("") : setMessage(validationMessage);
  };

  return (
    <HomeView
      onChange={onChange}
      handleSubmit={handleSubmit}
      message={message}
    />
  );
}
