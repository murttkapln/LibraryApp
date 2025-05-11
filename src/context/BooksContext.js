// Books Context

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState([]);


  const APP_KEY = process.env.REACT_APP_apiKey
  console.log(APP_KEY);
  const getData = async ()=>{
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`
    try {
        const {data} = await axios(url)
    } catch (error) {
            console.log(err);
    }
  }

  const values = { myData, setMyData };
  return (
    <BooksContext.Provider value={{ values }}>{children}</BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  return useContext(BooksContext);
};

export default BooksContextProvider;
