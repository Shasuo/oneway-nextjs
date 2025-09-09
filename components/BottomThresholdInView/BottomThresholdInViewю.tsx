import { InView } from 'react-intersection-observer';

export const BottomThresholdInView = ({ children, thresholdVw = 10 }:{children: any, thresholdVw: number}) => {
  const rootMargin = `20% 0px -${thresholdVw}% 0px`; 

  return (
    <InView rootMargin={rootMargin} triggerOnce={false}>
      {({ inView, ref }) => (
        <div ref={ref}>
          {children(inView)}
        </div>
      )}
    </InView>
  );
};