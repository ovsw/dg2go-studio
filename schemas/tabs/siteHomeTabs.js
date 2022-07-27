// import Tabs from "sanity-plugin-tabs";
import { FaListAlt, FaGoogle, FaCog } from "react-icons/fa";

export default {
  name: "siteHomeTabs",
  type: "object",
  title: "Content",
  // inputComponent: Tabs,
  // fieldsets: [
  //   { name: "hero", title: "Hero" },
  //   { name: "main", title: "Main" },
  //   { name: "seo", title: "SEO" },
  // ],
  groups: [
    { name: "hero", title: "Hero", icon: FaCog, default: true },
    { name: "main", title: "Main Content",icon: FaListAlt},
    { name: "seo", title: "SEO", icon: FaGoogle },
  ],
  fields: [
    {
      group: "hero",
      name: "hero",
      title: "Hero",
      type: "hero",
    },
    {
      group: "main",
      name: "sections",
      title: "Homepage Content Sections",
      type: "array",
      of: [
        { type: "magSection" },
        { type: "ctaSection" },
        // {type: 'bigHeading'},
        // {type: 'tableSection'},
        // { type: "faqSection" },
        // { type: "cardSection" },
        { type: "reusedSection" },
      ],
    },
    {
      group: "seo",
      name: "seo",
      title: "SEO Title",
      type: "seo",
    },
  ],
};
