'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/app/register/Navbar';
import Order from './Order';
import PayPal from './PayPal';

export default function Page() {
  const pathname = usePathname();
  const getSlugFromPathName = pathname.split("/")[2];
  const [cleanResponse, setCleanResponse] = useState(null);

  useEffect(() => {
    const getInformation = async () => {
      const res = await fetch("/api/checkout", {
        method: 'POST',
        body: JSON.stringify(getSlugFromPathName)
      });
      const cleanResponse = await res.json();
      setCleanResponse(cleanResponse);
    };

    getInformation();
  }, [getSlugFromPathName]);

  console.log(cleanResponse);

  return (
    <div>
      <Navbar />
      {cleanResponse && <Order props={cleanResponse} />}
      <PayPal />
    </div>
  );
}
