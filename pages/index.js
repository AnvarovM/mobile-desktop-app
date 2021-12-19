import Head from "next/head";
import { useState, useEffect } from 'react'
import Desktop from "../components/desktop";
import Loading from "../components/Loading";

// components
import Mobile from "../components/mobile";
import Tablet from "../components/tablet";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>Appleee</title>
      </Head>


    {loading ? (
      <Loading />
    ) : (
      <div>
      <div className="hidden lg:block">
        <Desktop />
      </div>

      <div className="hidden sm:block lg:hidden">
        <Tablet />
      </div>

      <div className="block sm:hidden">
        <Mobile />
      </div>
    </div>
    )}
    
    </div>
  );
}
