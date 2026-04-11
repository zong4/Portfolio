import { useEffect, useRef } from "react";

export function MouseParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // 粒子颜色主题（蓝紫渐变系）
    const colorPalette = [
      { r: 139, g: 92, b: 246 },   // 紫
      { r: 99, g: 102, b: 241 },   // 靛蓝
      { r: 59, g: 130, b: 246 },   // 蓝
      { r: 168, g: 85, b: 247 },   // 亮紫
      { r: 14, g: 165, b: 233 },   // 天蓝
    ];

    const particleCount = 200;
    // 速度：像素/秒（与帧率无关）
    const speedPxPerSec = 50;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      alphaBase: number;
      alphaSpeed: number;
      color: { r: number; g: number; b: number };
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      const alphaBase = Math.random() * 0.35 + 0.15;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speedPxPerSec,
        vy: Math.sin(angle) * speedPxPerSec,
        size: Math.random() * 1.8 + 0.4,
        alpha: alphaBase,
        alphaBase,
        alphaSpeed: Math.random() * 0.8 + 0.3, // 脉冲频率（Hz）
        color,
      });
    }

    let animationId: number;
    let lastTime: number | null = null;
    let elapsed = 0;

    const animate = (timestamp: number) => {
      // delta time（秒），修复帧率抖动导致速度变化的 bug
      if (lastTime === null) lastTime = timestamp;
      const dt = Math.min((timestamp - lastTime) / 1000, 0.05); // 限制最大 dt 防止跳帧
      lastTime = timestamp;
      elapsed += dt;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // 用 delta time 推进位置（速度与帧率完全解耦）
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // 边界反弹
        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -1;
          p.x = Math.max(0, Math.min(canvas.width, p.x));
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1;
          p.y = Math.max(0, Math.min(canvas.height, p.y));
        }

        // 脉冲呼吸效果
        p.alpha = p.alphaBase + Math.sin(elapsed * p.alphaSpeed * Math.PI * 2) * 0.12;

        // 绘制粒子（带光晕）
        const { r, g, b } = p.color;
        const glowRadius = p.size * 2.5;
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        glow.addColorStop(0, `rgba(${r},${g},${b},${p.alpha})`);
        glow.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // 实心核心
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(p.alpha * 1.5, 1)})`;
        ctx.fill();
      });

      // 连线（颜色混合自两端粒子）
      const connectionDistance = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 0.18 * (1 - dist / connectionDistance);
            const ci = particles[i].color;
            const cj = particles[j].color;
            // 混合两端颜色
            const r = Math.round((ci.r + cj.r) / 2);
            const g = Math.round((ci.g + cj.g) / 2);
            const b = Math.round((ci.b + cj.b) / 2);

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
}