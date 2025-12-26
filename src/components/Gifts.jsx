import React from 'react'
import { motion } from "framer-motion";

const Gifts = () => {
  return (
    <div>
      
      <motion.img
        src="/Christmas_Gift.png"
        className="christmas_tree"
        style={{ right: "15vw", zIndex: 2, bottom: "17vh", height: "12vh", position: "absolute" }}
        initial={{ y: "4vh", opacity: 0 }}
        whileInView={{ y: "2vh", opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "backOut" }}
      />
      <motion.img
        src="/Christmas_Gift.png"
        className="christmas_tree"
        style={{ right: "15vw", zIndex: 2, bottom: "17vh", height: "12vh", position: "absolute" }}
        initial={{ y: "4vh", opacity: 0 }}
        whileInView={{ y: "2vh", opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "backOut" }}
      />
      <motion.img
        src="/Gift1.png"
        className="christmas_tree"
        style={{ right: "18vw", zIndex: 2, bottom: "15vh", height: "12vh", position: "absolute" }}
        initial={{ y: "4vh", opacity: 0 }}
        whileInView={{ y: "2vh", opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5,delay :1, ease: "backOut" }}
      />
      
      <motion.img
        src="/Gift2.png"
        className="christmas_tree"
        style={{ left: "20vw", zIndex: 2, bottom: "12vh", height: "10vh", position: "absolute" }}
        initial={{ y: "4vh", opacity: 0 }}
        whileInView={{ y: "2vh", opacity: 1, rotate: 5 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5,delay: 1, ease: "backOut" }}
      />
      <motion.img
        src="/Gift5.png"
        className="christmas_tree"
        style={{ right: "38vw", zIndex: 2, bottom: "12vh", height: "15vh", position: "absolute" }}
        initial={{ y: "4vh", opacity: 0 , rotate: 15}}
        whileInView={{ y: "2vh", opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5,delay:1, ease: "backOut" }}
      />
      <motion.img
        src="/Gift4.png"
        className="christmas_tree"
        style={{ left: "28vw", zIndex: 2, bottom: "5vh", height: "12vh", position: "absolute" }}
        initial={{ y: "4vh", opacity: 0 , rotate: -10}}
        whileInView={{ y: "2vh", opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5,delay:1, ease: "backOut" }}
      />
      
    </div>
  )
}

export default Gifts
