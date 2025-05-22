'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const router = useRouter();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='mt-7 flex min-h-screen'>
      <div className='mx-auto flex w-full max-w-3xl flex-col p-3 lg:flex-row'>
        <div>
          <div
            className='mb-8 cursor-pointer lg:mb-12'
            onClick={() => router.push('/')}
          >
            <ChevronLeft className='size-6 rounded-full border-2 p-1 text-gray-500 sm:size-8' />
          </div>

          {/* Form header */}
          <div>
            <h2 className='mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text pb-3 text-3xl font-bold text-transparent sm:mb-6 sm:text-4xl lg:text-5xl'>
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </h2>
            <p className='mb-6 text-base text-gray-400 sm:mb-8 sm:text-lg lg:text-xl'>
              {isSignUp
                ? 'Join BargainHub today and discover exclusive deals on your favorite products!'
                : 'Welcome back to BargainHub! Log in to continue your shopping journey.'}
            </p>
          </div>

          {/* Toggle form */}
          <div className='mt-4 flex items-center justify-center sm:mt-5'>
            <p className='text-base text-gray-600 sm:text-lg lg:text-xl'>
              {isSignUp ? 'Already a member?' : "Don't have an account?"}
            </p>
            <Button
              variant='link'
              className='cursor-pointer text-lg text-gray-500 sm:text-xl lg:text-2xl'
              onClick={toggleForm}
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
