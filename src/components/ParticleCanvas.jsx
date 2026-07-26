import { useEffect, useRef } from "react";

export function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let pointer = { x: width / 2, y: height / 2 };

    // Initialize interactive floating particles
    const particles = Array.from({ length: 92 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 0.4,
      hue: Math.random() > 0.5 ? 195 : 270, // Cyan & Neon Violet tints
    }));

    // Responsive Canvas Resize
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Track Cursor/Touch position
    const move = (event) => {
      pointer = { x: event.clientX, y: event.clientY };
    };

    // Render Frame Loop
    const draw = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Interactive mouse push effect
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distance = Math.hypot(dx, dy);
        
        if (distance < 150) {
          particle.x -= dx * 0.002;
          particle.y -= dy * 0.002;
        }

        // Screen Boundary Bounce
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        // Draw Particle Circle with Glow Effect
        context.beginPath();
        context.fillStyle = `hsla(${particle.hue}, 100%, 70%, 0.72)`;
        context.shadowColor = `hsla(${particle.hue}, 100%, 65%, 0.9)`;
        context.shadowBlur = 14;
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0; // Reset blur for performance

        // Draw Constellation Lines Between Nearby Particles
        for (let j = index + 1; j < particles.length; j += 1) {
          const other = particles[j];
          const linkDistance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (linkDistance < 112) {
            context.strokeStyle = `rgba(96, 165, 250, ${0.12 - linkDistance / 1200})`;
            context.lineWidth = 0.7;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      aria-hidden="true" 
      className="pointer-events-none fixed inset-0 z-0 opacity-70" 
    />
  );
}