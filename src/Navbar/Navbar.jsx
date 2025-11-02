import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.lg\\:hidden')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-2xl shadow-2xl'
          : 'bg-transparent backdrop-blur-none'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(0px)',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(0px)',
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated gradient border */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-blue-400/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
      <div className="navbar container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Start Section (Logo & Dropdown) */}
        <div className="navbar-start">
          {/* Modern Mobile Hamburger Menu */}
          <div className="lg:hidden relative z-50">
            {/* Overlay */}
            {isMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
            )}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2.5 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 text-white hover:border-cyan-400/50 transition-all z-50 shadow-lg hover:shadow-cyan-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>

            {/* Modern Dropdown Menu */}
            <motion.div
              className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-800/95 backdrop-blur-xl shadow-2xl border border-slate-700/50 overflow-hidden z-50"
              initial={false}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                scale: isMenuOpen ? 1 : 0.9,
                y: isMenuOpen ? 0 : -10,
                rotateX: isMenuOpen ? 0 : -5,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                display: isMenuOpen ? 'block' : 'none',
                pointerEvents: isMenuOpen ? 'auto' : 'none',
                transformStyle: "preserve-3d",
              }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-indigo-500/5 opacity-50" />
              
              <div className="relative p-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      handleScroll(e, item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-4 py-3.5 rounded-xl mb-2 text-sm font-semibold transition-all relative overflow-hidden group ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-cyan-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isMenuOpen ? 1 : 0,
                      x: isMenuOpen ? 0 : -20,
                    }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              handleScroll(e, "home");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer ml-2 sm:ml-0 relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-full opacity-0 blur-xl group-hover:opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                className="relative h-[50px] sm:h-[60px] drop-shadow-2xl transition-all duration-300 group-hover:drop-shadow-cyan-500/50"
                src="https://i.postimg.cc/R0VF51Mt/H-1-removebg-preview.png"
                alt="Logo"
              />
            </div>
          </motion.a>
        </div>

        {/* Center Menu for Desktop */}
        <div className="navbar-center hidden lg:flex">
          <div className="relative px-3 py-2 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
            <ul className="menu menu-horizontal px-1 space-x-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <motion.a
                    href={`#${item.id}`}
                    onClick={(e) => handleScroll(e, item.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0, scale: 0.95 }}
                    className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-xl"
                          layoutId="activeNavBg"
                          initial={false}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                        <motion.span
                          className="relative z-10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.label}
                        </motion.span>
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-xl opacity-0 blur-xl"
                          animate={{
                            opacity: [0, 0.6, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </>
                    )}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;