import React, { useEffect, useRef } from 'react'
import backGround from '../Asset/cafeback.png';
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
  const scale = useTransform(scrollY, [0, 500], [1, 1.5]);

  return (
    <>
      <div style={{ height: '200vh' }}>
        <div className="overflow-hidden" style={{ position: 'sticky', top: '0%' }}>
          <motion.div style={{ scale: scale }}>
            <div ref={targetRef} style={{ height: '100vh', width: '100%', position: 'relative', transition: 'transform 0.2s ease-in-out' }}>
              <Image src={backGround} alt="cafe" style={{ height: '100%', width: '100%' }} />
              <div style={{ position: 'absolute', right: '30%', left: '35%', top: '30%' }}>
                <div className='text-light d-flex justify-content-center' style={{ fontSize: '5vh' }}>Take-Out & Delivery</div>
                <div className='text-light d-flex justify-content-center' style={{ fontSize: '5vh' }}>Breakfast, Lunch & Brunch</div><br />
                <div className='text-light d-flex justify-content-center'>832 Anzac Parade, Maroubra NSW 2035, Australia</div>

              </div>
            </div>
          </motion.div>
        </div>

        <div ref={ref} style={{ width: '20%', position: 'absolute', top: '160%', left: '42.2%', display: 'inline-block', overflow: 'hidden' }}>
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
            <div className="d-flex flex-column fw-bold">
              <span style={{ fontSize: '2.5vh' }}>Monday to Firday</span>
              <span style={{ fontSize: '2.5vh' }}>Saturday</span>
              <span style={{ fontSize: '2.5vh' }}>Sunday</span>
            </div>
            <div style={{ background: 'white', width: '0.5vh' }} />
            <div className="d-flex flex-column fw-bold">
              <span style={{ fontSize: '2.5vh' }}>8am - 3pm</span>
              <span style={{ fontSize: '2.5vh' }}>8am - 3pm</span>
              <span style={{ fontSize: '2.5vh' }}>9am - 3pm</span>
            </div>
          </motion.div>

        </div>
      </div>
    </>


  )
}
