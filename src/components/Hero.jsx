import React from 'react'
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className='hero'>
      <motion.h1
      style={{  fontFamily: "'Satisfy', 'cursive'",
  fontWeight: 400,
 fontStyle: 'normal',
        filter: "drop-shadow(0 0 40px rgba(228, 228, 205, 0.9))"
      }}
      initial={{ opacity: 0, y: "40vh" ,x: "35vw" }}
      
      whileInView={{ opacity: 1, y: "30vh" }}
      viewport={{once:true,amount :0.3}}
      transition={{ duration: 1, delay: 3}}
      >
        🎄 Christmas Eve Magic 🎄
      </motion.h1>
        <motion.p
        style={{ filter: "drop-shadow(0 0 40px rgba(228, 228, 205, 0.9))"
        }}
        initial={{ opacity: 0, y: "45vh" ,x: "42vw" }}
        
        whileInView={{ opacity: 1, y: "32vh" }}
        viewport={{once : true, amount :0.3}}
        transition={{ duration: 1, delay: 5}}
        
        >Scroll • Snow • Surprise</motion.p>
    </section>
  )
}

export default Hero