'use client';

import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function SignInPage() {
  return (
    <main className="flex min-h-screen">
      {/* Left: Image section */}
      <div className="w-1/2 hidden lg:block relative">
        <Image
          src="/singin.jpg" // replace with your actual image path
          alt="Authentication illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right: Sign-in form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-4 py-8">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Sign in to your account</h2>
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
      </div>
    </main>
  );
}
