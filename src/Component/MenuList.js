import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const MenuList = ({title, desc, price}) => {
    return (
        <div className='mb-5'>
            <h5>
                {title}
            </h5>
            <Row>
                <Col md={12} lg={6} xl={8} xxl={8}>
                    {desc}
                </Col>
                <Col xl={4} xxl={4} className='text-end'>
                    {price}
                </Col>
            </Row>
        </div>
    )
}
