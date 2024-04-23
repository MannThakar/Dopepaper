import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Hero = ({ searchFun }) => {
    const [Search, setSearch] = useState();
    const navigate = useNavigate();
    return (
        <div className='hero'>
            <div className='Hero d-flex flex-row justify-content-center align-items-center py-5'>


                <div className="search">
                    <div className="search-box">
                        <div className="search-field">
                            <input placeholder="Search..." className="input" type="text" value={Search} onChange={(e) => setSearch(e.target.value)} />
                            <div className="search-box-icon">
                                <button className="btn-icon-content"
                                    onClick={() =>{

                                        navigate('/allimg',{ state: Search });
                                    }}>
                                    <i className="search-icon">
                                        <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='lister'>
                <ul className='list d-flex flex-row justify-content-center'>
                    <li onClick={() => setSearch("cars")}>Cars</li>
                    <li onClick={() => setSearch("Trending")}>Trending</li>
                    <li onClick={() => setSearch("Red")}>Red</li>
                    <li onClick={() => setSearch("Purple")}>Purple</li>
                    <li onClick={() => setSearch("New")}>New</li>
                </ul>
            </div>
        </div>

    )
}
export default Hero

