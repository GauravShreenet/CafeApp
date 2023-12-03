import React, { useLayoutEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import firstImg from '../Asset/menuOne.png'
import secondImg from '../Asset/menuTwo.png'
import thirdImg from '../Asset/menuThree.png'
import forthImg from '../Asset/menuFour.png'
import fifthImg from '../Asset/menuFive.png'
import sixthImg from '../Asset/menuSix.png'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'


export const Story = () => {
    
    const { ref, inView } = useInView();
      
    const imageMenu = [firstImg, secondImg, thirdImg, forthImg, fifthImg, sixthImg];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [shouldAnimate, setShouldAnimate] = useState(true);
    const [containerStyle, setContainerStyle] = useState({
        height: '55vh',
        overflow: 'hidden'
    })

    useLayoutEffect(()=>{
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', updateWindowWidth);
        return () => window.removeEventListener('resize', updateWindowWidth)
    }, [])

    useLayoutEffect(() => {
        if (windowWidth <= 575) {
            setShouldAnimate(false);
            setContainerStyle({
                height: 'auto',
                overflow: 'visible',
                
            });
        } else {
            setShouldAnimate(true);
            setContainerStyle({
                height: '55vh',
                overflow: 'hidden',
                
            });
        }
    }, [windowWidth])

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
                <Col style={containerStyle}>
                    <Row>
                        {imageMenu.map((imageMenu, i)=>(
                            <Col sm={12} md={12} lg={6} xl={6} xxl={6} key={i} className='d-flex justify-content-center'>
                                <motion.div
                                    initial={{y: 0}}
                                    style={{ height: '28vh' }}
                                    animate={{y : shouldAnimate ? (inView ? -230 : 0) : 0, 
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
