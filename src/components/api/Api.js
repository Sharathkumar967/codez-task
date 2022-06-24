import axios from "axios";
import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import "../../App.css";

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      )
      .then((response) => {
        setData([...response.data]);
      });
  }, []);

  return (
    <div className="card-container">
      {data?.map((item,index) => {
        return <ImageCard key={index} item={item} />;
      })}
    </div>
  );
}

export default Api;
