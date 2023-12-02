import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MenuList } from './MenuList'

const menuItems = [
    {
        title: "Food Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: '$17'
    },
    {
        title: "Food Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: '$17'
    },
    {
        title: "Food Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: '$17'
    },
    {
        title: "Food Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: '$17'
    },
]

export const ItemPrices = () => {
    return (
        <>
            <Container className='d-none d-sm-block mb-4'>
                <div className="text-center" style={{ fontSize: '5vh', fontWeight: 'bold' }}>MENU</div>
                <div className='d-flex justify-content-center align-items-center'>
                    <Row>
                        <Col className='mx-5'>
                            <h3 className='fw-bold text-capitalize my-3'>
                                Coffee
                            </h3>
                            {
                                menuItems.map((item, i) => (
                                    <MenuList key={i} {...item}/>
                                ))
                            }
                        </Col>
                        <Col className='me-5'>
                        <h3 className='fw-bold text-capitalize my-3'>
                                All day
                            </h3>
                            {
                                menuItems.map((item, i) => (
                                    <MenuList key={i} {...item}/>
                                ))
                            }
                        </Col>
                        <Col className='me-5'>
                        <h3 className='fw-bold text-capitalize my-3'>
                                Brunch
                            </h3>
                            {
                                menuItems.map((item, i) => (
                                    <MenuList key={i} {...item}/>
                                ))
                            }
                        </Col>
                    </Row>
                </div>
                <hr style={{border: '1.5px solid '}}/>
            </Container>
        </>
    )
}
