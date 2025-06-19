import React from 'react';

const MainContent = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 mb-4 animate-pulse">
            Welcome to Yash's Corner!
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Currently, this experience is best viewed on a desktop.
          </p>
          <p className="text-md md:text-lg text-gray-400 mt-2">
            Please switch to a desktop device for the optimal viewing experience and to explore more.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border border-yellow-700/30">
          <h2 className="text-3xl font-bold text-yellow-300 mb-4">A Little About Me</h2>
          <p className="text-gray-200 leading-relaxed mb-4">
            Hi, I'm Yash, a passionate individual constantly exploring the exciting world of web development and beyond. I thrive on bringing ideas to life through code and creating engaging digital experiences.
          </p>
          <p className="text-gray-200 leading-relaxed">
            While I'm currently showcasing a glimpse of my work, I'm continuously learning and building. Stay tuned for more projects and updates!
          </p>
        </div>
      </div>
    </>
  );
};

export default MainContent;