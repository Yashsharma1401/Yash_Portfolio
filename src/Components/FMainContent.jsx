import React from 'react';
import { motion } from 'framer-motion';
import ProfileImg from '../assets/Profile.jpg'; // Ensure this path is correct

// Animation variants for sections
const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Slightly longer, smoother transition
};

// Animation variants for cards/items
const cardFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Slightly longer, smoother transition
};

// Helper function for cleaner progress bar rendering
// Moved outside FMainContent for better reusability and to prevent re-creation on every render
const renderProgressBar = (skillName, percentage) => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-between text-sm font-medium text-gray-200">
      <span>{skillName}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden shadow-inner"> {/* Added shadow-inner */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true, amount: 0.5 }} // Animates when it comes into view
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth animation for fill
        className="h-full bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full"
      ></motion.div>
    </div>
  </div>
);

const FMainContent = () => {
  return (
    <div className="bg-[#121218] min-h-screen font-sans text-white flex flex-col items-center pt-4 md:pt-8">
      <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl px-2 sm:px-4 md:px-12 lg:px-12">
        {/* Hero/About Section */}
        <motion.section
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionFade}
          className="flex flex-col items-center justify-center py-10 sm:py-14 md:py-16 px-2 sm:px-4 md:px-6 bg-gradient-to-br from-[#23233a] to-[#1a1a2e] rounded-2xl md:rounded-3xl shadow-2xl mb-10 md:mb-20 border border-yellow-700/40 relative overflow-hidden"
        >
          {/* Subtle background pattern/overlay */}
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/cubes.png)', backgroundSize: '20px 20px' }}></div>
          <div className="absolute inset-0 z-0 bg-black/10"></div> {/* Dark overlay for readability */}

          <img
            src={ProfileImg}
            alt="Yash Sharma Profile"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-4 border-yellow-400 shadow-xl mb-4 sm:mb-6 object-cover transform transition-transform duration-500 hover:scale-105 z-10"
          />
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 mb-1 sm:mb-2 tracking-tight drop-shadow-lg z-10">Yash Sharma</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-2 sm:mb-3 z-10">Full-Stack Developer</h2>
          <div className="text-base sm:text-lg md:text-xl text-gray-400 mb-2 sm:mb-4 z-10">Pune, Maharashtra, India</div>
          <p className="max-w-xs sm:max-w-lg md:max-w-2xl text-center text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed z-10">
            I'm a passionate <b>React Developer</b> with a focus on building <b>scalable</b>, <b>high-performance</b> web applications.
            I thrive on creating <b>clean code</b> and crafting <b>beautiful, responsive designs</b> that deliver exceptional user experiences.
            Constantly learning and embracing new technologies to stay at the forefront of web development.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="mt-2 sm:mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-yellow-800 to-amber-500 text-[#181824] font-bold rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-75 z-10"
          >
            Get In Touch!
          </motion.a>
        </motion.section>

        {/* What I Do / Skills Section */}
        <motion.section
          id="what-i-do"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="mb-20 max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center relative">
            My Expertise & <span className="text-white">Skills</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-yellow-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {/* Frontend Development Card */}
            <motion.div
              variants={cardFade}
              className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-yellow-700/30
                         transform transition-all duration-500 hover:scale-102 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-500/20
                         flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 to-transparent rounded-3xl z-0"></div>
              <span className="text-6xl mb-4 z-10 transition-transform duration-300 group-hover:scale-110">💻</span>
              <h3 className="font-extrabold text-2xl mb-4 text-yellow-300 z-10">Frontend Development</h3>

              <div className="flex flex-wrap justify-center gap-4 mb-6 z-10">
                <span title="React.js" className="text-sky-400 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-react-original colored"></i></span>
                <span title="JavaScript" className="text-yellow-300 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-javascript-plain colored"></i></span>
                <span title="HTML5" className="text-orange-500 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-html5-plain colored"></i></span>
                <span title="CSS3" className="text-blue-400 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-css3-plain colored"></i></span>
                <span title="Tailwind CSS" className="text-cyan-400 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-tailwindcss-plain colored"></i></span>
              </div>

              <p className="text-gray-300 mb-6 text-base leading-relaxed z-10">
                Crafting <b>responsive</b> and <b>performant</b> user interfaces using modern JavaScript frameworks and libraries.
                Specializing in <b>React.js</b> for dynamic and engaging web applications.
              </p>

              <div className="w-full mt-6 space-y-4 z-10">
                {renderProgressBar('React.js', 90)}
                {renderProgressBar('JavaScript (ES6+)', 85)}
                {renderProgressBar('HTML5', 80)}
                {renderProgressBar('CSS3 / Tailwind CSS', 80)}
              </div>
            </motion.div>

            {/* Backend & APIs Card */}
            <motion.div
              variants={cardFade}
              className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-yellow-700/30
                         transform transition-all duration-500 hover:scale-102 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 {/* Changed shadow color */}
                         flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent rounded-3xl z-0"></div>
              <span className="text-6xl mb-4 z-10 transition-transform duration-300 group-hover:scale-110">🔌</span>
              <h3 className="font-extrabold text-2xl mb-4 text-yellow-300 z-10">Backend & APIs</h3>

              <div className="flex flex-wrap justify-center gap-4 mb-6 z-10">
                <span title="Node.js" className="text-green-500 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-nodejs-plain colored"></i></span>
                <span title="Express.js" className="text-gray-300 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-express-original-wordmark colored"></i></span>
                <span title="MongoDB" className="text-green-400 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-mongodb-plain colored"></i></span>
              </div>

              <p className="text-gray-300 mb-6 text-base leading-relaxed z-10">
                Developing robust <b>server-side logic</b> and <b>RESTful APIs</b> for seamless data communication.
                Experience with <b>MongoDB</b> for flexible and scalable database solutions.
              </p>

              <div className="w-full mt-6 space-y-4 z-10">
                {renderProgressBar('Node.js / Express.js', 80)}
                {renderProgressBar('RESTful APIs', 85)}
                {renderProgressBar('MongoDB', 75)}
              </div>
            </motion.div>

            {/* State Management Card */}
            <motion.div
              variants={cardFade}
              className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-yellow-700/30
                         transform transition-all duration-500 hover:scale-102 hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-500/20 {/* Changed shadow color */}
                         flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent rounded-3xl z-0"></div>
              <span className="text-6xl mb-4 z-10 transition-transform duration-300 group-hover:scale-110">🧠</span>
              <h3 className="font-extrabold text-2xl mb-4 text-yellow-300 z-10">State Management</h3>

              <div className="flex flex-wrap justify-center gap-4 mb-6 z-10">
                <span title="Context API" className="text-cyan-400 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-react-original colored"></i></span>
              </div>

              <p className="text-gray-300 mb-6 text-base leading-relaxed z-10">
                Implementing efficient <b>state management solutions</b> to build scalable and maintainable applications.
                Proficient with <b>Redux</b> for complex global states and <b>Context API</b> for simpler use cases.
              </p>

              <div className="w-full mt-6 space-y-4 z-10">
                {renderProgressBar('Redux', 80)}
                {renderProgressBar('Context API', 75)}
                {renderProgressBar('Zustand', 70)}
              </div>
            </motion.div>

            {/* Tools & Testing Card */}
            <motion.div
              variants={cardFade}
              className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-yellow-700/30
                         transform transition-all duration-500 hover:scale-102 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 {/* Changed shadow color */}
                         flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent rounded-3xl z-0"></div>
              <span className="text-6xl mb-4 z-10 transition-transform duration-300 group-hover:scale-110">🛠️</span>
              <h3 className="font-extrabold text-2xl mb-4 text-yellow-300 z-10">Tools & Methodologies</h3>

              <div className="flex flex-wrap justify-center gap-4 mb-6 z-10">
                <span title="Git" className="text-orange-400 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-git-plain colored"></i></span>
                <span title="Webpack" className="text-blue-400 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-webpack-plain colored"></i></span>
                <span title="VS Code" className="text-blue-500 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-vscode-plain colored"></i></span>
                <span title="Postman" className="text-orange-500 text-4xl hover:scale-110 transition-transform duration-200"><i className="devicon-postman-plain colored"></i></span>
              </div>

              <p className="text-gray-300 mb-6 text-base leading-relaxed z-10">
                Proficient with essential <b>development tools</b> for streamlined workflows and <b>testing methodologies</b>
                to ensure robust and reliable code quality.
              </p>

              <div className="w-full mt-6 space-y-4 z-10">
                {renderProgressBar('Git & Version Control', 85)}
                {renderProgressBar('VS Code', 90)}
                {renderProgressBar('React Testing Library', 70)}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="mb-20"
        >
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center relative">
            My Creative <span className="text-white">Projects</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-yellow-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
            {/* Project Card 1 */}
            <motion.div
              variants={cardFade}
              className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-0 shadow-xl border border-yellow-700/30
                         transform transition-all duration-500 hover:scale-102 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-500/20
                         flex flex-col overflow-hidden group"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                  alt="Blogging Website"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115 group-hover:rotate-1"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-7 w-full flex-1 flex flex-col justify-between">
                <h3 className="font-extrabold text-2xl text-yellow-300 mb-3 leading-tight">Blogging Website</h3>
                <p className="text-gray-300 text-sm mb-5 line-clamp-3">
                  Developed a full-stack blogging platform using the <b>MERN stack</b> with complete CRUD operations.
                  Designed a responsive UI for a smooth user experience and efficient content management,
                  allowing users to create, edit, and publish articles seamlessly.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-yellow-400/25 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-500/40">React</span>
                  <span className="bg-green-400/25 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/40">Node.js</span>
                  <span className="bg-blue-400/25 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold border border-blue-500/40">Express.js</span>
                  <span className="bg-green-500/25 text-green-500 px-3 py-1 rounded-full text-xs font-semibold border border-green-600/40">MongoDB</span>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/yashsharma14jan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full px-6 py-3 bg-gradient-to-r from-yellow-800 to-amber-500 text-[#181824] font-bold rounded-full shadow-lg
                             hover:bg-yellow-400 transition-all duration-300 text-center
                             transform hover:scale-105 hover:shadow-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-75"
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              variants={cardFade}
              className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-0 shadow-xl border border-yellow-700/30
                         transform transition-all duration-500 hover:scale-102 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 {/* Changed shadow color */}
                         flex flex-col overflow-hidden group"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                  alt="FlagFacts"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115 group-hover:rotate-1"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-7 w-full flex-1 flex flex-col justify-between">
                <h3 className="font-extrabold text-2xl text-yellow-300 mb-3 leading-tight">FlagFacts</h3>
                <p className="text-gray-300 text-sm mb-5 line-clamp-3">
                  Built a multi-page responsive website with seamless routing and real-time API data fetching.
                  Implemented features like search, filter, and sort to optimize usability and performance,
                  offering a rich user experience for exploring global country data.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-yellow-400/25 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-500/40">React 19</span>
                  <span className="bg-blue-400/25 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold border border-blue-500/40">React Router DOM</span>
                  <span className="bg-blue-300/25 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold border border-blue-400/40">Axios</span>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/yashsharma14jan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full px-6 py-3 bg-gradient-to-r from-yellow-800 to-amber-500 text-[#181824] font-bold rounded-full shadow-lg
                             hover:bg-yellow-400 transition-all duration-300 text-center
                             transform hover:scale-105 hover:shadow-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-75"
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              variants={cardFade}
              className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-0 shadow-xl border border-yellow-700/30
                         transform transition-all duration-500 hover:scale-102 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 {/* Changed shadow color */}
                         flex flex-col overflow-hidden group"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
                  alt="Zaminwala Real Estate Website"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115 group-hover:rotate-1"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-7 w-full flex-1 flex flex-col justify-between">
                <h3 className="font-extrabold text-2xl text-yellow-300 mb-3 leading-tight">Zaminwala Real Estate Website</h3>
                <p className="text-gray-300 text-sm mb-5 line-clamp-3">
                  Created a dynamic and intuitive real estate website for property listing and Browse.
                  Designed a mobile-friendly UI and integrated features to improve user engagement and management,
                  providing a seamless experience for buyers and sellers alike.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-yellow-400/25 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-500/40">React.js</span>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/yashsharma14jan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full px-6 py-3 bg-gradient-to-r from-yellow-800 to-amber-500 text-[#181824] font-bold rounded-full shadow-lg
                             hover:bg-yellow-400 transition-all duration-300 text-center
                             transform hover:scale-105 hover:shadow-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-75"
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Fun Facts Section */}
        
<motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="mb-20 max-w-6xl mx-auto px-4"
        >
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center relative">
            Fun <span className="text-white">Facts</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-yellow-500 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <motion.div
              variants={cardFade}
              className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-8 shadow-xl flex flex-col items-center border border-yellow-700/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <motion.span
                className="text-5xl font-extrabold text-yellow-300 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                4,780+
              </motion.span>
              <span className="text-gray-300 mt-3 text-lg font-medium">Working Hours</span>
            </motion.div>
            
            <motion.div
              variants={cardFade}
              className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-8 shadow-xl flex flex-col items-center border border-yellow-700/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <motion.span
                className="text-5xl font-extrabold text-yellow-300 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                1,286+
              </motion.span>
              <span className="text-gray-300 mt-3 text-lg font-medium">Cups of Coffee</span>
            </motion.div>
           
            <motion.div
              variants={cardFade}
              className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-8 shadow-xl flex flex-col items-center border border-yellow-700/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <motion.span
                className="text-5xl font-extrabold text-yellow-300 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                24/7
              </motion.span>
              <span className="text-gray-300 mt-3 text-lg font-medium">Support Available</span>
            </motion.div>
            
            <motion.div
              variants={cardFade}
              className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-8 shadow-xl flex flex-col items-center border border-yellow-700/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <motion.span
                className="text-5xl font-extrabold text-yellow-300 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.6 }}
              >
                99%
              </motion.span>
              <span className="text-gray-300 mt-3 text-lg font-medium">Client Satisfaction</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="mb-20 max-w-4xl mx-auto px-4" 
        >
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center relative">
            My <span className="text-white">Certifications</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-yellow-500 rounded-full"></span>
          </h2>
          <ul className="list-none space-y-5 text-gray-300 text-lg"> {/* Removed default list-disc, increased spacing and font size */}
            <motion.li variants={cardFade} className="flex items-start gap-3 bg-[rgba(35,35,58,0.85)] backdrop-blur rounded-xl p-5 shadow-lg border border-gray-700/50">
              <span className="text-yellow-400 text-2xl mt-1">⭐</span>
              <div>
                <span className="font-semibold text-xl text-yellow-300 block">Web Development Training</span>
                <span className="text-gray-400 text-sm">Issued by Internshala Trainings</span>
              </div>
            </motion.li>
            <motion.li variants={cardFade} className="flex items-start gap-3 bg-[rgba(35,35,58,0.85)] backdrop-blur rounded-xl p-5 shadow-lg border border-gray-700/50">
              <span className="text-yellow-400 text-2xl mt-1">⭐</span>
              <div>
                <span className="font-semibold text-xl text-yellow-300 block">UI Full-Stack with ReactJS</span>
                <span className="text-gray-400 text-sm">Issued by Naresh i Technologies, Hyderabad</span>
              </div>
            </motion.li>
          </ul>
        </motion.section>

        {/* Extra-Curricular Activities Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="mb-20 max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center relative">
            Beyond the Code <span className="text-white">Activities</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-yellow-500 rounded-full"></span>
          </h2>
          <ul className="list-none space-y-5 text-gray-300 text-lg"> {/* Removed default list-disc, increased spacing and font size */}
            <motion.li variants={cardFade} className="flex items-start gap-3 bg-[rgba(35,35,58,0.85)] backdrop-blur rounded-xl p-5 shadow-lg border border-gray-700/50">
              <span className="text-yellow-400 text-2xl mt-1">💡</span>
              <div>
                <span className="font-semibold text-xl text-yellow-300 block">Continuous Learning & Community Engagement</span>
                <span className="text-gray-400 text-sm">Continuously engage in self-learning through tech communities and online courses to stay updated with the latest web development trends.</span>
              </div>
            </motion.li>
          </ul>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="mb-20 max-w-xl mx-auto px-4" 
        >
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center relative">
            Let's <span className="text-white">Connect</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-yellow-500 rounded-full"></span>
          </h2>
          <form 
            className="bg-[rgba(35,35,58,0.9)] backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-yellow-700/30 flex flex-col gap-6"
            onSubmit={e => {
              e.preventDefault();
              const name = e.target[0].value;
              const email = e.target[1].value;
              const message = e.target[2].value;
              const phone = '919881216105'; // Your WhatsApp number (country code + number, no +)
              const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
              window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-[#1a1a2e] text-white border border-gray-700 focus:border-yellow-500 outline-none placeholder-gray-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-200" // Polished input fields
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-[#1a1a2e] text-white border border-gray-700 focus:border-yellow-500 outline-none placeholder-gray-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-200"
            />
            <textarea
              placeholder="Your Message"
              rows="5" // Increased rows for more space
              className="p-4 rounded-xl bg-[#1a1a2e] text-white border border-gray-700 focus:border-yellow-500 outline-none placeholder-gray-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-200"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-2 px-8 py-4 bg-yellow-500 text-[#181824] font-bold rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-75 text-lg" // Larger button, consistent styling
            >
              Send Message
            </motion.button>
          </form>
        </motion.section>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t-2 border-gray-700/50 text-center text-gray-400 text-sm"> {/* Stronger border */}
          <div className="mb-3 text-base">© {new Date().getFullYear()} Yash Sharma. All rights reserved.</div> {/* Larger text, increased margin */}
          <div className="flex justify-center gap-6 mb-3 text-lg"> {/* Larger icons, increased gap */}
            <motion.a
              whileHover={{ scale: 1.2, color: '#facc15' }} // Yellow color on hover
              transition={{ duration: 0.2 }}
              href="https://www.linkedin.com/in/yashsharma14jan" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#facc15' }}
              transition={{ duration: 0.2 }}
              href="https://github.com/yashsharma14jan" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400"
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#facc15' }}
              transition={{ duration: 0.2 }}
              href="mailto:yashsharma14jan@gmail.com" className="hover:text-yellow-400"
            >
              <i className="fas fa-envelope"></i>
            </motion.a>
            {/* Added social icons from Font Awesome - ensure you link Font Awesome in your project */}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FMainContent;