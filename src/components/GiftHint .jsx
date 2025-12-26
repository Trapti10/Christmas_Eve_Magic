import { motion } from "framer-motion";

const GiftHint = () => {


  return (
    <motion.div
      className="gift-hint"
      initial={{ opacity: 0, y: '-75vh' , x: "42vw", fontSize: 20}}
      animate={{ opacity: 1, y:"-70vh"}}
      transition={{
        duration: 2,
        repeat: 2,
        ease: "easeInOut"
      }}
    >
      ✨ Click here to unwrap your gift ✨
    </motion.div>
  );
};

export default GiftHint;
