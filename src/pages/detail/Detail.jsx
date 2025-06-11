import { useLocation, useParams } from "react-router-dom";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailPart,
  DetailTitle,
  InfoPart,
} from "./Detail.style";

import defaultImage from "../../assets/book.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [detailData, setDetailData] = useState("")
  // console.log(state);

  const APP_KEY = process.env.REACT_APP_apiKey;
  const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${APP_KEY}`;

  const getDetailData = async ()=> {
    try {
      const {data} = await axios(url)
      // console.log(data);
      setDetailData(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDetailData()
  }, [])
  
  return (
    <DetailContainer>
      <DetailPart>
        <DetailTitle>{state?.volumeInfo?.title}</DetailTitle>
        <DetailImg
          src={state?.volumeInfo?.imageLinks.smallThumbnail || defaultImage}
          alt=""
        />
        <Description>{state?.volumeInfo?.description}</Description>
        <InfoPart>
          <p>{state?.volumeInfo?.authors.join(" - ")}</p>
          <p>
            {state?.volumeInfo?.publishedDate} / {state?.volumeInfo?.publisher}
          </p>
        </InfoPart>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;
