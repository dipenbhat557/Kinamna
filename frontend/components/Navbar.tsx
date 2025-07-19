"use client"

//when user is signed in, signup btn will change to my Account that will be dropdown menu which will show my orders,switch account,logout and other

import React, { useState, useEffect, useRef } from 'react';
import { Heart, ShoppingCart, Search, Menu, User } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-white shadow border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-8 py-3 md:py-4">
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-black hover:text-gray-700 transition">
          Kinamna
        </Link>
        {/* Hamburger for mobile */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(v => !v)}>
          <Menu className="w-7 h-7 text-black" />
        </button>
      </div>
      {/* Center Nav Links */}
      <div className={`flex-col md:flex-row md:flex gap-8 text-base font-medium text-black md:items-center ${mobileMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto bg-white md:bg-transparent z-30`}> 
        <Link href="/" className="hover:underline underline-offset-4 py-2 md:py-0">Home</Link>
        <Link href="/contact" className="hover:underline underline-offset-4 py-2 md:py-0">Contact</Link>
        <Link href="/about-us" className="hover:underline underline-offset-4 py-2 md:py-0">About</Link>
      </div>
      {/* Right: Search, Heart, Cart, Account */}
      <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-0 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="rounded-md border border-gray-300 px-4 py-2 pl-10 w-full md:w-56 focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        <Link href="/wishlist" className="p-2 rounded-full hover:bg-gray-100 transition">
          <Heart className="w-6 h-6" />
        </Link>
        <Link href="/cart" className="p-2 rounded-full hover:bg-gray-100 transition">
          <ShoppingCart className="w-6 h-6" />
        </Link>
        
        {/* Account Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition"
            onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
          >
            <User className="w-6 h-6" />
          </button>
          
          {accountDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
              <div className="py-1">
                <a href="/orders/1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Orders</a>
                <a href="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Switch Account</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
