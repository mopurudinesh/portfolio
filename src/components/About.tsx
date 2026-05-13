import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Code2, Trophy, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Dev',
    description: 'Building responsive web applications and integrating robust backend APIs.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building predictive models, evaluating performance, and deploying intelligent systems.',
  },
  {
    icon: TrendingUp,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights through EDA and statistical modeling.',
  },
  {
    icon: Trophy,
    title: 'Problem Solver',
    description: 'Analytical thinking and breaking down complex problems into scalable solutions.',
  },
  {
    icon: Zap,
    title: 'Clean Code',
    description: 'Writing maintainable, robust code with best practices in mind.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with cross-functional teams to deliver exceptional results.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafting data-driven solutions & intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Detail-oriented Computer Engineering undergraduate (2026) at <span className="text-foreground font-medium">Saveetha School of Engineering</span> with hands-on experience in application development, Full Stack, and Machine learning projects. My academic and practical journey has been centered around building reliable applications and extracting value from data.
              </p>
              <p>
                Strong in <span className="text-primary font-medium">Java, SQL, and Web Technologies</span> and analytical problem-solving with proven ability to work on real-world technical solutions. Adept at communication, logical reasoning, and documentation. I am constantly seeking opportunities in Developer, Software, Analyst, and other Tech roles where I can contribute to impactful projects.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
