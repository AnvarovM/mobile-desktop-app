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
    }, 4000);
  }, []);


  return (
    <div>
      <Head>
        <title>Apple products</title>
        <link rel="shortcut icon" href="/img/apple.png" />
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
