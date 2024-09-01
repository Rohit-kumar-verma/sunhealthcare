"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from "../app/_components/Header";
import Footer from "../app/_components/Footer";
import ContactButtons from "./ContactButtons";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const [hash, setHash] = useState(""); // State to hold the hash fragment

  useEffect(() => {
    // Set the hash value once the component mounts
    setHash(window.location.hash);
  }, []);

  // Define paths where the layout should be applied
  const includedPaths = ['/', '/aboutus'];

  // Define valid hashes
  const validHashes = ['#services', '#about', '#contact'];

  // Check if the current path or hash is not valid
  if (!includedPaths.includes(pathname) && !validHashes.includes(hash)) {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    );
  }

  // Render the full layout if conditions are met
  // console.log('Rendering full layout with Header, ContactButtons, and Footer');
  return (
    <div>
      <Header />
      {children}
      <ContactButtons />
      <Footer />
    </div>
  );
};

export default ClientLayout;
