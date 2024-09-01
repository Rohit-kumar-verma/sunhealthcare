"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from "../app/_components/Header";
import Footer from "../app/_components/Footer";
import ContactButtons from "./ContactButtons";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState(""); // State to hold the hash fragment

  useEffect(() => {
    // Set the hash value once the component mounts
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    // Redirect to 404 if hash is present
    console.log(hash);
    if (hash) {
      console.log('Redirecting to 404 because hash is present');
      router.push('/404');
    }
  }, [hash, router]);

  // Define paths where the layout should be applied
  const includedPaths = ['/', '/aboutus', '/#services', '/#about', '/#contact'];

  // Render nothing if pathname is not included or hash is present (handled by redirect)
  if (!includedPaths.includes(pathname) || hash) {
    return null;
  }

  // Render the full layout if conditions are met
  console.log('Rendering full layout with Header, ContactButtons, and Footer');
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
