import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import firstImg from '../Asset/menuOne.png'
import secondImg from '../Asset/menuTwo.png'
import thirdImg from '../Asset/menuThree.png'
import forthImg from '../Asset/menuFour.png'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'


export const Story = () => {
    
    const { ref, inView } = useInView();
      
    const imageMenu = [firstImg, secondImg, thirdImg, forthImg, firstImg, secondImg];

  return (
    <>
        <Container className='my-5 overflow-hidden'>
            <Row>
                <Col className='me-5 mt-5' style={{height: '60vh'}} md={6} sm={12}>
                    <div style={{ fontSize: '5vh', fontWeight: 'bold'}}>Our Story</div>
                    <div className='mt-4'>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, error. Minima atque perspiciatis mollitia explicabo nisi nam asperiores repellendus aspernatur, harum reprehenderit quos esse praesentium reiciendis ipsum ab facere totam!
                            Distinctio veniam, dicta reprehenderit deserunt, officia, doloremque iure fuga quaerat illo fugit modi! Mollitia, ducimus? Ab provident nulla nam, quasi corporis veniam magni, similique illo amet accusantium hic sint recusandae.
                        </p>
                        
                    </div>
                </Col>
                <Col className='ms-5' style={{height: '55vh', overflow: 'hidden'}}>
                    <Row>
                        {imageMenu.map((imageMenu, i)=>(
                            <Col sm={6} md={12} lg={6} xl={6} xxl={6} key={i}>
                                <motion.div
                                    initial={{y: 0}}
                                    style={{ height: '28vh' }}
                                    animate={{y : inView ? -230 : 0, 
                                    transition: { duration: 0.5, ease: 'easeOut'}}}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image src={imageMenu} alt={`Image ${i}`} fluid className='mb-3' style={{height: '24vh'}}/>
                                </motion.div>
                                
                            </Col>
                        ))}
                    </Row>
                </Col>
                <div ref={ref}/>
                        
            </Row>
            
        </Container>
    </>
    
  )
}
