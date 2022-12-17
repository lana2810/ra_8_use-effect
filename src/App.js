import "./App.css";
import React, { useEffect, useState } from "react";
import List from "./Component/List";
import Details from "./Component/Details";

function App() {
  const [list, setList] = useState([]);
  const [idUser, setIdUser] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUser();
    setLoading(true);
    const url = idUser
      ? process.env.REACT_APP_CURRENCY_URL + `${idUser}.json`
      : process.env.REACT_APP_CURRENCY_URL + "users.json";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        idUser ? setUser(json) : setList(json);
        setLoading(false);
      });
  }, [idUser]);

  const handleClick = (id) => {
    setIdUser(id);
  };
  return (
    <div className="container">
      {loading ? <progress /> : <List list={list} onClick={handleClick} />}
      {user && <Details user={user} />}
    </div>
  );
}
export default App;
