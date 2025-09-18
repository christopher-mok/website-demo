"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
//import "./Nav.css";

const links = [
    {
        name: 'store',
        path: "/"
    },
    {
        name: 'cart',
        path: "/cart"
    },
    {
        name: 'checkout',
        path: "/checkout"
    },
    {
        name: 'contact',
        path: "/contact"
    },
];

// const Nav = () => {
//     const pathname = usePathname();
//     console.log(pathname);
//     return (
//         <nav className='flex gap-8'>{links.map((link, index) => {
//             return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} 
//             capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
//         })}</nav>
//     );
// };

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link key={index} href={link.path}
            className={`${isActive ? "text-accent border-b-2 border-accent" : ""} 
              capitalize font-medium hover:text-accent transition-all flex items-center gap-1`}
          >
            {link.name === "cart" ? (
              <ShoppingCart size={24} />
            ) : (
              link.name
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav