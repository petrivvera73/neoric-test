import React, { Suspense } from 'react';
import Loader from '../Loader/Loader';
import Header from '../Navbar/Header';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
}
