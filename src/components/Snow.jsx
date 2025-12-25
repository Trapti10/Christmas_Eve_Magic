import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../styles/Clouds.css";
import { motion } from "framer-motion";


const Snow = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div>
      <motion.img
  src="/moon.png"
  alt="moon"
  style={{
    position: "absolute",
    top: "10vh",
    left: "10vw",
    width: "150px",
    zIndex: 1,
    filter: "drop-shadow(0 0 40px rgba(205,205,200,0.9))"
  }}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 0.8, scale: 1 }}
  transition={{ duration: 1.5 }}
/>
  
      <Particles
        id="tsparticles"
        
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
  zIndex: 3
          },
          particles: {
            number: {
              value: 200
            },
            size: { value: 4 },
            shape: {
              type: "image",
              image: [
                {
                  src: "/Snow.png",

                },
                {
                  src: "/Snowflake.png",
                },
                {
                  src: "/circle snow.png"
                },
                {
                  src: "/Silver_Snowflake.png"
                }
              ]
            },
            opacity: {
              value: 0.5
            },
            move: {
              enable: true,
              direction: "bottom",
              speed: 3,
              straight: false,
              outModes: {
                default: "out"
              }
            }

          }
        }}
      />
    </div>
  );
};

export default Snow;
