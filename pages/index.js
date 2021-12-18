import Head from "next/head";
import Desktop from "../components/desktop";

// components
import Mobile from "../components/mobile";
import Tablet from "../components/tablet";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Appleee</title>
      </Head>


    <div className="hidden xl:block">
       <Desktop />
    </div>

    <div className="hidden sm:block lg:hidden">
      <Tablet />
    </div>

    <div className="block sm:hidden">
      <Mobile />
    </div>
    
    </div>
  );
}
