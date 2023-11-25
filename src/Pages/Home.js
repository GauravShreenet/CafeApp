import React from 'react'
import backGround from '../Asset/cafeback.png'
import { Container, Image } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <div>
                <Image src={backGround} alt="" fluid/>
            </div>
        </>

    )
}

export default Home