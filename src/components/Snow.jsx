import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Snow = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true
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
            value: 1
          },
          move: {
            enable: true,
            direction: "bottom",
            speed: 5,
            straight: false,
            outModes: {
              default: "out"
            }
          }

        }
      }}
    />
  );
};

export default Snow;
