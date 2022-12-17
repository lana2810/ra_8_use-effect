import React from "react";

function Details({ user }) {
  const { name, avatar, details } = user;
  const { city, company, position } = details;
  return (
    <div className="user">
      <img src={avatar} alt="user-foto" />
      <div className="user-info user-name">{name}</div>
      <div className="user-info">City: {city}</div>
      <div className="user-info">Company: {company}</div>
      <div className="user-info">Position: {position}</div>
    </div>
  );
}

export default Details;
