import Head from "next/head";
import Image from "next/image";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="body">
      <Head>
        <title>CERITA RAKYAT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </Head>
      <Header />

      <div className="main">
        <div className="categories section-wrapper">
          <div className="flex-header">
            <h2>Categories</h2>
            <a href="/kategori">See all</a>
          </div>
          {/* START KATEGORI */}
          <div className="items">
            <div className="item">
              <div className="item-img">
                <Image
                  className="item-img"
                  src="/assets/img/veg.jpeg"
                  alt="me"
                  width="100%"
                  height="100%"
                />
              </div>
              <h4>Vegetables</h4>
            </div>
            <div className="item">
              <div className="item-img">
                <Image
                  className="item-img"
                  src="/assets/img/veg.jpeg"
                  alt="me"
                  width="100%"
                  height="100%"
                />
              </div>
              <h4>Vegetables</h4>
            </div>
            <div className="item">
              <div className="item-img">
                <Image
                  className="item-img"
                  src="/assets/img/veg.jpeg"
                  alt="me"
                  width="100%"
                  height="100%"
                />
              </div>
              <h4>Vegetables</h4>
            </div>
            <div className="item">
              <div className="item-img">
                <Image
                  className="item-img"
                  src="/assets/img/veg.jpeg"
                  alt="me"
                  width="100%"
                  height="100%"
                />
              </div>
              <h4>Vegetables</h4>
            </div>
            <div className="item">
              <div className="item-img">
                <Image
                  className="item-img"
                  src="/assets/img/veg.jpeg"
                  alt="me"
                  width="100%"
                  height="100%"
                />
              </div>
              <h4>Vegetables</h4>
            </div>
          </div>
          {/* END KATEGORI */}
        </div>
        <div className="promo">
          <div className="items promo-items">
            <div className="promo-item">
              <Image
                className="promo-img"
                src="/assets/img/apples.png"
                alt="me"
                width="100%"
                height="100%"
              />
              <div className="promo-info">
                <h3>30% Discount</h3>
                <p>Order any food from app and get discount</p>
                {/* <a href="">Order now</a> */}
              </div>
            </div>
            <div className="promo-item">
              <Image
                className="promo-img"
                src="/assets/img/banana.png"
                alt="me"
                width="100%"
                height="100%"
              />
              <div className="promo-info">
                <h3>30% Discount</h3>
                <p>Order any food from app and get discount</p>
                <a href="">Order now</a>
              </div>
            </div>
          </div>
        </div>

        {/* STAR POPULAR */}
        <div className="popular section-wrapper">
          <div className="flex-header">
            <h2>Popular deals</h2>
            <a href="">See all</a>
          </div>
          <div className="items">
            <div className="popular-item">
              <div className="popular-img">
                <Image
                  className="popular-img"
                  src="/assets/img/1.jpeg"
                  alt="me"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="popular-item">
              <div className="popular-img">
                <Image
                  className="popular-img"
                  src="/assets/img/2.jpeg"
                  alt="me"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="popular-item">
              <div className="popular-img">
                <Image
                  className="popular-img"
                  src="/assets/img/3.jpeg"
                  alt="me"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="popular-item">
              <div className="popular-img">
                <Image
                  className="popular-img"
                  src="/assets/img/4.jpeg"
                  alt="me"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
        {/* END POPULAR */}
      </div>
      <Footer />
    </div>
  );
}
