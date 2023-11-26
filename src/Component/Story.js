import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import firstImg from '../Asset/menuOne.png'
import secondImg from '../Asset/menuTwo.png'
import thirdImg from '../Asset/menuThree.png'
import forthImg from '../Asset/menuFour.png'


export const Story = () => {

    const imageMenu = [firstImg, secondImg, thirdImg, forthImg];

  return (
    <>
        <Container className='mt-5'>
            <Row>
                <Col>
                    <div style={{ fontSize: '5vh', fontWeight: 'bold'}}>Our Story</div>
                    <div className='mt-5'>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, error. Minima atque perspiciatis mollitia explicabo nisi nam asperiores repellendus aspernatur, harum reprehenderit quos esse praesentium reiciendis ipsum ab facere totam!
                            Distinctio veniam, dicta reprehenderit deserunt, officia, doloremque iure fuga quaerat illo fugit modi! Mollitia, ducimus? Ab provident nulla nam, quasi corporis veniam magni, similique illo amet accusantium hic sint recusandae.
                        </p>
                    </div>
                </Col>
                <Col>
                    <Row>
                        {imageMenu.map((imageMenu, i)=>(
                            <Col sm={6} md={4} lg={6} xl={6} key={i}>
                                <Image src={imageMenu} alt={`Image ${i}`} fluid className='mb-3'/>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            
        </Container>
    </>
    
  )
}
