'use client';

import type { PropsWithChildren } from 'react';
import { ProgressLoader } from 'nextjs-progressloader';


export function LoaderProvider({ children }: PropsWithChildren) {
  return (
    <>
      <ProgressLoader 
        color='red'
        crawl
        crawlSpeed={1000}
      />
      {children}
    </>
  );
}