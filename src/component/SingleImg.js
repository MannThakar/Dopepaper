import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { saveAs } from 'file-saver'
import Shimmer from './Shimmer'
import { useNavigate } from 'react-router-dom'

function SingleImg() {
    const [imgUrl, setImgUrl] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const api = await fetch(`https://pixabay.com/api/?key=42974804-979e314cc4c2bd17b30ee04f2&q=cars&image_type=photo&id=${id}`);
        const apiData = await api.json();
        setImgUrl(apiData.hits[0].largeImageURL);
    }

    const downloadImage = () => {
        saveAs(imgUrl, 'image.jpg') // Put your image URL here.
    }


    return (
        <>
            <button onClick={()=>navigate('/')}>Click</button>
            {imgUrl.length === 0 ? <Shimmer /> :
                <div className='view'>
                    <img src={imgUrl} alt="wallpapers" className='imgs' />
                    <button onClick={downloadImage} className='btn'>Download!</button>
                </div>}
        </>
    )


}

export default SingleImg;
