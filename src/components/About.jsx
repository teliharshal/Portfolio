import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 px-6 relative overflow-hidden bg-[var(--bg)]">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-500/5 blur-[100px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        
        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Creative Frame */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-[1.01] border border-[var(--border)]">
            <img 
              src={profileImg} 
              alt="Professional Portrait" 
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          {/* Decorative shapes behind image */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-indigo-500/30 rounded-tl-3xl -z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-indigo-600/5 rounded-3xl -z-0 blur-2xl"></div>
          
          {/* Experience Floating Card */}
          <motion.div 
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -left-8 bg-[var(--surface)] p-8 rounded-2xl shadow-2xl border border-[var(--border)] z-20 hidden md:block backdrop-blur-sm bg-white/90"
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl font-black text-indigo-600 leading-none">5+</div>
              <div className="text-xs font-bold text-[var(--text-light)] uppercase tracking-[0.2em] leading-tight">
                Years Of<br/>Excellence
              </div>
            </div>
          </motion.div>

          {/* Technology Dots */}
          <div className="absolute top-12 -right-4 flex flex-col gap-3 z-20">
             {[1, 2, 3].map((i) => (
               <div key={i} className="w-3 h-3 rounded-full bg-indigo-500/20 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}></div>
             ))}
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-100">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            Who I Am
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 leading-[1.1] tracking-tight">
            Elevating Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 italic">Digital Reality</span>
          </h2>
          
          <p className="text-lg text-[var(--text-light)] leading-relaxed mb-6 font-medium">
            I specialize in architecting sophisticated web solutions that harmonize aesthetic elegance with technical precision. 
          </p>

          <div className="space-y-4 mb-8">
            <p className="text-base text-[var(--text-light)] leading-relaxed">
              Based in the intersection of design and development, I transform complex challenges into seamless user journeys. My approach is rooted in clean architecture, performance optimization, and a relentless pursuit of innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 border-t border-b border-[var(--border)] py-6">
            <div>
              <h4 className="text-2xl font-black text-[var(--text)] mb-1">50+</h4>
              <p className="text-[var(--text-light)] text-[10px] font-bold uppercase tracking-widest">Projects</p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-[var(--text)] mb-1">30+</h4>
              <p className="text-[var(--text-light)] text-[10px] font-bold uppercase tracking-widest">Global Clients</p>
            </div>
            <div className="hidden sm:block">
              <h4 className="text-2xl font-black text-[var(--text)] mb-1">99%</h4>
              <p className="text-[var(--text-light)] text-[10px] font-bold uppercase tracking-widest">Satisfaction</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <button className="group relative px-10 py-5 rounded-2xl bg-black text-white font-bold overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
               <span className="relative z-10">Download CV</span>
               <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button className="px-10 py-5 rounded-2xl border-2 border-[var(--border)] text-[var(--text)] font-bold hover:bg-[var(--surface)] hover:border-indigo-600 transition-all">
              Contact Me
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
