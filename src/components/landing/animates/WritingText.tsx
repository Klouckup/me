import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export const WritingText = ({ text }: { text: string }) => {
  return <TextGenerateEffect words={text} />;
};
