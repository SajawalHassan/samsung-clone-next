import Head from "next/head";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Products from "./components/MonthsPick";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Samsung</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Banner />

        <Products
          heading="This Month's Picks"
          option1="Mobile"
          option2="TV & AV"
          option3="Home Appliances"
          option4="Offer"
        />
        {/* Mobile (COMPONENT) */}

        {/* Tv & Sound (COMPONENT) */}

        {/* Home Appliances (COMPONENT) */}

        {/* #DoWhatYouCant (COMPONENT) */}

        {/* Looking for Something else? (COMPONENT) */}
      </main>
    </div>
  );
}
