import BrickApp from "../../../../public/images/brick-app.png";
import BrickWeb from "../../../../public/images/brick-website.png";
import BrickDashBoard from "../../../../public/images/brick-dashboard.png";
import NextVenture from "../../../../public/images/next-venture.png";
import E_Commerce from "../../../../public/images/e-commerce.png";
import * as I from "@/components/Common/Icons";

export const experiences = [
  {
    image: E_Commerce,
    imageAlt: "Audiophile website image",
    title: "E-commerce Website",
    body: "The Frontend UI of an e-commerce website, powered by the latest app directory and server components from Next and Redux for state management. Delivers a dynamic and efficient shopping experience. Its CMS backend is in development, driven by MongoDB, enables easy product management. Plus, it ensures secure transactions through Stripe checkout for customer peace of mind.",
    buttonText: "Product",
    buttonText2: "Code",
    linkHref: "https://ecommerce.rosidev.com/",
    linkHref2: "https://github.com/FaNi-Coding/e-commerce",
    buttonIcon: <I.WorkIcon />,
    buttonIcon2: <I.InfoIcon />,
  },
  {
    image: BrickWeb,
    imageAlt: "Brick website image",
    title: "Brick Website",
    body: "Bricks website development involves creating a responsive UI/UX with integrated and still un integrated reusable components with scalable solutions and server-side-rendering. Developed with Next, styled components and next-i18",
    buttonText: "Product",
    linkHref: "https://www.brick.tech",
    buttonIcon: <I.WorkIcon />,
  },
  {
    image: BrickDashBoard,
    imageAlt: "Brick Dashboard image",
    title: "Brick Admin Dashboard",
    body: "Focus on visual redesign, reusable components and a user friendly platform, integrating APIs and custom graphs to the UI. Developed with React, Redux and styled components",
    buttonText: "Read More",
    linkHref: "https://www.brick.tech/partnership/products",
    buttonIcon: <I.InfoIcon />,
  },
  {
    image: BrickApp,
    imageAlt: "Brick app image",
    title: "Brick App´less Solution",
    body: "Web application, functions as an alternative for customers without the app, Focus on user-flow with easy navigation, database integration and an intuitive interface. Created with React, Redux and SASS",
    buttonText: "Product",
    linkHref: "https://go.brickapp.se/",
    buttonIcon: <I.WorkIcon />,
  },
  {
    image: NextVenture,
    imageAlt: "Next Venture website image",
    title: "Next Venture",
    body: "The development of Next Venture's domain auction site includes responsive design, UI/UX, and database integration. The tech stack consisted of Next, Firebase, Tailwind.css, Stripe",
    buttonText: "Product",
    linkHref: "https://www.nextventure.com",
    buttonIcon: <I.WorkIcon />,
  },
];
