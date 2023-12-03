import React, { useEffect, useRef } from 'react'
import backGround from '../Asset/cafeback.jpg';
import { Image } from 'react-bootstrap';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'

export const Hero = () => {
  const targetRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const fadeIn = useAnimation();

  useEffect(() => {
    if (isInView && fadeIn) {
      fadeIn.start("visible")
    }
  }, [isInView])

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.3]);

  return (
    <>
      <div style={{ height: '200svh' }}>
        <div className="overflow-hidden" style={{ position: 'sticky', top: '0%' }}>
          <motion.div style={{ scale: scale }}>
            <div ref={targetRef} style={{ height: '100vh', width: '100%', position: 'relative', transition: 'transform 0.2s ease-in-out' }}>
              <Image src={backGround} alt="cafe" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              <div className='d-flex justify-content-center' style={{ position: 'absolute', top: '30%', width: '100%' }}>
                <div className='mx-5'>
                  <div className='text-light d-flex justify-content-center display-6'>Take-Out & Delivery</div>
                  <div className='text-light d-flex justify-content-center display-6'>Breakfast, Lunch & Brunch</div><br />
                  <div className='text-light d-flex justify-content-center display-7'>832 Anzac Parade, Maroubra NSW 2035, Australia</div>
                </div>


              </div>
            </div>
          </motion.div>
        </div>

        <div ref={ref} className='d-flex justify-content-center' style={{ position: 'absolute', top: '168%', display: 'inline-block', overflow: 'hidden', width: '100%'}}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            animate={fadeIn}
            transition={{ duration: 0.4, delay: 0.25 }}
            className='d-flex justify-content-between text-light'
          >
            <div className="d-flex flex-column fw-bold me-3 dispaly-7">
              <span>Monday to Firday</span>
              <span>Saturday</span>
              <span>Sunday</span>
            </div>
            <div style={{ background: 'white', width: '0.5vh' }} />
            <div className="d-flex flex-column fw-bold ms-3">
              <span>8am - 3pm</span>
              <span>8am - 3pm</span>
              <span>9am - 3pm</span>
            </div>
          </motion.div>

        </div>
      </div>
    </>


  )
}
