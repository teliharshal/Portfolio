import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section 
      id="about" 
      // Adjusted padding-top (pt-24) to ensure it doesn't hide behind a fixed navbar
      className="min-h-screen flex items-center justify-center pt-8 pb-12 px-6 sm:px-12 lg:px-24 relative overflow-hidden bg-[var(--bg)]"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--primary)]/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--primary)]/5 blur-[100px] rounded-full -z-10"></div>
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Image Column - Slips in from Left */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[320px] md:max-w-[380px]">
            {/* Creative Frame */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] border border-[var(--border)]">
              <img 
                src={profileImg} 
                alt="Professional Portrait" 
                className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Decorative shapes */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-[6px] border-l-[6px] border-[var(--primary)]/40 rounded-tl-3xl -z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[var(--primary)]/10 rounded-full -z-0 blur-3xl"></div>
            
            {/* Experience Floating Card */}
          
          </div>
        </motion.div>

        {/* Text Column - Slips in from Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }} // Start from right
          whileInView={{ opacity: 1, x: 0 }} // Move to center
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)] text-[var(--primary)] text-[12px] font-bold uppercase tracking-[0.2em] mb-6 border border-[var(--primary)]/20" style={{ fontFamily: "var(--body-font)" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            Who I Am
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text)] mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: "var(--heading-font)" }}>
            Elevating Ideas into{" "}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-violet-500 to-fuchsia-500 italic">
              Digital Reality
            </span>
          </h2>
          
          <div className="space-y-5 max-w-xl">
            <p className="text-base text-[var(--text-light)] leading-relaxed font-medium" style={{ fontFamily: "var(--body-font)" }}>
              I specialize in architecting <span className="text-[var(--text)] font-semibold">sophisticated web solutions</span> that harmonize aesthetic elegance with technical precision. 
            </p>

            <p className="text-sm text-[var(--text-light)] leading-relaxed" style={{ fontFamily: "var(--body-font)" }}>
              Based in the intersection of design and development, I transform complex challenges into seamless user journeys. My approach is rooted in clean architecture, performance optimization, and a relentless pursuit of innovation.
            </p>
          </div>

          {/* Divider accent */}
          <div className="mt-10 w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-transparent rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;