import React from 'react'
import { motion } from "framer-motion";
import { treeAnimation } from '../animations/treeAnimations';

const Tree = () => {
  return (
    <div className='Tree-wrapper'>   
      <motion.img
       src="/Tree8.png"
       className="christmas_tree"
       style={{ left: "1vw" , zIndex:2, top:"47vh", height:"42vh", position:"absolute"}}
       variants={treeAnimation}
       initial="hidden"
       whileInView='visible'
       
      />
   
      <motion.img
       src="/Tree8.png"
       className="christmas_tree"
       style={{ left: "8vw" , zIndex:2, top:"55vh", height:"40vh", position:"absolute", opacity:0}}
       
       initial={{y : "-5vh", opacity: 0}}
       whileInView={{y: "-10vh", opacity: 1}}
       transition={{duration: 1,ease: "anticipate"}}   
       
      />
      <motion.img
       src="/Tree8.png"
       className="christmas_tree"
       style={{ left: "27vw" , zIndex:1, top:"67vh", height:"30vh", position:"absolute", opacity:0}}
       initial={{y : "-4vh", opacity: 0}}
       whileInView={{y: "-10vh", opacity: 1}}
       transition={{duration: 1,ease: "anticipate"}}
      />
      <motion.img
       src="/Tree8.png"
       className="christmas_tree"
       style={{ left: "55vw" , zIndex:1, top:"59vh", height:"30vh", position:"absolute", opacity:0}}
       initial={{y : "-4vh", opacity: 0}}
       whileInView={{y: "-10vh", opacity: 1}}
       transition={{duration: 1,ease: "anticipate"}}
       
      />
      <motion.img
       src="/Tree8.png"
       className="christmas_tree"
       style={{right: "3vw" , zIndex:2, top:"57vh", height:"40vh", position:"absolute", opacity:0}}
       initial={{y : "-4vh", opacity: 0}}
       whileInView={{y: "-10vh", opacity: 1}}
       transition={{duration: 1,ease: "backOut"}}
       
      />
      <motion.img
       src="/Tree8.png"
       className="christmas_tree"
       style={{right: "-6vw" , zIndex:2, top:"50vh", height:"50vh", position:"absolute", opacity:0}}
       initial={{y : "-4vh", opacity: 0}}
       whileInView={{y: "-10vh", opacity: 1}}
       transition={{duration: 1,ease: 'backIn'}}
       
      />
      <motion.img
       src="/Tree8.png"
       className="christmas_tree"
       style={{right: "5vw" , zIndex:1, top:"45vh", height:"50vh", position:"absolute", opacity:0}}
       variants={treeAnimation}
       initial="hidden"
       whileInView='visible'
       
      />
      <motion.img
       src="/Tree7.png"
       className="christmas_tree1"
       style={{ left: "-1vw", zIndex: 1, top: "50vh",height:"40vh", position:"absolute" }}
       variants={treeAnimation}
       initial="hidden"
       whileInView='visible' 
      />
      <motion.img
       src="/Tree7.png"
       className="christmas_tree1"
       style={{ left: "20vw", zIndex: 1, top: "62vh",height:"35vh", position:"absolute" }}
       variants={treeAnimation}
       initial="hidden"
       whileInView='visible' 
      />
      <motion.img
       src="/Tree7.png"
       className="christmas_tree1"
       style={{ left: "35vw", zIndex: 1, top: "55vh",height:"40vh", position:"absolute" }}
       variants={treeAnimation}
       initial="hidden"
       whileInView='visible' 
      />
      <motion.img
       src="/Tree7.png"
       className="christmas_tree1"
       style={{ left: "66vw", zIndex: 1, top: "47vh",height:"40vh", position:"absolute" }}
       variants={treeAnimation}
       initial="hidden"
       whileInView='visible' 
      />
      <motion.img
       src="/Tree7.png"
       className="christmas_tree1"
       style={{ left: "71vw", zIndex: 1, top: "40vh",height:"40vh", position:"absolute" }}
        initial={{y : "-3vh", opacity: 0}}
       whileInView={{y: "-10vh", opacity: 1}}
       transition={{duration: 1,ease: "anticipate"}}
      />
      <motion.img
       src="/Tree7.png"
       className="christmas_tree1"
       style={{ right: "-2vw", zIndex: 1, top: "30vh",height:"40vh", position:"absolute" }}
       variants={treeAnimation}
       initial="hidden"
       whileInView='visible' 
      />
      <motion.img
       src="/Tree7.png"
       className="christmas_tree1"
       style={{ right: "2vw", zIndex: 1, top: "40vh",height:"40vh", position:"absolute" }}
       variants={treeAnimation}
       initial="hidden"
       whileInView='visible' 
      />
      <motion.img
       src="/snowman.png"
       style={{ right: "20vw", zIndex: 2, bottom: "4vh",height:"30vh", position:"absolute" }}
       variants={treeAnimation}
       initial="hidden"
       whileInView='visible' 
      />
    </div>
  )
}

export default Tree