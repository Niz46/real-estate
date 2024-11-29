import { FaBloggerB, FaHome } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiLandscapeFill } from "react-icons/ri";
import HeroImage from "../assets/heroImage.avif";

export const navs = [
  { name: "home", path: "/home", icon: "home" },
  {
    name: "properties",
    path: "/properties",
    icon: "properties",
    children: [
      { name: "rent", path: "/properties/rent" },
      { name: "sell properties", path: "/properties/sell" },
      { name: "buy properties", path: "/properties/buy" },
    ],
  },
  { name: "blogs", path: "/blogs", icon: "blogs" },
  {
    name: "services",
    path: "/services",
    icon: "services",
    children: [
      { name: "wishlist", path: "/services/wishlist" },
      { name: "agents", path: "/services/agents" },
      {
        name: "customer Service",
        path: "mailto:inquries.favournzeh02@gmail.com",
      },
    ],
  },
];

export const NavIcons = {
  home: <FaHome />,
  properties: <RiLandscapeFill />,
  blogs: <FaBloggerB />,
  services: <MdMiscellaneousServices />,
};

export const heroData = [
  {
    title: "Welome To LuxeLand",
    heading: "Find Your Dream Home: Buy, Sell, Rent with Ease!",
    description:
      "Welcome to your perfect home. From cozy retreats to city pads, we bring your vision to life with expert guidance and exclusive listings. Start your effortless real estate journey today!",
    backgroundImage: HeroImage,
    offer: "10% off",
    tag: "On All Properties",
  },
];

export const aboutData = [
  {
    title: "Deep Dive",
    mission: "Empowering people to embrace their dream house.",
    description:
      "Explore endless possibilities with expert guidance and easy-to-use tools to find the home that fits your lifestyle",
  },
];

export const lodgeData = [
  {
    title: "Your Dream Home Awaits!",
    message: "Discover your dream home today",
  }
]

export const getStatisticsData = (visitCount) => [
  { label: "Active Clients", value: 7 },
  { label: "Anonymous User", value: visitCount }, 
  { label: "Listed Properties", value: 8 },
  { label: "Sold Properties", value: 3 },
];
