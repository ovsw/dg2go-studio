// import Tabs from "sanity-plugin-tabs";
import { FaListAlt, FaGoogle, FaCog } from "react-icons/fa";

export default {
  name: "menuMealsTabs",
  type: "object",
  title: "Content",
  // inputComponent: Tabs,
  // fieldsets: [
  //   { name: "main", title: "Main" },
  //   { name: "settings", title: "Settings" },
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
      description: "this content appears before the meal menu listings",
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
      name: "mealSchedule",
      title: "Meal Schedule",
      type: "array",
      of: [
        {
          type: "meal",
        },
      ],
      validation: (Rule) => [
        Rule.required().error("Meal menu is empty"),
        Rule.unique().error("no duplicate items"),
      ],
    },
    {
      group: "main",
      name: "bottomSections",
      title: "Bottom Page Sections",
      description:
        "this content appears on the page after the meal menu listings",
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
