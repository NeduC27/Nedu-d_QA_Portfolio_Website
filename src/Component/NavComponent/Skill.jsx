import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaGitAlt,
  FaBug,
  FaSearch,
  FaSyncAlt,
  FaUsers,
  FaClipboardList,
  FaFileAlt,
  FaTasks,
  FaProjectDiagram,
  FaLaptopCode,
} from 'react-icons/fa';
import { SiPostman, SiSelenium, SiCypress } from 'react-icons/si';

const skillCategories = [
  {
    title: "QA Testing Tools",
    skills: [
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      { name: "Selenium", icon: <SiSelenium />, color: "text-green-500" },
      { name: "Cypress", icon: <SiCypress />, color: "text-teal-300" },
      { name: "BrowserStack", icon: <FaLaptopCode />, color: "text-orange-400" },
    ]
  },
  {
    title: "Testing Methodologies",
    skills: [
      { name: "Manual & Functional Testing", icon: <FaSearch />, color: "text-yellow-400" },
      { name: "Regression Testing", icon: <FaSyncAlt />, color: "text-blue-400" },
      { name: "UAT Coordination", icon: <FaUsers />, color: "text-emerald-400" },
      { name: "Test Case Design", icon: <FaClipboardList />, color: "text-purple-400" },
    ]
  },
  {
    title: "Process & Documentation",
    skills: [
      { name: "Defect Tracking (Jira, Trello)", icon: <FaBug />, color: "text-red-400" },
      { name: "QA Documentation", icon: <FaFileAlt />, color: "text-gray-300" },
      { name: "Requirements Analysis", icon: <FaTasks />, color: "text-cyan-400" },
      { name: "SDLC/STLC & Agile", icon: <FaProjectDiagram />, color: "text-indigo-400" },
    ]
  },
  {
    title: "Technical Foundation",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
      { name: "Node.js / Express", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Laravel / PHP", icon: <FaLaravel />, color: "text-red-500" },
      { name: "Git & GitHub", icon: <FaGitAlt />, color: "text-orange-600" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

function Skill() {
  return (
    <section className="skills py-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            QA <span className="text-blue-500">Arsenal</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            The tools, methodologies, and technical fluency I bring to every
            test cycle — from manual exploration to automated coverage.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-8 border-t-4 border-t-blue-600"
            >
              <h3 className="text-xl font-black mb-8 text-white uppercase tracking-widest text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]`}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-bold text-gray-200 uppercase tracking-wider text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {["Root-Cause Analysis", "Cross-Browser & Responsive Testing", "Client-Facing UAT", "Process-Driven QA", "Technical Project Management"].map((soft, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-bold text-gray-200 uppercase tracking-widest">{soft}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;