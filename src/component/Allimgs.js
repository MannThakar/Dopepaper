import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import Card from './Card'
import { useNavigate } from 'react-router-dom'

const Allimgs = () => {

  const [datas, setDatas] = useState([]);
  const location = useLocation();
  const paramdata = location.state;
  const navigate = useNavigate()

  useEffect(() => {
    searches();
  }, [])
  async function searches() {
    const api = await fetch(`https://pixabay.com/api/?key=42974804-979e314cc4c2bd17b30ee04f2&q=${paramdata}&image_type=photo`)
    const data = await api.json()
    setDatas(data.hits);

  }
  console.log(datas.length);
  if (datas.length === 0) return <h1>Not Found</h1>
  return (

    <>
      <div className="secondCard">
        {datas?.map((e) =>
          <Card key={e.id} size={e.largeImageURL} id={e.id} />
        )}
      </div>
    </>
  )
}

export default Allimgs