import React from 'react'
import { Hero } from '../Component/Hero'
import { Story } from '../Component/Story'
import { ItemPrices } from '../Component/ItemPrices'
import { Footer } from '../Component/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <Story />
            <ItemPrices />
            <div className='d-flex justify-content-center'>
                <div className='text-center' style={{ width: '30%' }}>
                    832 Anzac Parade, Maroubra NSW 2035, Australia<br /><br />
                    +61 (00) 0000000 | abc@abc.com<br /><br />
                    Monday to Saturday 8am - 3pm | Sunday 9am - 3pm<br /><br />
                    <h3 className='text-decoration-underline'>Join our team</h3>
                    <div className='d-flex justify-content-center mt-3' style={{ fontSize: '5vh' }}>
                        <i className="fa-brands fa-instagram me-5"></i> <i className="fa-brands fa-square-facebook"></i>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Home