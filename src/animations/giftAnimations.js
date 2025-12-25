export const boxAnimation = {
  closed: { scale: 1 },
  open: {
    scale: 1.05,
    transition: { duration: 0.4 }
  }
};

export const lidAnimation = {
  closed: {y: -10, rotateX: -60 },
  open: {
    y: "-8vh",
    rotate: -25,
    transition: { duration: 0.6, ease: "anticipate" }
  }
};

export const sparkleAnimation = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1.2,
    transition: { duration: 0.5 }
  }
};
