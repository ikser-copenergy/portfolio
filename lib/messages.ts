export type Locale = "en" | "es";

export type MessageKey =
  | "meta.description"
  | "nav.projects"
  | "nav.stack"
  | "nav.contact"
  | "nav.langAria"
  | "hero.role"
  | "hero.subtitle"
  | "portfolio.kicker"
  | "portfolio.title"
  | "project.hre.title"
  | "project.hre.body"
  | "project.hre.tag"
  | "project.fleet.title"
  | "project.fleet.body"
  | "project.fleet.tag"
  | "project.iot.title"
  | "project.iot.body"
  | "project.iot.tag"
  | "project.ai.title"
  | "project.ai.body"
  | "project.ai.tag"
  | "project.meteo.title"
  | "project.meteo.body"
  | "project.meteo.tag"
  | "project.pos.title"
  | "project.pos.body"
  | "project.pos.tag"
  | "stack.kicker"
  | "stack.title"
  | "stack.frontend"
  | "stack.backend"
  | "stack.databases"
  | "stack.cloud"
  | "stack.microservices"
  | "stack.cicd"
  | "footer.cta"
  | "footer.timezone";

export const messages: Record<Locale, Record<MessageKey, string>> = {
  en: {
    "meta.description":
      "High-performance software architectures for industrial automation and enterprise ecosystems.",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "nav.langAria": "Language",
    "hero.role": "Senior Full Stack Engineer",
    "hero.subtitle":
      "High-performance software architectures for industrial automation and enterprise ecosystems.",
    "portfolio.kicker": "The Work",
    "portfolio.title": "Featured Solutions",
    "project.hre.title": "Human Resources Engine",
    "project.hre.body":
      "Reduced processing time from 10 days to 24 hours monthly (90% optimization) for 150+ employees.",
    "project.hre.tag": "Operational Efficiency",
    "project.fleet.title": "Fleet Management",
    "project.fleet.body":
      "Real-time telemetry, fuel consumption analytics, and maintenance API integration.",
    "project.fleet.tag": "Logistics & Telemetry",
    "project.iot.title": "Industrial IoT & Energy",
    "project.iot.body":
      "Real-time sensor monitoring and electrical equipment automation for the power production industry.",
    "project.iot.tag": "Hardware Integration",
    "project.ai.title": "AI Inventory Agent",
    "project.ai.body":
      "RAG-based WhatsApp chatbot for natural language inventory queries.",
    "project.ai.tag": "Applied AI",
    "project.meteo.title": "Meteorological Automation",
    "project.meteo.body":
      "Automated reporting systems for power grid stability based on weather station data.",
    "project.meteo.tag": "Data Processing",
    "project.pos.title": "Enterprise POS Suite",
    "project.pos.body":
      "Multitenant point-of-sale: isolated organizations, multi-branch hierarchy per tenant, concurrent multi-user access with granular roles (RBAC), and reporting for sales velocity, SKU mix, cashier performance, and branch-level KPIs—export-ready for accounting and audits.",
    "project.pos.tag": "Retail · Omnichannel commerce",
    "stack.kicker": "Expertise",
    "stack.title": "Technical Rigor",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.databases": "Databases",
    "stack.cloud": "Cloud & Ops",
    "stack.microservices": "Microservices",
    "stack.cicd": "CI/CD pipelines",
    "footer.cta": "Ready to optimize your systems?",
    "footer.timezone": "Based in GMT-6. Synchronized with US teams.",
  },
  es: {
    "meta.description":
      "Arquitecturas de software de alto rendimiento para automatización industrial y ecosistemas empresariales.",
    "nav.projects": "Proyectos",
    "nav.stack": "Stack",
    "nav.contact": "Contacto",
    "nav.langAria": "Idioma",
    "hero.role": "Ingeniero Full Stack Senior",
    "hero.subtitle":
      "Arquitecturas de software de alto rendimiento para automatización industrial y ecosistemas empresariales.",
    "portfolio.kicker": "El trabajo",
    "portfolio.title": "Soluciones destacadas",
    "project.hre.title": "Motor de Recursos Humanos",
    "project.hre.body":
      "Reducción del tiempo de procesamiento de 10 días a 24 horas al mes (90% de optimización) para más de 150 empleados.",
    "project.hre.tag": "Eficiencia operativa",
    "project.fleet.title": "Gestión de flotas",
    "project.fleet.body":
      "Telemetría en tiempo real, analítica de consumo de combustible e integración con API de mantenimiento.",
    "project.fleet.tag": "Logística y telemetría",
    "project.iot.title": "IoT industrial y energía",
    "project.iot.body":
      "Monitoreo de sensores en tiempo real y automatización de equipos eléctricos para la industria de generación eléctrica.",
    "project.iot.tag": "Integración de hardware",
    "project.ai.title": "Agente de inventario con IA",
    "project.ai.body":
      "Chatbot de WhatsApp basado en RAG para consultas de inventario en lenguaje natural.",
    "project.ai.tag": "IA aplicada",
    "project.meteo.title": "Automatización meteorológica",
    "project.meteo.body":
      "Sistemas de reportes automatizados para la estabilidad de la red eléctrica a partir de datos de estaciones meteorológicas.",
    "project.meteo.tag": "Procesamiento de datos",
    "project.pos.title": "Suite POS empresarial",
    "project.pos.body":
      "Punto de venta multitenant: organizaciones aisladas, jerarquía multisucursal por tenant, acceso multiusuario concurrente con roles granulares (RBAC) y reportes de velocidad de ventas, mix de SKU, desempeño por cajero y KPIs por sucursal—listos para exportar a contabilidad y auditorías.",
    "project.pos.tag": "Retail · Comercio omnicanal",
    "stack.kicker": "Experiencia",
    "stack.title": "Rigor técnico",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.databases": "Bases de datos",
    "stack.cloud": "Nube y operaciones",
    "stack.microservices": "Microservicios",
    "stack.cicd": "Pipelines CI/CD",
    "footer.cta": "¿Listo para optimizar tus sistemas?",
    "footer.timezone":
      "Ubicación GMT-6. Sincronizado con equipos en EE. UU.",
  },
};

export const STORAGE_KEY = "ikser.locale";

export function normalizeLocale(raw: string | undefined): Locale {
  if (!raw) return "en";
  const lower = raw.toLowerCase();
  if (lower.startsWith("es")) return "es";
  return "en";
}
