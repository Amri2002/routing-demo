/*"use client";

export default function ErrorBoundary ({
    error,
    reset,
    }:
    {
        error: Error;
        reset: () =>void;
    }
){
    return <div>{error.message} <button onClick={reset}>Try again</button></div>
}
    */


'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const refreshAndReset = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      {error.message} <button onClick={refreshAndReset}>Try again</button>
    </div>
  );
}