import { motion } from 'framer-motion'
import React from 'react'
import "../styles/santa.css";

const Santa = () => {
  return (
    <div className='santa'>

      <motion.img
        src="santa3.png"
        alt='santa'
        initial={{ x: "-55vw", y: "6vh", rotate: 20 }}
        whileInView={{ x: "150vw", y: "-15vh", rotate: -15 }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
      />
    </div>
  )
}

export default Santa
