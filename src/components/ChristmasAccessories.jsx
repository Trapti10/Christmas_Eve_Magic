import React from 'react'
import { motion } from "framer-motion";
import { DecoAnimation } from "../animations/DecoAnimation";

const ChristmasAccessories = () => {
  return (
      <div
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <motion.img
        src="/img1.png"
        style={{ bottom: "-5vh", left: 0, height: "25vh", position: "absolute", zIndex: 2 }}
        initial={{ x: "-1vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "backOut" }}
      />
      <motion.img
       src="/img2.png"
       className="christmas_tree"
       style={{right: 0, zIndex:2, bottom:"-9vh", height:"25vh", position:"absolute", opacity:0}}
       initial={{y : "-4vh", opacity: 0}}
       viewport={{ once: true, amount: 0.4 }}
       whileInView={{y: "-10vh", opacity: 5}}
       transition={{duration: 1,ease: "backOut"}}
       />
      <motion.img
       src="/img4.png"
       className="christmas_tree"
       style={{right: 0, zIndex:2, top:"10vh", height:"55vh", position:"absolute", opacity:0}}
       variants={DecoAnimation}
       viewport={{ once: true, amount: 0.4 }}
      initial="hidden"
       whileInView='visible'
       />
      <motion.img
       src="/img4.png"
       className="christmas_tree"
       style={{right: "21vw", zIndex:2, top:"10vh", height:"55vh", position:"absolute", opacity:0}}
      variants={DecoAnimation}
       viewport={{ once: true, amount: 0.4 }}
      initial="hidden"
       whileInView='visible'
       />
      <motion.img
       src="/img4.png"
       className="christmas_tree"
       style={{left: "36vw", zIndex:2, top:"10vh", height:"55vh", position:"absolute", opacity:0}}
        variants={DecoAnimation}
       viewport={{ once: true, amount: 0.4 }}
      initial="hidden"
       whileInView='visible'
       />
      <motion.img
       src="/img4.png"
       className="christmas_tree"
       style={{left: "8vw", zIndex:2, top:"10vh", height:"55vh", position:"absolute", opacity:0}}
        variants={DecoAnimation}
       viewport={{ once: true, amount: 0.4 }}
      initial="hidden"
       whileInView='visible'
       />
      <motion.img
       src="/img4.png"
       className="christmas_tree"
       style={{left: 0, zIndex:2, top:"10vh", height:"55vh", position:"absolute", opacity:0}}
        variants={DecoAnimation}
       viewport={{ once: true, amount: 0.4 }}
      initial="hidden"
       whileInView='visible'
       />
    </div>
  )
}

export default ChristmasAccessories