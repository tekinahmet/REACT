import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import Home from "../components/00-common/home";

import HelloJs from "../components/01-hello-world/hello-js";
import Jsx1 from "../components/02-jsx/jsx1";
import Jsx2 from "../components/02-jsx/jsx2";
import Jsx3 from "../components/02-jsx/jsx3";
import Jsx4 from "../components/02-jsx/jsx4";
import Jsx5 from "../components/02-jsx/jsx5";
import Jsx6 from "../components/02-jsx/jsx6";
import Jsx7 from "../components/02-jsx/jsx7";
import Style1 from "../components/03-style/style1";
import Style2 from "../components/03-style/style2";
import Style3 from "../components/03-style/style3";
import Style4 from "../components/03-style/style4";
import Style5 from "../components/03-style/style5";
import Clock1 from "../components/04-clock/clock1";
import Greetings from "../components/05-props/greetings";
import Products from "../components/05-props/products";
import Clock2 from "../components/06-clock/clock2";
import Image from "../components/07-image/image";
import ImageGallery from "../components/08-image-gallery";
import ProfileCard from "../components/09-profile-card";
import BootstrapDynamic from "../components/10-bootstrap/bootstrap-dynamic";
import BootstrapStatic from "../components/10-bootstrap/bootstrap-static";
import Event1 from "../components/11-events/event1";
import Event2 from "../components/11-events/event2";
import Shop from "../components/12-shop/shop";
import State from "../components/13-usestate/state";
import Stateless from "../components/13-usestate/stateless";
import Counter1 from "../components/14-counter/counter1";
import Counter2 from "../components/14-counter/counter2";
import UserList from "../components/15-birthday/user-list";
import UseEffect1 from "../components/16-useeffect/useeffect1";
import UseEffect3 from "../components/16-useeffect/useeffect3";
import Clock3 from "../components/17-clock/clock3";
import CountryFilter from "../components/18-countries/country-filter";
import UseRef from "../components/19-useref/useref";
import ClassComp from "../components/20-class-comp/class-comp";
import Users from "../components/21-api-users/users";
import Users2 from "../components/21-api-users/users2";
import Countries from "../components/22-countries/countries";
import Parent from "../components/23-child-parent/parent";
import Form1 from "../components/24-forms/form1";
import Form2 from "../components/24-forms/form2";
import Form3 from "../components/24-forms/form3";
import Form4 from "../components/24-forms/form4";
import Form5 from "../components/24-forms/form5";
import Form6 from "../components/24-forms/form6";
import ProductManager from "../components/25-product-manager";
import Customers from "../components/26-router/customers";
import CustomerDetails from "../components/26-router/customer-details";
import UseNavigate from "../components/26-router/use-navigate";
import Converter from "../components/27-context-api/converter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
     
      {
        path: "hello-js",
        element: <HelloJs />,
      },
      {
        path: "jsx1",
        element: <Jsx1 />,
      },
      {
        path: "jsx2",
        element: <Jsx2 />,
      },
      {
        path: "jsx3",
        element: <Jsx3 />,
      },
      {
        path: "jsx4",
        element: <Jsx4 />,
      },
      {
        path: "jsx5",
        element: <Jsx5 />,
      },
      {
        path: "jsx6",
        element: <Jsx6 />,
      },
      {
        path: "jsx7",
        element: <Jsx7 />,
      },
      {
        path: "style1",
        element: <Style1 />,
      },
      {
        path: "style2",
        element: <Style2 />,
      },
      {
        path: "style3",
        element: <Style3 />,
      },
      {
        path: "style4",
        element: <Style4 />,
      },
      {
        path: "style5",
        element: <Style5 />,
      },
      {
        path: "clock1",
        element: <Clock1 />,
      },
      {
        path: "greetings",
        element: <Greetings />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "clock2",
        element: <Clock2 textColor="white" bgColor="brown" showTime={true} />,
      },
      {
        path: "image",
        element: <Image />,
      },
      {
        path: "image-gallery",
        element: <ImageGallery />,
      },
      {
        path: "profile-card",
        element: (
          <ProfileCard
            avatar="img/profile.jpg"
            name="Vladislav Mikhailov"
            location="Russia, Krasnodar"
            shot="1"
            followers="2"
            following="10"
          />
        ),
      },
      {
        path: "bootstrap-static",
        element: <BootstrapStatic />,
      },
      {
        path: "bootstrap-dynamic",
        element: <BootstrapDynamic />,
      },
      {
        path: "event1",
        element: <Event1 />,
      },
      {
        path: "event2",
        element: <Event2 />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "stateless",
        element: <Stateless />,
      },
      {
        path: "state",
        element: <State />,
      },
      {
        path: "counter1",
        element: <Counter1 />,
      },
      {
        path: "counter2",
        element: <Counter2 />,
      },
      {
        path: "userlist",
        element: <UserList />,
      },
      {
        path: "useeffect1",
        element: <UseEffect1 />,
      },
      {
        path: "clock3",
        element: <Clock3 />,
      },
      {
        path: "useeffect3",
        element: <UseEffect3 />,
      },
      {
        path: "country-filter",
        element: <CountryFilter />,
      },
      {
        path: "useref",
        element: <UseRef />,
      },
      {
        path: "class-comp",
        element: <ClassComp />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users2",
        element: <Users2 />,
      },
      {
        path: "countries",
        element: <Countries />,
      },
      {
        path: "parent",
        element: <Parent />,
      },
      {
        path: "form1",
        element: <Form1 />,
      },
      {
        path: "form2",
        element: <Form2 />,
      },
      {
        path: "form3",
        element: <Form3 />,
      },
      {
        path: "form4",
        element: <Form4 />,
      },
      {
        path: "form5",
        element: <Form5 />,
      },
      {
        path: "form6",
        element: <Form6 />,
      },
      {
        path: "product-manager",
        element: <ProductManager />,
      },
      {
        path: "routing",
        children: [
          {
            index: true,
            element: <Customers />,
          },
          {
            path: ":id",
            element: <CustomerDetails />,
          },
          {
            path: "usenavigate",
            element: <UseNavigate />,
          },
        ],
      },
      {
        path: "context-api",
        element: <Converter />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
