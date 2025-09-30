import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description, subjects, color, index }) {
  const colorClasses = {
    primary: "from-primary/10 to-primary/20 border-primary/20",
    secondary: "from-secondary/10 to-secondary/20 border-secondary/20",
    accent: "from-accent/10 to-accent/20 border-accent/20"
  };

  const iconColorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary", 
    accent: "bg-accent"
  };

  const checkColorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent"
  };

  return (
    <motion.div
      className={`service-card bg-gradient-to-br ${colorClasses[color]} p-8 rounded-xl border-2`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-testid={`service-card-${title.toLowerCase()}`}
    >
      <div className={`w-20 h-20 ${iconColorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-6`}>
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-foreground mb-4 text-center">{title}</h3>
      <p className="text-muted-foreground mb-6 text-center">{description}</p>
      <div className="space-y-3">
        {subjects.map((subject, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <svg className={`w-5 h-5 ${checkColorClasses[color]}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-foreground">{subject}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
