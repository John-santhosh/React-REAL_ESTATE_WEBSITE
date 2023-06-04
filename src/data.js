import { nanoid } from "nanoid";
import img1 from "./assets/images/img1.png";
import img2 from "./assets/images/img2.png";
import img3 from "./assets/images/img-3.png";
import img4 from "./assets/images/img-4.png";
import img5 from "./assets/images/img-5.png";

import featureImg1 from "./assets/images/featureImg1.jpg";
import featureImg2 from "./assets/images/featureImg2.jpg";
import featureImg3 from "./assets/images/featureImg3.jpg";
import featureImg4 from "./assets/images/featureImg4.jpg";
import featureImg5 from "./assets/images/featureImg5.jpg";
import featureImg6 from "./assets/images/featureImg6.jpg";

export const navLinks = [
  { id: nanoid(), text: "Home", url: "/" },
  { id: nanoid(), text: "About", url: "/about" },
  { id: nanoid(), text: "Services", url: "/services" },
  { id: nanoid(), text: "Blog", url: "/blog" },
  { id: nanoid(), text: "Pricing", url: "/pricing" },
  { id: nanoid(), text: "Contact", url: "/contact" },
];

export const FeaturedTypes = [
  { id: nanoid(), img: img1, title: "Family House", desc: "122 Property" },
  { id: nanoid(), img: img2, title: "House & Villa", desc: "155 Property" },
  { id: nanoid(), img: img3, title: "Apartment", desc: "300 Property" },
  { id: nanoid(), img: img4, title: "Office & Studio", desc: "80 Property" },
  { id: nanoid(), img: img5, title: "Villa & Condo", desc: "32 Property" },
];

export const products = [
  {
    id: nanoid(),
    img: featureImg1,
    title: "Red Carpet Real Estate",
    category: "Apartment",
    rent: true,
    desc: " 210 GreenWay Road, Chennai",
    price: 3700,
  },
  {
    id: nanoid(),
    img: featureImg2,
    title: "Fairmount Properties",
    category: "Offices",
    desc: " 3142 SCAD colony, Nellai",
    price: 2000,
  },
  {
    id: nanoid(),
    img: featureImg3,
    title: "Herringbone Realty",
    category: "Homes & Villas",
    rent: true,
    desc: "800 Less street, Madurai",
    price: 3800,
  },
  {
    id: nanoid(),
    img: featureImg4,
    title: "Brick Lane Realty",
    category: "Commercial",
    desc: "23 Teachers Colony, Coimbatore",
    price: 3500,
  },
  {
    id: nanoid(),
    img: featureImg5,
    title: "Banyon Tree Realty",
    category: "Offices",
    rent: true,
    desc: "147 Three Broomstick, Hogwarts",
    price: 6000,
  },
  {
    id: nanoid(),
    img: featureImg6,
    title: "The Real Estate Corner",
    category: "Condos",
    desc: "388 Ashok Nagar, Chennai ",
    price: 4999,
  },
];
import { FaTrophy, FaAward, FaHeart } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

export const awards = [
  { id: nanoid(), Icon: FaTrophy, title: 10, award: "Blue Burmin Award" },
  { id: nanoid(), Icon: FaAward, title: 5, award: "Mimo X11 Award" },
  { id: nanoid(), Icon: HiLightBulb, title: 8, award: "Australian UGC Award" },
  { id: nanoid(), Icon: FaHeart, title: 2, award: "IITCA Green Award" },
];

import loc1 from "./assets/images/loc1.jpg";
import loc2 from "./assets/images/loc2.jpg";
import loc3 from "./assets/images/loc3.jpg";
import loc4 from "./assets/images/loc4.jpg";
import loc5 from "./assets/images/loc5.jpg";
import loc6 from "./assets/images/loc6.jpg";
export const locations = [
  { id: nanoid(), img: loc1, title: "chennai, TamilNadu" },
  { id: nanoid(), img: loc2, title: "mumbai, Mumbai" },
  { id: nanoid(), img: loc3, title: "karnataka, Karnataka" },
  { id: nanoid(), img: loc4, title: "pune, Pune" },
  { id: nanoid(), img: loc5, title: "jaipur, Jaipur" },
  { id: nanoid(), img: loc6, title: "delhi, Delhi" },
];

import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import agent1 from "./assets/images/agent1.jpg";
import agent2 from "./assets/images/agent2.jpg";
import agent3 from "./assets/images/agent3.jpg";
import agent4 from "./assets/images/agent4.jpg";
import agent5 from "./assets/images/agent5.jpg";
import agent6 from "./assets/images/agent6.jpg";
export const agents = [
  {
    id: nanoid(),
    img: agent1,
    dec: "Noida, Delhi",
    listing: 30,
    name: "Ashoke Kumar",
    socials: [FaFacebookF, FaLinkedin, FaTwitter, FaInstagram],
  },
  {
    id: nanoid(),
    img: agent2,
    dec: "Chennai TamilNadu",
    listing: 42,
    name: "Dinesh Kumar",
    socials: [FaFacebookF, FaLinkedin, FaTwitter, FaInstagram],
  },
  {
    id: nanoid(),
    img: agent3,
    dec: "Vizag, Andhra",
    listing: 70,
    name: "Jacob",
    socials: [FaFacebookF, FaLinkedin, FaTwitter, FaInstagram],
  },
  {
    id: nanoid(),
    img: agent4,
    dec: "Banglore, Karnataka",
    listing: 43,
    name: "Kiran raj",
    socials: [FaFacebookF, FaLinkedin, FaTwitter, FaInstagram],
  },
  {
    id: nanoid(),
    img: agent5,
    dec: "Chennai TamilNadu",
    listing: 35,
    name: "John",
    socials: [FaFacebookF, FaLinkedin, FaTwitter, FaInstagram],
  },
  {
    id: nanoid(),
    img: agent6,
    dec: "Mumbai, Maharashtra",
    listing: 26,
    name: "Rajesh",
    socials: [FaFacebookF, FaLinkedin, FaTwitter, FaInstagram],
  },
];

// blogs
export const blogs = [
  {
    id: nanoid(),
    img: "https://images.unsplash.com/photo-1627640268913-91cfd4675b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
    title: "An own House for Everyone in ",
  },
  {
    id: nanoid(),
    img: "https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    title: "How to Become a Real Estate Agent? ",
  },
  {
    id: nanoid(),
    img: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "How to Become a Real Estate Agent?",
  },
  {
    id: nanoid(),
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "How to Become a Real Estate Agent?",
  },
  {
    id: nanoid(),
    img: "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    title: "How to Become a Real Estate Agent?",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "How to Become a Real Estate Agent?",
  },
];

export const tags = [
  "realestate",
  "homeforsale",
  "openhouse",
  "housegoals",
  "luxuryrealestate",
  "condoliving",
  "property",
  "newlisting",
  "realestateadvice",
  "realestateexperts",
];
