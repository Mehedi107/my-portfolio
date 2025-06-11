import * as motion from 'motion/react-client';

const SlideInFromBottom = ({ children, delay = 0.3 }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromBottom;
