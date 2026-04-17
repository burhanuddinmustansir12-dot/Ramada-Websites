'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to ramada1 automatically
    router.push('/ramada1');
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Ramada 1...</h1>
        <p className="text-gray-600">
          If not redirected,{' '}
          <a href="/ramada1" className="text-blue-600 underline">
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
