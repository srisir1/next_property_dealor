import Footer from "@/features/comman/modules/Footer";
import Navigation from "@/features/comman/modules/Navigation";

const DefaultLayout = ({ children }) => {
   return (
      <>
         <Navigation />
         {children}
         <Footer />
      </>
   )
}

export default DefaultLayout;