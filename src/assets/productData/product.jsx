import { FaPenNib } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoColorPaletteSharp } from "react-icons/io5";

 const products=[
  {
    name: "CHANKAYA",
    description: "BUSINESS RULE ENGINE",
    tagline:"Mind within Mind",
    leftText1:"Empowering Business for",
    leftText2:"Ease of Use & Efficiency",
    rightText:"Natural Language Processing and Generative AI",
    button:"Watch How It Works",
    url: "/product/CHANKAYA"
  },
  {
    name: "NatFlow",
    description: "INTUITIVE ENTERPRISE JOURNEY BUILDER",
    tagline:"Do More For Less",
    leftText1:"Intuitive Journey Builder Suite offering Templatized Journeys as well as Lego Blocks for making a Journey",
    rightText:"Intuitive Enterprise Enterprise Journey Builder",
    button:"Watch How It Works",
    heading: <><span style={{ color: "var(--yellow)" }}>API</span> First Approach</>,
    content: "Chanakya is based on a combination of Natural Language Processing and Generative AI. It takes English statements and converts them into meaningful rules to be executed. Some of the unique propositions Chanakya offers are:",
    items: [
      { icon: <GoPencil />, text: ["Integration Module: ", "For integrations of all the APIs"] },
      { icon: <FaPenNib />, text: ["All Modules available:", "Integration Module", "UI/UX Module", "BRE Module", "Communications Module", "Dashboards and Reports"] },
      { icon: <HiOutlineSpeakerphone />, text: ["Templatized journeys"] },
      { icon: <IoColorPaletteSharp />, text: ["Highly scalable due to", "containerization"] },
    ],
    url: "/product/NatFlow"
  },
  {
    name: "PayYes",
    description: "ENTERPRISE COLLECTIONS SUITE",
    tagline:"Mind within Mind",
    leftText1:"Empowering Business for Ease of Use & Efficiency",
    rightText:"Enterprise Collections Suite",
    button:"Explore Now",
    heading: <><span style={{ color: "var(--yellow)" }}>API</span> First Approach</>,
    content: "Chanakya is based on a combination of Natural Language Processing and Generative AI. It takes English statements and converts them into meaningful rules to be executed. Some of the unique propositions Chanakya offers are:",
    items: [
      { icon: <GoPencil />, text: ["Integration Module: ", "For integrations of all the APIs"] },
      { icon: <FaPenNib />, text: ["All Modules available:", "Integration Module", "UI/UX Module", "BRE Module", "Communications Module", "Dashboards and Reports"] },
      { icon: <HiOutlineSpeakerphone />, text: ["Templatized journeys"] },
      { icon: <IoColorPaletteSharp />, text: ["Highly scalable due to", "containerization"] },
    ],
    url: "/product/PayYes"
  },
  {
    name: "RADM",
    span: "x",
    description: "RAPID DEVELOPMENT MA",
    // description: "ENTERPRISE COLLECTIONS SUITE",
    tagline:"Mind within Mind",
    leftText1:"Empowering Business for Ease of Use & Efficiency",
    rightText:"Enterprise Collections Suite",
    button:"Explore Now",
    span2: "X",
    description2: "IMIZED",
     heading: <><span style={{ color: "var(--yellow)" }}>API</span> First Approach</>,
    content: "Chanakya is based on a combination of Natural Language Processing and Generative AI. It takes English statements and converts them into meaningful rules to be executed. Some of the unique propositions Chanakya offers are:",
    items: [
      { icon: <GoPencil />, text: ["Integration Module: ", "For integrations of all the APIs"] },
      { icon: <FaPenNib />, text: ["All Modules available:", "Integration Module", "UI/UX Module", "BRE Module", "Communications Module", "Dashboards and Reports"] },
      { icon: <HiOutlineSpeakerphone />, text: ["Templatized journeys"] },
      { icon: <IoColorPaletteSharp />, text: ["Highly scalable due to", "containerization"] },
    ],
    url: "/product/RADM"
  }
];



export default products