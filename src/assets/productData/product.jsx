import { FaPenNib } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoColorPaletteSharp } from "react-icons/io5";

const products = [
  {
    name: "CHANAKYA",
    bannerImage: "/images/product/pruductHeroBg1.png",
    description: "BUSINESS RULE ENGINE",
    tagline: "Mind within Mind",
    image: "/images/successIcon.png",
    leftText1: "Empowering Business for",
    leftText2: "Ease of Use & Efficiency",
    rightText: "Natural Language Processing and Generative AI",
    button: "Watch How It Works",
    heading: (
      <h1>
        Empowering Business for Ease of Use &{" "}
        <span className="text-[var(--yellow)]">Efficiency</span>
      </h1>
    ),
    text: "Chanakya is based on a combination of Natural Language Processing and Generative AI. It takes English statements and converts them into meaningful rules to be executed. Some of the unique propositions Chanakya offers are",
    list: [
      { text: "Extremely High Configurability with minimum effort" },
      {
        text: "Creating atomic conditions and clubbing them to make complex policies",
      },
      { text: "Pre-processing capability of data basis SQL" },
      { text: "Creation of Score Cards with flip of a button from policies" },
    ],
    productVideoContent: [
      "No need of technical knowledge, business should be doing business",
      "What You See Is What You Get (WYSIWYG) concept for rules, policies and scorecards",
      "Simulations on Production data giving a major tool to visit the past, see trends and shape future",
      "Testing bulk data to envisage even before rules hit production",
      "Scalability to nth degree",
    ],
    url: "/product/CHANAKYA",
  },
  {
    name: "NatFlow",
    bannerImage: "/images/product/pruductHeroBg2.png",
    description: "INTUITIVE ENTERPRISE JOURNEY BUILDER",
    tagline: "Do More For Less",
    text: "NatFlow is a platform that has capability to create complex workflows based on available components. It also has a full suite of ready journeys, be it lending or logistic onboarding or hospital onboarding or expense management or any other kind of journeys.",
    leftText1:
      "Intuitive Journey Builder Suite offering Templatized Journeys as well as Lego Blocks for making a Journey",
    rightText: "Intuitive Enterprise Enterprise Journey Builder",
    button: "Watch How It Works",
    heading: <h1>Intuitive Enterprise Enterprise Journey Builder</h1>,
    items: [
      { icon: <GoPencil />, text: ["Integration Module: ", "For integrations of all the APIs"],},
      { icon: <FaPenNib />, text: ["All Modules available:", "Integration Module", "UI/UX Module",
          "BRE Module", "Communications Module", "Dashboards and Reports",],},
      { icon: <HiOutlineSpeakerphone />, text: ["Templatized journeys"] },
      { icon: <IoColorPaletteSharp />,  text: ["Highly scalable due to", "containerization"],},
    ],
    productVideoContent: [
      "API First Approach",
      "Integration Module : For integrations of all the APIs",
      "UI/UX Module : For building the screens",
      "BRE Module : Chankya, for externalizing the business knowledge",
      "Communications Module : For internal as well as external communication",
    ],
    url: "/product/NatFlow",
  },
  {
    name: "PayYes",
    bannerImage: "/images/product/pruductHeroBg3.png",
    description: "ENTERPRISE COLLECTIONS SUITE",
    tagline: "Collect More, and Now",
    leftText1: "Empowering Business for Ease of Use & Efficiency",
    rightText: "Enterprise Collections Suite",
    button: "Explore Now",
    heading: (
      <h1>
        Universe of Features in Collection Space, high on{" "}
        <span className="text-[var(--yellow)]">No-Code</span>
      </h1>
    ),
    text: "PayYes is an automation-first system with configurable workflow and rule engine, facilitating end-to-end collection business processes with web and mobile interfaces, agency/agent profile matrix setup, and strategy-driven case distribution for expedited operations.",
    items: [
      { icon: <GoPencil />, text: ["Integration Module: ", "For integrations of all the APIs"],
      },
      { icon: <FaPenNib />, text: ["All Modules available:", "Integration Module", "UI/UX Module",
          "BRE Module", "Communications Module", "Dashboards and Reports",], },
      { icon: <HiOutlineSpeakerphone />, text: ["Templatized journeys"] },
      { icon: <IoColorPaletteSharp />, text: ["Highly scalable due to", "containerization"],
      },
    ],
    productVideoContent: [
      "Out of the Box Universe of Features for the complete Collection ",
      "Big-Booster to Curing Efficiency - Automation-First Approach",
      "Powerful Simulation Analytics",
      "Multi-Entity, Multi-LMS, Multi-LOBs",
      "	Capable of covering the Full-Paradigm of usage",
    ],
    url: "/product/PayYes",
  },
  {
    name: "RADM",
    span: "x",
    bannerImage: "/images/product/pruductHeroBg4.png",
    description: "RAPID DEVELOPMENT MA",
    heading: (
      <h1>
        BeSpoke Product Application with our GenAI RADM<sup>X</sup> Tool
      </h1>
    ),
    text:"We help you build your BeSpoke Product Application with our GenAI RADMx Tool, offering best in class Technology Architecture, Quick Time To Market benefits and more.",
    list: [
      { text: "No lock-in dependencies or flexibility limitations in contrast to Low/No-Code Platforms, enabling a better Long-Term Bespoke Product Lifecycle", },
      { text: "Quick Reviews with a working version readiness in matter of days, offering ultra quick Sprints",
      },
      { text: "Quick Time to Market & Cost Savings" },
    ],
    tagline: "Rapid Application Development Maximised",
    leftText1: "Larger the Project Size, Higher the Benefits!!",
    rightText: "Accelerated Development & Reviews Sprints leveraging RADM",
    button: "Explore Now",
    span2: "X",
    description2: "IMIZED",
    items: [
      { icon: <GoPencil />, text: ["Integration Module: ", "For integrations of all the APIs"],
      },
      { icon: <FaPenNib />, text: ["All Modules available:", "Integration Module", "UI/UX Module",
          "BRE Module", "Communications Module", "Dashboards and Reports", ],
      },
      { icon: <HiOutlineSpeakerphone />, text: ["Templatized journeys"] },
      { icon: <IoColorPaletteSharp />, text: ["Highly scalable due to", "containerization"], },
    ],
    productVideoContent: [
      "BRD",
      "Solution Detailing ",
      "Accelerated Development & Reviews Sprints leveraging RADMx",
      "Delivery",
      "Scalability to nth degree",
    ],
    url: "/product/RADM",
  },
];

export default products;
