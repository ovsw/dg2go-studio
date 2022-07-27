// import Tabs from "sanity-plugin-tabs";
import { FaListAlt, FaGoogle, FaCog } from "react-icons/fa";

export default {
  name: "specialsTabs",
  type: "object",
  title: "Content",
  // inputComponent: Tabs,
  // fieldsets: [
  //   { name: "main", title: "Main" },
  //   { name: "settings", title: "Page Settings" },
  //   { name: "seo", title: "SEO" },
  // ],
  groups: [
    { name: "main", title: "Main Content",icon: FaListAlt,  default: true},
    { name: "settings", title: "Page Settings", icon: FaCog },
    { name: "seo", title: "SEO", icon: FaGoogle },
  ],
  fields: [
    {
      group: "main",
      name: "topSections",
      title: "Top Page Sections",
      description: "this content appears before the specials listing",
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
      group: "main",
      name: "specials",
      title: "Specials List",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "special" }],
        },
      ],
      // validation: Rule => Rule.required().error('Specials menu is empty')
    },
    {
      group: "main",
      name: "bottomSections",
      title: "Bottom Page Sections",
      description:
        "this content appears on the page after the specials listing",
      type: "array",
      of: [
        { type: "magSection" },
        { type: "ctaSection" },
        // { type: "faqSection" },
        // { type: "cardSection" },
        { type: "reusedSection" },
      ],
    },
    {
      group: "settings",
      name: "image",
      title: "Header Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("page header image missing"),
    },
    {
      group: "seo",
      name: "seo",
      title: "SEO Title",
      type: "seo",
    },
  ],
};
