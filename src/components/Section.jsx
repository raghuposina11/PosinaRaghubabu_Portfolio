import { motion } from 'framer-motion';

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            {title}
          </motion.h2>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}