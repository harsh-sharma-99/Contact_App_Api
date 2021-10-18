import React from "react";
import { Link } from "react-router-dom";
import user from "../images/download.png";

const ContactDetails = (props) => {
  console.log(props);
  const { name, email } = props.location.state.contact;
  return (
    <div className="main" style={{ marginTop: "100px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Conatact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
