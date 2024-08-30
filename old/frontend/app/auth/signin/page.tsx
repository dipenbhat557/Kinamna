'use client'

import { userIdState } from '@/app/utils/store';
import { getSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useCallback, useMemo } from 'react';
import { FaShop } from 'react-icons/fa6';
import { useSetRecoilState } from 'recoil';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const setUserId = useSetRecoilState(userIdState)

  const searchParams = useSearchParams();
  const callbackUrl = useMemo(() => searchParams.get('callbackUrl') || '/', [searchParams]);
  const router = useRouter();

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
        callbackUrl,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        const session = await getSession();
        setUserId(session?.user?.id)
        if (result?.url) {
          router.push(result.url);
        }
      }
    } catch {
      setError('An unexpected error occurred.');
    }
  }, [username, password, callbackUrl, router]);

  return (
    <div className='flex'>
      <div className='bg-slate-800 w-[40%] hidden sm:flex flex-col gap-10 items-center justify-center text-center text-[40px] text-white font-semibold'>
        <Link href="/" className='flex items-center justify-center gap-4'>
          <FaShop className='text-white text-5xl' />
          <span className="text-2xl font-bold">Shoppie</span>
        </Link>
        <p>Sign In to<br /> Enjoy Shopping</p>
      </div>
      <form onSubmit={handleSubmit} className='w-screen h-screen flex flex-col items-center justify-center gap-5'>
        {error && <p className='text-red-800 text-sm'>{error}</p>}
        <p className='sm:hidden text-center font-semibold'>Sign In to<br /> Enjoy Shopping</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className='p-2 rounded-xl border-2 border-slate-500'
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className='p-2 rounded-xl border-2 border-slate-500'
        />
        <button
          type="submit"
          className='disabled:bg-slate-200 bg-slate-800 px-10 py-2 rounded-xl text-white'
          disabled={!username || !password}
        >
          Sign In
        </button>
        <Link href="/auth/signup" className='text-sm text-slate-400'>Don’t have an account? Register Now!</Link>
        <Link href="/" className='text-sm text-slate-400'>Go to Home</Link>
      </form>
    </div>
  );
}
