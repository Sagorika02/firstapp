import React from "react";
import Card from "../Card/Card";

function Dashboard() {
  let myStyle = {
    color: "red",
    fontFamily: "Monotype Corsiva",
    fontSize: "30pt",
    textDecoration: "underline"
  };

  let Contact = {
    name: "Sagorika Majumdar",
    city: "Malda",
    email: "sagorika.majumdar@niit.com"
  };
  return (
    <div>
      <h2 style={myStyle}>This is dasboard</h2>
      <Card contact={Contact} />
    </div>
  );
}

export default Dashboard;
