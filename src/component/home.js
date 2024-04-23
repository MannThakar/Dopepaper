import React, { useEffect, useState } from 'react'
import './Style.css'
import Card from './Card'
import Hero from './Hero';
import Nav from './Nav'
import Loading from './Loading';

const Home = () => {
    const [datas, setDatas] = useState([]);


    async function Fetch() {
        const api = await fetch(`https://pixabay.com/api/?key=42974804-979e314cc4c2bd17b30ee04f2&q=cars&image_type=photo`)
        const data = await api.json()
        setDatas(data.hits);

    }


    useEffect(() => {
        Fetch()
    }, [])

    if (datas === null) return <h1>Data is not found</h1>

    return (datas?.length === 0 ? <Loading /> :
        <>
            <Nav></Nav>
            <Hero/>


            <div className='CardCollection'>
                {
                        (datas?.map((val) => {

                            return (
                                <>
                                    <Card key={val.id} size={val.largeImageURL} id={val.id} />
                                </>

                            )
                        }))

                }

            </div>

        </>
    )
}

export default Home

