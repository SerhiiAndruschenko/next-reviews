'use client'
import { useInView } from 'react-intersection-observer';

const AnimatedElement = ({ children, animationClass }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`animated-element ${inView ? 'fade-in' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;