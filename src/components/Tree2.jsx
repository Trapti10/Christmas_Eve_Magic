import React from 'react'
import { motion } from "framer-motion";
const Tree2 = () => {
      return (
            <div>
                  <motion.img
                        src="/Tree5.png"
                        className="christmas_tree"
                        style={{ right: "3vw", zIndex: 2, top: "57vh", height: "40vh", position: "absolute", opacity: 0 }}
                        initial={{ y: "-4vh", opacity: 0 }}
                        whileInView={{ y: "-10vh", opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}

                  />
                  <motion.img
                        src="/Tree8.png"
                        className="christmas_tree"
                        style={{ right: "6vw", zIndex: 1, top: "50vh", height: "40vh", position: "absolute", opacity: 0 }}
                        initial={{ y: "-4vh", opacity: 0 }}
                        whileInView={{ y: "-10vh", opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}

                  />
                  <motion.img
                        src="/Tree8.png"
                        className="christmas_tree"
                        style={{ left: "25vw", zIndex: 1, bottom: "-5vh", height: "40vh", position: "absolute", opacity: 0 }}
                        initial={{ y: "-4vh", opacity: 0 }}
                        whileInView={{ y: "-10vh", opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}

                  />
                  <motion.img
                        src="/Tree8.png"
                        className="christmas_tree"
                        style={{ left: "45vw", zIndex: 1, bottom: "-5vh", height: "40vh", position: "absolute", opacity: 0 }}
                        initial={{ y: "-4vh", opacity: 0 }}
                        whileInView={{ y: "-10vh", opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}

                  />
                  <motion.img
                        src="/Tree7.png"
                        className="christmas_tree"
                        style={{ left: "54vw", zIndex: 1, bottom: "4vh", height: "30vh", position: "absolute", opacity: 0 }}
                        initial={{ y: "-4vh", opacity: 0 }}
                        whileInView={{ y: "-10vh", opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}

                  />
                  <motion.img
                        src="/Tree7.png"
                        className="christmas_tree"
                        style={{ right: "3vw", zIndex: 1, top: "40vh", height: "40vh", position: "absolute", opacity: 0 }}
                        initial={{ y: "-4vh", opacity: 0 }}
                        whileInView={{ y: "-10vh", opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}

                  />
                  <motion.img
                        src="/Tree7.png"
                        className="christmas_tree"
                        style={{ right: "30vw", zIndex: 1, top: "54vh", height: "35vh", position: "absolute", opacity: 0 }}
                        initial={{ y: "-4vh", opacity: 0 }}
                        whileInView={{ y: "-10vh", opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}

                  />
                  <motion.img
                        src="/Tree7.png"
                        className="christmas_tree"
                        style={{ left: "3vw", zIndex: 1, top: "45vh", height: "40vh", position: "absolute", opacity: 0 }}
                        initial={{ y: "-4vh", opacity: 0 }}
                        whileInView={{ y: "-10vh", opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}
                  />
                  <motion.img
                        src="/Tree7.png"
                        className="christmas_tree"
                        style={{ left: "22vw", zIndex: 1, bottom: "-2vh", height: "40vh", position: "absolute", opacity: 0 }}
                        initial={{ y: "-4vh", opacity: 0 }}
                        whileInView={{ y: "-10vh", opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}
                  />
                  <motion.img
                        src="/Gift_Tree.png"
                        className="christmas_tree"
                        style={{ left: "8vw", zIndex: 2, top: "55vh", height: "40vh", position: "absolute", opacity: 0 }}
                        initial={{ y: "-4vh", opacity: 0 }}
                        whileInView={{ y: "-10vh", opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}
                  />
                  <motion.img
                        src="Santa.png"
                        style={{ right: "18vw", zIndex: 2, top: "56vh", height: "30vh", position: "absolute" }}
                        alt=""
                        initial={{ y: "-3vh", opacity: 0 }}
                        whileInView={{ y: "-5vh", opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}
                  />

            </div>
      )
}

export default Tree2
