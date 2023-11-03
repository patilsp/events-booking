// config/docs.ts
import { NavItem } from "types/nav";

interface DocsConfig {
  mainNav: NavItem[];
  sidebarNav: NavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Features",
      href: "/flex-1",
    },
    {
      title: "How It Works",
      href: "/howitworks",
    },
    {
      title: "Applications",
      href: "/Applications",
    },
    {
      title: "About Us",
      href: "/aboutus",
    },
     {
      title: "Contact Us",
      href: "/contactus",
    },
    {
      title: "FAQ",
      href: "/",
    },
   
    
  ],
  sidebarNav: [
    {
      items: [
        {
          title: "Help",
          href: "/helps",
        },
        {
          title: "Settings",
          href: "/forms",
        },
        {
          title: "Sign In",
          href: "/sign-up",
        },
        // ... other sidebarNav sub-items ...
      ],
    },
    // ... other sidebarNav items ...
  ],
};
