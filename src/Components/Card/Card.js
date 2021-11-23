import React from "react";
function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.contact.name}</h5>
        <p className="card-title">{props.contact.city}</p>
        <p className="card-title">{props.contact.email}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
export default Card;
