import { backInOut, motion } from "framer-motion";
import "../styles/Clouds.css";


const Clouds = () => {
  return (
    <div
     className="cloud-wrapper">
      
<motion.img
        src="/Cloud4.png"
        alt="cloud"
        className="cloud-right-to-left"
        initial={{ y: "40vh"}}
    whileInView={{ y: "35vh" , opacity :1, }}  
  viewport={{ amount: 0.3 }}
        transition={{ duration: 2, ease: "backInOut", }}
      />
    </div>
  );
};

export default Clouds;
