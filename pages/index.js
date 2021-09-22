import Head from "next/head";
import Banner from "./Banner";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Samsung</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div>
          <Banner />
        </div>

        {/* This Month's Picks (COMPONENTS) */}

        {/* Mobile (COMPONENTS) */}

        {/* Tv & Sound (COMPONENTS) */}

        {/* Home Appliances (COMPONENTS) */}

        {/* #DoWhatYouCant (COMPONENTS) */}

        {/* Looking for Something else? (COMPONENTS) */}
      </main>
    </div>
  );
}
