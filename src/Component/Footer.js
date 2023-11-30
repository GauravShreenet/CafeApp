import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const Footer = () => {
    return (
        <div className='bg-dark text-light text-center mt-5'>
            <div className='fs-3 fw-bold pt-4'>Subscribe</div>
            <div>Sign up with your email address to receive news and updates.</div>
            <div className='d-flex justify-content-center mt-3'>
                <form style={{width: '50%'}}>
                    <Row>
                        <Col xxl={10}>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Address'/>
                            </div>
                        </Col>
                        <Col className='d-grid'>
                            <button type="submit" className="btn btn-light">Sign Up</button>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>

    )
}
