'use client'

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import { FaShop } from 'react-icons/fa6';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [img, setImg] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [dataSaved, setDataSaved] = useState(false);

  const router = useRouter();

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const defaultImage = await fetch('/iconwhite.jpg')
      .then((res) => res.blob())
      .then((blob) => new File([blob], 'default.jpg', { type: 'image/jpeg' }));

    const formDataToSend = new FormData();
    formDataToSend.append("req", JSON.stringify({
      name: formData.name,
      username: formData.username,
      password: formData.password
    }));
    formDataToSend.append("file", img || defaultImage);

    try {
      const res = await axios.post('/api/auth/signup', formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201 || res.status === 200) {
        setDataSaved(true);
        setTimeout(() => {
          setDataSaved(false);
          router.push("/auth/signin");
        }, 3000);
      } else {
        setError("Please enter valid credentials");
      }
    } catch {
      setError("An error occurred during registration. Please try again.");
    }
  }, [formData, img, router]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImg(file);
    }
  }, []);

  return (
    <div className='flex'>
      <div className='bg-slate-800 w-[40%] hidden sm:flex flex-col gap-10 items-center justify-center text-center text-[40px] text-white font-semibold'>
        <Link href="/" className='flex items-center justify-center gap-4'>
          <FaShop className='rounded-full text-white text-5xl' />
          <span className="text-2xl font-bold">Shoppie</span>
        </Link>
        <p>Register to<br /> Enjoy Shopping</p>
      </div>
      <form onSubmit={handleSubmit} className='w-screen h-screen flex flex-col items-center justify-center gap-5'>
        {error && <p className='text-red-800 text-sm'>{error}</p>}
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          placeholder="Name"
          className='p-2 rounded-xl border-2 border-slate-500'
        />
        <input
          type="text"
          value={formData.username}
          onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
          placeholder="Username"
          className='p-2 rounded-xl border-2 border-slate-500'
        />
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
          placeholder="Password"
          className='p-2 rounded-xl border-2 border-slate-500'
        />
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
          placeholder="Confirm Password"
          className='p-2 rounded-xl border-2 border-slate-500'
        />
        {img && (
          <div className="mt-2">
            <Image src={URL.createObjectURL(img)} alt="Selected Image" width={100} height={50} className="max-w-full h-[100px] object-contain" />
          </div>
        )}
        <input
          type="file"
          onChange={handleFileChange}
          className="p-1 mx-auto rounded-xl border-2 border-slate-500"
        />
        <button
          type="submit"
          className='disabled:bg-slate-100 px-10 py-2 rounded-xl bg-slate-800 text-white font-semibold'
          disabled={formData.password !== formData.confirmPassword}
        >
          Sign Up
        </button>
        <Link href="/auth/signin" className='text-sm text-slate-400'>Already have an account? Sign In!</Link>
        <Link href="/" className='text-sm text-slate-400'>Go to Home</Link>
      </form>
    </div>
  );
}
