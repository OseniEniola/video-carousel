import { NotFound } from "@/pages/Errors";
import { RouteListType } from "./type";
import { Root } from "@/components/Root";
import { Home } from "@/pages";
import { MainLayout } from "@/layouts";

const Routes: RouteListType[] = [
  {
    component: Root,
    path: 'app',
    children: [
      { path: 'home', component: Home, auth: false },
    ]
  },
  {
    path: '*',
    component: NotFound
  }
];

export default Routes;
