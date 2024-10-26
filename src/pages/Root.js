import { Navigation } from "../components/Navigation";
import { MobileNavigation } from "../components/MobileNavigation";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <div className='mx-8 my-14 md:m-14 lg:m-16 2xl:m-20'>
      <MobileNavigation />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
