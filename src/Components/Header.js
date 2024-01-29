import React, { useRef, useEffect } from 'react';
import MyVideo from '../Videos/video.mp4'; // Path to your video
import Typewriter from 'typewriter-effect';

function Header() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, [videoRef]);

  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${MyVideo})` }}>
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={MyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="mx-auto flex flex-col items-left justify-left text-white px-4 pt-80 ml-12">
        <span className="font-bold sm:text-center text-3xl z-0 lg:text-5xl xl:text-6xl">
          <Typewriter
            options={{
              strings: ['Transform Your Business'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <p className="mb-8 leading-relaxed sm:text-center z-0 text-lg lg:text-3xl xl:text-6xl">
          Phixtz offers expert software development solutions to help your business thrive.
        </p>
      </div>
    </section>
  );
}

export default Header;
