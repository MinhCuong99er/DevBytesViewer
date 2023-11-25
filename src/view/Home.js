
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import HomeArticles from "../components/Home/HomeArticles";
import HomeWhyChooseUs from "../components/Home/HomeWhyChooseUs";
import HomeBestValueTrips from "../components/Home/HomeBestValueTrips";
import HomePopularDestinations from "../components/Home/HomePopularDestinations";

function Home() {

  return (
    <>
      <div id="wrapper" classname="hasbg transparent" style={{ paddingTop: 74 }}>
        <Header />
        <HomePopularDestinations />
        <HomeBestValueTrips />
        <HomeWhyChooseUs />
        <HomeArticles />
      </div>
      <Footer />
    </>
  );
}

export default Home;
