import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const SpiderAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const spider = {
      x: 0,
      y: 0,
      legs: 8,
      bodySize: 18,
      legLength: 50,
      speed: 0.5,
      angle: 0,
    };

    // Set canvas size properly
    canvas.width = 400;
    canvas.height = 400;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    spider.x = centerX;
    spider.y = centerY;

    const drawSpider = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw web
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.4)';
      ctx.lineWidth = 2;
      const webRadius = 180;
      const spokes = 8;
      
      for (let i = 0; i < spokes; i++) {
        const angle = (Math.PI * 2 * i) / spokes;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + Math.cos(angle) * webRadius,
          centerY + Math.sin(angle) * webRadius
        );
        ctx.stroke();
      }
      
      // Draw spiral web
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.25)';
      for (let radius = 25; radius <= webRadius; radius += 18) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw spider body
      ctx.fillStyle = '#9333ea';
      ctx.beginPath();
      ctx.arc(spider.x, spider.y, spider.bodySize, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#a855f7';
      ctx.beginPath();
      ctx.arc(spider.x, spider.y, spider.bodySize * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // Draw spider legs
      ctx.strokeStyle = '#9333ea';
      ctx.lineWidth = 2.5;
      for (let i = 0; i < spider.legs; i++) {
        const legAngle = (Math.PI * 2 * i) / spider.legs + spider.angle;
        const endX = spider.x + Math.cos(legAngle) * spider.legLength;
        const endY = spider.y + Math.sin(legAngle) * spider.legLength;
        
        ctx.beginPath();
        ctx.moveTo(spider.x, spider.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    };

    const animate = () => {
      spider.angle += 0.02;
      
      // Make spider move in a circle
      const radius = 30;
      spider.x = centerX + Math.cos(spider.angle * 2) * radius;
      spider.y = centerY + Math.sin(spider.angle * 2) * radius;
      
      drawSpider();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-60"
        style={{ mixBlendMode: 'screen' }}
      />
    </motion.div>
  );
};

export default SpiderAnimation;

