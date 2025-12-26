import { useEffect, useRef } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    
    audio.muted = true;
    audio.play().catch(() => {
      console.log("Autoplay blocked");
    });

    const enableSound = () => {
      audio.muted = false;
      audio.volume = 0.8;
      audio.play();
      window.removeEventListener("click", enableSound);
      window.removeEventListener("scroll", enableSound);
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("scroll", enableSound);
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/ChristmasTune.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default MusicPlayer;
