import { motion } from "framer-motion";

const stats = [
  {
    number: "+4,000",
    label: "Élèves Encadrés",
    description: "Depuis notre création en 2015",
    color: "primary"
  },
  {
    number: "+640,000",
    label: "Heures de Cours",
    description: "Dispensées depuis 2016",
    color: "secondary"
  },
  {
    number: "+300,000",
    label: "Professeurs Qualifiés",
    description: "Disponibles 7 jours sur 7",
    color: "accent"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-muted african-pattern" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nos Chiffres Clés</h2>
          <p className="text-xl text-muted-foreground">Une confiance qui se mesure en résultats concrets</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stats-card bg-card p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`stat-card-${index}`}
            >
              <div className={`text-5xl font-bold text-${stat.color} mb-4`} data-testid={`stat-number-${index}`}>
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-foreground mb-2" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
              <div className="text-muted-foreground" data-testid={`stat-description-${index}`}>
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
