import { motion } from "framer-motion";
import { useEffect } from "react";

const WelcomeScreen = ({ onComplete }) => {
  useEffect(() => {
    // Prevent scrolling while welcome screen is active
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      onComplete();
      document.body.style.overflow = "";
    }, 2200); // Faster, snappier loading time

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg)]"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Simple fading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <span 
            className="text-2xl sm:text-3xl font-semibold tracking-widest text-[var(--text)] uppercase"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            Harshal Teli
          </span>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="h-2 w-2 rounded-full bg-[var(--primary)]"
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-light)]"
        >
          Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
