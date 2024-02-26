import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { LightedButton } from './LightedButton';

export const TypeWriter = () => {
  const words = [
    {
      text: '<Daniel',
      className: 'dark:text-bright-purple-contrast',
    },
    {
      text: 'Kalcher />',
      className: 'dark:text-bright-purple-contrast',
    },
    {
      text: 'IT',
    },
    {
      text: 'Consultant.',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};
