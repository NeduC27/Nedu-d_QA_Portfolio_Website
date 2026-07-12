import { motion } from 'framer-motion';
import Nedu from '/src/assets/Images/Nedu.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

function AboutMe() {
  return (
    <section className="about-me py-24 blueprint-grid min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-blue-500/20 rounded-[40px] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute -inset-4 border border-indigo-500/20 rounded-[40px] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              
              <img 
                src={Nedu} 
                alt="Chinedu Hilary" 
                className="relative w-64 h-80 md:w-80 md:h-[450px] object-cover rounded-[32px] shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Stats Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 lg:right-12 glass-card p-6 z-20 shadow-xl"
            >
              <p className="text-3xl font-black text-blue-500">Bug-Free</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Shipped Releases</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div className="lg:w-1/2 space-y-4">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-10">
                Breaking Software <span className="text-blue-500">Before</span> <br /> 
                Users Do.
              </h2>
              <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-8"></div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 text-gray-400 text-lg leading-relaxed"
            >
              <p>
                Hi, I&apos;m <span className="text-white font-bold">Chinedu Hilary</span>. I&apos;m a <span className="text-white font-semibold">QA Software Tester</span> who thinks like a user and probes like an engineer — hunting down the edge cases that slip past everyone else.
              </p>
              <p>
                I test across web, Android, and iOS, combining manual exploratory testing with automated coverage using <span className="text-blue-400">Selenium, Cypress, and Postman</span>. Load and performance checks run through <span className="text-blue-400">JMeter</span>, cross-browser and cross-device validation through <span className="text-blue-400">BrowserStack</span>.
              </p>
              <p>
                My background in <span className="text-white font-semibold">full-stack development</span> means I don&apos;t just report bugs — I understand why they happen, which makes my test cases sharper and my bug reports genuinely useful to the dev team fixing them.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-8"
            >
              <a 
                href="#/contact-me" 
                className="inline-flex items-center gap-3 bg-white text-gray-950 px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
              >
                Let&apos;s Ship Something Solid
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutMe;