import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Linkedin, Github, Phone } from 'lucide-react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dineshkumarmopuru@gmail.com',
      href: 'mailto:dineshkumarmopuru@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8098876223',
      href: 'tel:+918098876223',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, India 🇮🇳',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have an opportunity, a project in mind, or just want to chat? Feel free to reach out directly or connect through social media!
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {contactDetails.map((detail, index) => {
            const CardContent = (
              <div className="flex flex-col items-center text-center p-8 h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300">
                  <detail.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{detail.label}</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-balance break-all">
                  {detail.value}
                </p>
              </div>
            );

            return (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card hover:border-primary/30 transition-all duration-300 group hover:translate-y-[-4px] hover:shadow-lg"
              >
                {detail.href ? (
                  <a href={detail.href} className="block h-full">
                    {CardContent}
                  </a>
                ) : (
                  <div className="h-full">
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">Or connect on social media</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://linkedin.com/in/mopuru-dinesh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/mopurudinesh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12"
              title="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:dineshkumarmopuru@gmail.com"
              className="social-icon w-12 h-12"
              title="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

