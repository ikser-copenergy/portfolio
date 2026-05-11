"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Zap } from "lucide-react";

export const ImpactSection = () => {
  const stats = [
    {
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
      label: "Reducción de Tiempo",
      value: "90%",
      description: "De 10 días a solo 24 horas mensuales.",
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      label: "Eficiencia Operativa",
      value: "10x",
      description: "Aceleración de procesos críticos de negocio.",
    },
  ];

  return (
    <section className="py-24 bg-black flex flex-col items-center justify-center px-4">
      {/* Título con degradado sutil */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
          Impacto en la <span className="text-emerald-500">Productividad</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          No solo escribo código; diseño sistemas que redefinen la eficiencia operativa de tu empresa.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
          >
            {/* Efecto de luz de fondo (Glow) */}
            <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                {stat.icon}
              </div>
              <h3 className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-1">
                {stat.label}
              </h3>
              <div className="text-5xl font-bold text-white mb-3">
                {stat.value}
              </div>
              <p className="text-gray-500 leading-relaxed">
                {stat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Frase de cierre minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 flex items-center gap-2 text-xs text-gray-600 uppercase tracking-[0.3em]"
      >
        <TrendingUp className="w-4 h-4" />
        <span>Optimización garantizada</span>
      </motion.div>
    </section>
  );
};
