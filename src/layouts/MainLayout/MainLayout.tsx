import { Footer, NavBar } from "@/components";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
   return (
      <div className="flex flex-col h-full">
         <NavBar />
         {children}
         <Footer/>
      </div>
   );
};

export default MainLayout;
