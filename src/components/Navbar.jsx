import React from 'react';
import { Menu } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="savey logo" className="h-7 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-green-700">Features</a>
          <a href="#" className="hover:text-green-700">Career</a>
          <a href="#" className="hover:text-green-700">About Us</a>
          <a href="#" className="hover:text-green-700">Contact</a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center w-full rounded-md px-2 py-1 text-sm font-medium text-gray-800 focus:outline-none">
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a href="#" className={`block px-4 py-2 text-sm ${active ? 'bg-blue-100 text-green-700' : 'text-gray-700'}`}>Features</a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a href="#" className={`block px-4 py-2 text-sm ${active ? 'bg-blue-100 text-green-700' : 'text-gray-700'}`}>Career</a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a href="#" className={`block px-4 py-2 text-sm ${active ? 'bg-blue-100 text-green-700' : 'text-gray-700'}`}>About Us</a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a href="#" className={`block px-4 py-2 text-sm ${active ? 'bg-blue-100 text-green-900' : 'text-gray-700'}`}>Contact</a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
