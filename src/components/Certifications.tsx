import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Certification {
  name: string;
  authority: string;
  description: string[];
  logo: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    name: 'Oracle Certified Professional Java SE17 Developer',
    authority: 'Oracle',
    description: [
      'Advanced Java programming concepts',
      'Object-oriented design and functional programming'
    ],
    logo: '/logos/oracle.png',
    link: '/oracle-java.pdf'
  },
  {
    name: 'Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate',
    authority: 'Oracle',
    description: [
      'AI and Machine Learning fundamentals on OCI',
      'Cloud computing and AI services'
    ],
    logo: '/logos/oracle.png',
    link: '/oracle-cloud.pdf'
  },
  {
    name: 'Cisco Networking Fundamentals',
    authority: 'Cisco Networking Academy',
    description: [
      'Networking concepts and protocols',
      'Routing, switching, and network security'
    ],
    logo: '/logos/cisco.png',
    link: '/cisco-ds.pdf'
  }
];

export const Certifications = ({ limit }: { limit?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const displayCerts = limit ? certifications.slice(0, limit) : certifications;

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {displayCerts.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group hover:translate-y-[-4px] hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 p-2 border border-border/20 group-hover:border-primary/30 transition-colors overflow-hidden">
                  {cert.logo ? (
                    <img
                      src={cert.logo.startsWith('/') ? cert.logo : `/${cert.logo}`}
                      alt={cert.authority}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="font-bold text-primary text-lg">{cert.authority.substring(0, 3).toUpperCase()}</span>
                  )}
                </div>
              </div>

              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {cert.name}
              </h3>

              <p className="text-sm text-primary font-semibold mb-3">
                {cert.authority}
              </p>

              <ul className="space-y-2 mb-4">
                {cert.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {cert.link && (
                <div className="mt-6 pt-4 border-t border-border/30">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full gap-2 group-hover:border-primary/50 transition-colors">
                      <FileText className="w-4 h-4" />
                      View Certificate
                    </Button>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
