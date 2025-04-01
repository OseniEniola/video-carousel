import { MainLayout } from "@/layouts";
import { Outlet } from "react-router-dom";

const Root = () => {
   return (
      <div className="bg-grey-1 font-custom min-h-[100vh] w-full">
         <MainLayout>
            <Outlet />
         </MainLayout>
      </div>
   );
};

export default Root;
