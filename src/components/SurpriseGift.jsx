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

  return (
    <div className="gift-wrapper" onClick={() => setOpen(true)}>
      
      {/* Sparkles */}
      {open && (
        <motion.img
          src="/glitter.png"
          className="sparkle"
          variants={sparkleAnimation}
          initial="hidden"
          animate="visible"
        />
      )}

      {/* Lid */}
      <motion.img
        src="/gift-lid.png"
        className="gift-lid"
        variants={lidAnimation}
        animate={open ? "open" : "closed"}
      />

      {/* Box */}
      <motion.img
        src="/gift-box.png"
        className="gift-box"
        variants={boxAnimation}
        animate={open ? "open" : "closed"}
      />

      {/* Fortune */}
      {open && (
        <motion.div
          className="fortune"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {fortune}
        </motion.div>
      )}
    </div>
  );
};

export default SurpriseGift;
