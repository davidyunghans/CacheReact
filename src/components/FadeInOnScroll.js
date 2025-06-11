import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeInOnScroll = ({ children, className = "" }) => {
  const ref = useRef();

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 40%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default FadeInOnScroll;
