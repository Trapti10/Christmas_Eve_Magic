import { motion } from "framer-motion";
import "./Clouds.css"
const Clouds = () => {
  return (
    <div
     className="cloud-wrapper">
      {/* Left to Right */}
      <motion.img
        src="/Cloud1.png"
        alt="cloud"
        className="cloud-right-to-left"
        initial={{ x: 0}}
        animate={{ x: "-60vw"}}
        transition={{ duration: 1, ease: "easeOut" }}
      />

     
      <motion.img
        src="/Cloud2.png"
        alt="cloud"
        className="cloud-bottom-to-top"
        initial={{ y: 0, opacity:0}}
        animate={{ y: "-60vh", opacity: 1}}
        transition={{ duration: 1, ease: "easeOut"}}
      />
      <motion.img
       src="/Christmas Tree.png"
       className="christmas_tree"
       initial={{y:"5vh", opacity:0}}
       animate={{y:"-10vh", opacity:1}}
       transition={{duration:1, ease:"easeOut"}}
       
      />
    </div>
  );
};

export default Clouds;
