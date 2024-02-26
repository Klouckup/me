import { Button } from '@/components/ui/moving-border';
import React from 'react';

export function LightedButton() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-bright-purple-contrast text-black dark:text-black border-neutral-200 dark:border-white"
      >
        Borders are cool
      </Button>
    </div>
  );
}
