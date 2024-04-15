import { FaPenNib } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoColorPaletteSharp } from "react-icons/io5";

 const products=[
  {
    name: "CHANAKYA",
    description: "BUSINESS RULE ENGINE",
    tagline:"Mind within Mind",
    image:"/images/successIcon.png",
    leftText1:"Empowering Business for",
    leftText2:"Ease of Use & Efficiency",
    rightText:"Natural Language Processing and Generative AI",
    button:"Watch How It Works",
    heading:<h1>Empowering Business for Ease of Use & <span className="text-[var(--yellow)]">Efficiency</span></h1>,
    text:"Chanakya is based on a combination of Natural Language Processing and Generative AI. It takes English statements and converts them into meaningful rules to be executed. Some of the unique propositions Chanakya offers are",
    list:[
      {text:"Extremely High Configurability with minimum effort"},
      {text:"Creating atomic conditions and clubbing them to make complex policies"},
      {text:"Pre-processing capability of data basis SQL"},
      {text:"Creation of Score Cards with flip of a button from policies"}
    ],
    url: "/product/CHANAKYA"
  },
  {
    name: "NatFlow",
    description: "INTUITIVE ENTERPRISE JOURNEY BUILDER",
    tagline:"Do More For Less",
    text:"NatFlow is a platform that has capability to create complex workflows based on available components. It also has a full suite of ready journeys, be it lending or logistic onboarding or hospital onboarding or expense management or any other kind of journeys.",
    leftText1:"Intuitive Journey Builder Suite offering Templatized Journeys as well as Lego Blocks for making a Journey",
    rightText:"Intuitive Enterprise Enterprise Journey Builder",
    button:"Watch How It Works",
    heading:<h1>Intuitive Journey Builder Suite offering Templatized Journeys as well as <span className="text-[var(--yellow)]">Efficiency</span> Lego Blocks for making a Journey</h1>,
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
    tagline:"Collect More, and Now",
    leftText1:"Empowering Business for Ease of Use & Efficiency",
    rightText:"Enterprise Collections Suite",
    button:"Explore Now",
    heading:<h1>Universe of Features in Collection Space, high on <span className="text-[var(--yellow)]">No-Code</span></h1>,
    text:"As an Automation-First System, PayYes has configurable Workflow and Rule Engine based backbone with flexible Auto as well as Manual features for Sourcing, Classification, Allocation, & Tracking, also including Re-Classification, Re-Allocations,  Escalation Management, etc.",
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
    heading:<h1>We help you build Your BeSpoke Product Application with our GenAI <span className="text-[var(--yellow)]">RADM<sup>X</sup> </span>Tool</h1>,
    list:[
      {text:"No lock-in dependencies or flexibility limitations in contrast to Low/No-Code Platforms, enabling a better Long-Term Bespoke Product Lifecycle"},
      {text:"Quick Reviews with a working version readiness in matter of days, offering ultra quick Sprints"},
      {text:"Quick Time to Market & Cost Savings"}
    ],
    tagline:"Mind within Mind",
    leftText1:"Empowering Business for Ease of Use & Efficiency",
    rightText:"Enterprise Collections Suite",
    button:"Explore Now",
    span2: "X",
    description2: "IMIZED",
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