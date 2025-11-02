import { motion } from "framer-motion";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/95 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] bg-blue-600 rounded-full filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: '-300px',
            left: '-300px',
          }}
        />
        <motion.div
          className="absolute w-[700px] h-[700px] bg-cyan-500 rounded-full filter blur-3xl opacity-25"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            bottom: '-200px',
            right: '-200px',
          }}
        />
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Spinning loader */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <motion.div
            className="absolute inset-0 border-4 border-cyan-400/30 rounded-full"
          />
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-cyan-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-r-blue-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Center glow */}
          <motion.div
            className="absolute inset-4 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full blur-xl opacity-50"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading text */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Preparing Your Resume
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            >
              .
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="mt-8 w-64 md:w-80 h-1 bg-slate-700/50 rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;

