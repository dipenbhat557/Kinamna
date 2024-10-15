import { AdBanner1 } from "./components/AdBanner1";
import { BestDeals } from "./components/BestDeals";
import { BuyAgainComp } from "./components/BuyAgainComp";
import { CarouselComponent } from "./components/CarouselComponent";
import { DressStyleMobileComponent } from "./components/DressStyleMobileComponent";
import { HomeDecor } from "./components/HomeDecor";
import { HomeDecorMobileComponent } from "./components/HomeDecorMobileComponent";
import { MobileAddSection } from "./components/MobileAddSection";
import { RecentItem } from "./components/RecentItem";
import TopDeals from "./components/TopDeals";

import service from "../public/images/service.png";
import deliver from "../public/images/delivery.png";
import support from "../public/images/support.png";
import SupportBar from "./components/Support";
import { Topbar } from "./components/Topbar";
import Navbar from "./components/Navbar";
import { CategoryNav } from "./components/CategoryNav";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen  w-full  justify-between items-center ">
        <div className="w-full flex flex-col gap-5  ">
          <Topbar />
          <Navbar />
          <CategoryNav />
        </div>
        <CarouselComponent />
        <TopDeals />
        <MobileAddSection />
        <BestDeals />
        <HomeDecor />
        <HomeDecorMobileComponent />
        <DressStyleMobileComponent />
        <RecentItem />
        <AdBanner1 />
        <BuyAgainComp />
        <SupportBar service={service} deliver={deliver} support={support} />
        <Footer />
      </div>
    </>
  );
}
