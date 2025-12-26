import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  boxAnimation,
  lidAnimation,
  sparkleAnimation
} from "../animations/giftAnimations";
import "../styles/Gift.css";

const SurpriseGift = ({ fortune }) => {
  const [open, setOpen] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);


  return (
    
    <div className="gift-wrapper"
   onClick={() => {
  if (open) return;   

  setOpen(true);
  setShowSparkle(true);

  setTimeout(() => {
    setShowSparkle(false);
  }, 1500);
}}

>
    
      {showSparkle  && (
        <motion.img
         src="/glitter.png"
    className="sparkle"
    variants={sparkleAnimation}
    initial="hidden"
    animate="visible"
        />
      )}

      <motion.img
        src="/gift-lid1.png"
        className="gift-lid"
        variants={lidAnimation}
        animate={open ? "open" : "closed"}
      />


      <motion.img
        src="/gift-box.png"
        className="gift-box"
        variants={boxAnimation}
        animate={open ? "open" : "closed"}
      />

      {open && (
        <motion.div
          className="fortune"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.5}}
        >
          {fortune}
        </motion.div>
      )}
    </div>
  );
};

export default SurpriseGift;
