export type Locale = "en" | "es";

export type MessageKey =
  | "meta.description"
  | "nav.projects"
  | "nav.stack"
  | "nav.contact"
  | "nav.langAria"
  | "hero.role"
  | "hero.experience"
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
  | "project.link.visit"
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
      "I develop intuitive, scalable solutions from design through implementation—software that makes daily operations easier to run and automation more dependable, grounded in consistent best practices.",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "nav.langAria": "Language",
    "hero.role": "Full Stack Engineer",
    "hero.experience": "More than 4 years of experience",
    "hero.subtitle":
      "I develop intuitive, scalable solutions from design through implementation—software that makes daily operations easier to run and automation more dependable, grounded in consistent best practices.",
    "portfolio.kicker": "Portfolio",
    "portfolio.title": "Selected projects",
    "project.hre.title": "Human resources system",
    "project.hre.body":
      "Modular HR: task tracking, payroll automation, personnel, and accounting handoff. Multi-company billing ties logged activities to project labor charges. Administrative processing time cut by ~90%.",
    "project.hre.tag": "HR · Payroll · Accounting",
    "project.fleet.title": "Fleet Management",
    "project.fleet.body":
      "Manually logged operations (no automated route capture yet): vehicle usage control, fuel consumption, performance metrics, and integration with a maintenance app.",
    "project.fleet.tag": "Fleet · Fuel · Maintenance",
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
    "project.pos.title": "POS for small businesses",
    "project.pos.body":
      "Point-of-sale for small businesses: multitenant and multi-branch support, inventory, taxes, sales generation, and reporting—without enterprise-suite complexity.",
    "project.pos.tag": "Retail · SMB",
    "project.link.visit": "Open application",
    "stack.kicker": "Technologies",
    "stack.title": "Stack & tooling",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.databases": "Databases",
    "stack.cloud": "Cloud & Ops",
    "stack.microservices": "Microservices",
    "stack.cicd": "CI/CD pipelines",
    "footer.cta": "Ready to optimize your systems?",
    "footer.timezone":
      "Based in GMT-6. Synchronized with US and LATAM teams.",
  },
  es: {
    "meta.description":
      "Desarrollo soluciones intuitivas y escalables, desde el diseño hasta la implementación: software que facilita procesos diarios y automatizaciones fiables, con buenas prácticas en cada etapa.",
    "nav.projects": "Proyectos",
    "nav.stack": "Stack",
    "nav.contact": "Contacto",
    "nav.langAria": "Idioma",
    "hero.role": "Ingeniero Full Stack",
    "hero.experience": "Más de 4 años de experiencia",
    "hero.subtitle":
      "Desarrollo soluciones intuitivas y escalables, desde el diseño hasta la implementación: software que facilita procesos diarios y automatizaciones fiables, con buenas prácticas en cada etapa.",
    "portfolio.kicker": "Portafolio",
    "portfolio.title": "Proyectos destacados",
    "project.hre.title": "Sistema de recursos humanos",
    "project.hre.body":
      "RRHH modular: tareas, planilla automática, personal y procesos contables. Multiempresa: cobro de mano de obra por proyecto según actividades ingresadas. ~90% menos tiempo en procesos administrativos.",
    "project.hre.tag": "RRHH · Planilla · Contabilidad",
    "project.fleet.title": "Gestión de flotas",
    "project.fleet.body":
      "Datos ingresados manualmente (aún sin automatización de recorridos): control de uso de vehículos, consumos de combustible, rendimiento e integración con app de mantenimientos.",
    "project.fleet.tag": "Flotas · Combustible · Mantenimiento",
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
    "project.pos.title": "POS para pequeños negocios",
    "project.pos.body":
      "Punto de venta pensado para comercios pequeños: soporte multitenant y multisucursal, inventario, impuestos, generación de ventas y reportes—sin la complejidad de una suite empresarial.",
    "project.pos.tag": "Retail · Pymes",
    "project.link.visit": "Abrir aplicación",
    "stack.kicker": "Tecnologías",
    "stack.title": "Stack y herramientas",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.databases": "Bases de datos",
    "stack.cloud": "Nube y operaciones",
    "stack.microservices": "Microservicios",
    "stack.cicd": "Pipelines CI/CD",
    "footer.cta": "¿Listo para optimizar tus sistemas?",
    "footer.timezone":
      "Ubicación GMT-6. Sincronizado con equipos de EE. UU. y LATAM.",
  },
};

/** Same name as cookie set by `middleware.ts` (LOCALE_COOKIE). */
export const STORAGE_KEY = "ikser.locale";
