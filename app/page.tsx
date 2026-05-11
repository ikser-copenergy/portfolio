"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { 
  Cpu, 
  Truck, 
  Zap, 
  MessageSquare, 
  CloudRain,
  Store,
  Mail, 
  Code2, 
  Clock,
  Terminal,
  Database,
  Cloud,
  Layout,
  ChevronRight
} from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const base =
    "rounded-full px-2.5 py-1 transition-colors duration-200 min-w-[2.25rem] text-center";

  return (
    <div
      role="group"
      aria-label={t("nav.langAria")}
      className="flex items-center rounded-full border border-white/10 p-0.5 text-[11px] font-medium tracking-wide"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`${base} ${
          locale === "en"
            ? "bg-white/[0.14] text-white"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("es")}
        className={`${base} ${
          locale === "es"
            ? "bg-white/[0.14] text-white"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        ES
      </button>
    </div>
  );
}

function VectorRibbonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      if (!reduceMotion) {
        time += 0.003;
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = "screen";
      
      const scrollP = scrollYProgress.get();
      const waves = 12; // Cantidad de líneas vectoriales
      
      for (let i = 0; i < waves; i++) {
        ctx.beginPath();
        const progress = i / waves;
        
        // Colores: cambian de Esmeralda/Cyan a Azul/Púrpura según el scroll
        const baseHue = 160 + scrollP * 120; 
        const hue = (baseHue + progress * 80) % 360;
        
        // Líneas muy tenues y finas (estilo Apple)
        ctx.strokeStyle = `hsla(${hue}, 80%, 60%, 0.15)`;
        ctx.lineWidth = 1;
        
        for (let x = 0; x < window.innerWidth; x += 4) {
          const nx = x / window.innerWidth; 
          
          // Envolvente para que las líneas nazcan y mueran suavemente en los bordes
          const envelope = Math.sin(nx * Math.PI);
          
          // Frecuencias y amplitudes que se expanden al hacer scroll
          const freq1 = 1.5 + scrollP * 2;
          const amp1 = (150 + scrollP * 200) * envelope;
          
          const freq2 = 3.5 - scrollP * 1.5;
          const amp2 = (80 + scrollP * 100) * envelope;
          
          const phase1 = time + i * 0.1;
          const phase2 = -time * 0.8 + i * 0.05;
          
          const yOffset = 
            Math.sin(nx * Math.PI * freq1 + phase1) * amp1 +
            Math.sin(nx * Math.PI * freq2 + phase2) * amp2;
          
          const centerY = window.innerHeight * 0.5;
          // Separación vertical de las líneas que aumenta con el scroll
          const spread = (i - waves / 2) * (10 + scrollP * 40);
          
          const y = centerY + yOffset + spread;
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollYProgress, reduceMotion]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]" aria-hidden>
      {/* Rejilla técnica muy sutil de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] mix-blend-overlay" />
      
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Viñeta para oscurecer los bordes y enfocar el centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80" />
    </div>
  );
}

export default function Home() {
  const { t } = useLocale();

  // Variantes de animación para la cuadrícula (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden">
      <VectorRibbonBackground />

      {/* HEADER */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full border-b border-white/5 bg-[#050505]/55 backdrop-blur-xl z-50"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <div className="text-sm font-medium tracking-wider flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            ikser.dev
          </div>
          <div className="flex items-center gap-6 md:gap-8 shrink-0">
            <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
              <a href="#portfolio" className="hover:text-white transition-colors duration-300">
                {t("nav.projects")}
              </a>
              <a href="#stack" className="hover:text-white transition-colors duration-300">
                {t("nav.stack")}
              </a>
              <a href="#contact" className="hover:text-white transition-colors duration-300">
                {t("nav.contact")}
              </a>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 relative z-10 isolate">
        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="py-24 md:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6">
              Ikser Marquez <span className="text-emerald-500/50">|</span> <br className="hidden md:block" />
              <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                {t("hero.role")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed font-light">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </motion.section>

        {/* PORTFOLIO / FEATURED SOLUTIONS */}
        <section id="portfolio" className="py-20 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-emerald-500 mb-2 flex items-center gap-2">
              <Terminal className="w-3 h-3" /> {t("portfolio.kicker")}
            </h2>
            <h3 className="text-2xl font-medium">{t("portfolio.title")}</h3>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* Human Resources Engine */}
            <motion.div variants={itemVariants} className="col-span-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="h-full border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm p-8 rounded-xl hover:border-emerald-500/30 transition-colors duration-500 flex flex-col justify-between relative z-10">
                <div>
                  <div className="mb-6 inline-flex p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                    <Cpu className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-medium mb-3 flex items-center gap-2">
                    {t("project.hre.title")}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-emerald-500" />
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {t("project.hre.body")}
                  </p>
                </div>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  {t("project.hre.tag")}
                </div>
              </div>
            </motion.div>

            {/* Enterprise POS */}
            <motion.div variants={itemVariants} className="col-span-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="h-full border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm p-8 rounded-xl hover:border-orange-500/30 transition-colors duration-500 flex flex-col justify-between relative z-10">
                <div>
                  <div className="mb-6 inline-flex p-3 rounded-lg border border-orange-500/20 bg-orange-500/5 text-orange-400 group-hover:scale-110 transition-transform duration-500">
                    <Store className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-medium mb-3 flex items-center gap-2">
                    {t("project.pos.title")}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-orange-500" />
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {t("project.pos.body")}
                  </p>
                </div>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  {t("project.pos.tag")}
                </div>
              </div>
            </motion.div>

            {/* Fleet Management System */}
            <motion.div variants={itemVariants} className="col-span-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="h-full border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm p-8 rounded-xl hover:border-blue-500/30 transition-colors duration-500 flex flex-col justify-between relative z-10">
                <div>
                  <div className="mb-6 inline-flex p-3 rounded-lg border border-blue-500/20 bg-blue-500/5 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                    <Truck className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-medium mb-3 flex items-center gap-2">
                    {t("project.fleet.title")}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {t("project.fleet.body")}
                  </p>
                </div>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  {t("project.fleet.tag")}
                </div>
              </div>
            </motion.div>

            {/* Industrial IoT & Energy */}
            <motion.div variants={itemVariants} className="col-span-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="h-full border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm p-8 rounded-xl hover:border-yellow-500/30 transition-colors duration-500 flex flex-col justify-between relative z-10">
                <div>
                  <div className="mb-6 inline-flex p-3 rounded-lg border border-yellow-500/20 bg-yellow-500/5 text-yellow-400 group-hover:scale-110 transition-transform duration-500">
                    <Zap className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-medium mb-3">{t("project.iot.title")}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {t("project.iot.body")}
                  </p>
                </div>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  {t("project.iot.tag")}
                </div>
              </div>
            </motion.div>

            {/* AI Inventory Agent */}
            <motion.div variants={itemVariants} className="col-span-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="h-full border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm p-8 rounded-xl hover:border-purple-500/30 transition-colors duration-500 flex flex-col justify-between relative z-10">
                <div>
                  <div className="mb-6 inline-flex p-3 rounded-lg border border-purple-500/20 bg-purple-500/5 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                    <MessageSquare className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-medium mb-3">{t("project.ai.title")}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {t("project.ai.body")}
                  </p>
                </div>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  {t("project.ai.tag")}
                </div>
              </div>
            </motion.div>

            {/* Meteorological Automation */}
            <motion.div variants={itemVariants} className="col-span-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="h-full border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm p-8 rounded-xl hover:border-cyan-500/30 transition-colors duration-500 flex flex-col justify-between relative z-10">
                <div>
                  <div className="mb-6 inline-flex p-3 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                    <CloudRain className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-medium mb-3">{t("project.meteo.title")}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {t("project.meteo.body")}
                  </p>
                </div>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  {t("project.meteo.tag")}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* EXPERTISE / STACK */}
        <section id="stack" className="py-20 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-emerald-500 mb-2 flex items-center gap-2">
              <Code2 className="w-3 h-3" /> {t("stack.kicker")}
            </h2>
            <h3 className="text-2xl font-medium">{t("stack.title")}</h3>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Frontend */}
            <motion.div variants={itemVariants} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-white/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6 text-zinc-300">
                <Layout className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
                <h4 className="text-sm font-medium uppercase tracking-wider">{t("stack.frontend")}</h4>
              </div>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> React / Next.js</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> Angular</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> Tailwind CSS</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> TypeScript</li>
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div variants={itemVariants} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-white/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6 text-zinc-300">
                <Terminal className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                <h4 className="text-sm font-medium uppercase tracking-wider">{t("stack.backend")}</h4>
              </div>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> Node.js</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> .NET (C#)</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> REST / GraphQL</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> {t("stack.microservices")}</li>
              </ul>
            </motion.div>

            {/* Databases */}
            <motion.div variants={itemVariants} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-white/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6 text-zinc-300">
                <Database className="w-5 h-5 text-yellow-400" strokeWidth={1.5} />
                <h4 className="text-sm font-medium uppercase tracking-wider">{t("stack.databases")}</h4>
              </div>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> PostgreSQL</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> SQL Server</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> Redis</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> MongoDB</li>
              </ul>
            </motion.div>

            {/* Cloud */}
            <motion.div variants={itemVariants} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-white/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6 text-zinc-300">
                <Cloud className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
                <h4 className="text-sm font-medium uppercase tracking-wider">{t("stack.cloud")}</h4>
              </div>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> AWS</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> Vercel</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> Docker</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-700 rounded-full"/> {t("stack.cicd")}</li>
              </ul>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="border-t border-white/5 bg-[#050505]/80 backdrop-blur-[2px] py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-medium mb-2">{t("footer.cta")}</h2>
            <p className="text-zinc-500 text-sm flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-500/70" strokeWidth={1.5} />
              {t("footer.timezone")}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <a 
              href="mailto:contact@ikser.dev" 
              className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <div className="p-2 rounded-md bg-white/5 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
              </div>
              contact@ikser.dev
            </a>
            <a 
              href="https://github.com/ikser-copenergy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <div className="p-2 rounded-md bg-white/5 group-hover:bg-white/20 transition-colors">
                <Code2 className="w-4 h-4" strokeWidth={1.5} />
              </div>
              ikser-copenergy
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
