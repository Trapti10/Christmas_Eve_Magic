export const boxAnimation = {
  closed: { scale: 1 },
  open: {
    scale: 1.05,
    transition: { duration: 0.4 }
  }
};

export const lidAnimation = {
  closed: {y: -3, rotateX: -60, rotateY: 1 },
  open: {
    y: "-8vh",
    rotate: -25,
    transition: { duration: 0.4, ease: "anticipate" }
  }
};

export const sparkleAnimation = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1.3,
    transition: { duration: 0.5 }
  }
};
