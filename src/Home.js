import React from "react";
// import bgimage from "./images/51Gmod25+NL._SX1500_.jpg";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home bg-slate-400 mt-[90px] sm:mt-[50px]">
      <img
        className="img md:-mb-[150px] -mb-[40px] "
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
    <div className="home__row md:flex ">
    <Product id='123223' title='The Lean Startup: How COnstant Innovation Creates' price={11.96} rating={5} image='https://climaxgroup.org/wp-content/uploads/2022/04/51aoe6r1ibL.png'
       />

<Product id='12322' title='Kenwood kMix Stand Mxer for baking, styling kitchen, mixer with K-beaterDou: How COnstant Innovation Creates' price={11.96} rating={5} image='https://dalyselectrical.ie/wp-content/uploads/2021/12/KMX760BC-2.jpg'
       />


    </div>

    <div className="home__row md:flex gap-2">
    <Product id='1233523' title='The Mar Ultra Wristwatch. This is an amazing wristwatch' price={5000.96} rating={5} image='https://images.samsung.com/is/image/samsung/assets/africa_en/2208/pcd/watches/Galaxy_Watch5_mo.png?$264_264_PNG$'
       />

<Product id='125422' title='JBL water resistance sond system, JBL sound is the best sound you cant get else where get it now' price={11.96} rating={5} image='https://rukminim1.flixcart.com/image/416/416/jkk1hu80/speaker/mobile-tablet-speaker/p/n/h/jbl-xtreme-original-imaf7vzze2fdczez.jpeg?q=70'
       />
<Product id='12345422' title='New Apple Ipad,The new iPad Pro (2022) comes in two display options: 11-inch display, which is available at a starting price of Rs 81,900 and 12.9-inch display for Rs 1,12,900.  ' price={2280.96} rating={5} image='https://www.thestatesman.com/wp-content/uploads/2020/02/ipad-pro-12-11-select-201810_FMT_WHH_ED.jpg'
       />

    </div>
    <div className="home__row md:flex gap-2">
    <Product id='12345422' title='New Samsung Monitor,The new Samsung Monitor Pro (2022) comes in two display options: 11-inch display, which is available at a starting price of Rs 2281,900 and 12.9-inch display for Rs 1,12,900.  ' price={2280.96} rating={5} image='https://images.anandtech.com/doci/12863/vg49v-angle.jpg  '
       />

    </div>
      
    </div>
  );
};

export default Home;
