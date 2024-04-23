import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'
const Card = (props) => {
    const navigate = useNavigate()


    return (
        <>
            <div className="content" onClick={()=>navigate(`/${props.id}`)}>
                <img src={props.size} className="card-img-top" alt="img">
                </img>


            </div>


        </>
    )
}

export default Card