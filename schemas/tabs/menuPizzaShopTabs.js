// import Tabs from "sanity-plugin-tabs";
import { FaListAlt, FaGoogle, FaCog } from "react-icons/fa";

export default {
  name: "menuPizzaShopTabs",
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
      description:
        "this content appears on the page before the pizza shop menus",
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
      name: "originalPizzaMenuImage",
      title: "Pizza Menu Image",
      type: "bgImage",
      validation: (Rule) =>
        Rule.required().error("Original Pizza image missing"),
    },
    {
      group: "main",
      name: "originalPizzaMenu",
      title: "Original Pizza Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "dishPizzaShop" }],
          options: {
            filter: 'type == "Original Pizza"',
          },
        },
      ],
      validation: (Rule) => [
        Rule.required().error("Original Pizza menu is empty"),
        Rule.unique().error("no duplicate items"),
      ],
    },
    {
      group: "main",
      name: "deepDishPizzaMenuImage",
      title: "Deep Dish Pizza Menu Image",
      type: "bgImage",
      validation: (Rule) =>
        Rule.required().error("Deep Dish Pizza image missing"),
    },
    {
      group: "main",
      name: "deepDishPizzaMenu",
      title: "Deep Dish Pizza Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "dishPizzaShop" }],
          options: {
            filter: 'type == "Deep Dish Pizza"',
          },
        },
      ],
      validation: (Rule) => [
        Rule.required().error("Deep Dish Pizza menu is empty"),
        Rule.unique().error("no duplicate items"),
      ],
    },
    {
      group: "main",
      name: "juniorHoagieMenuImage",
      title: "Junior Hoagies Menu Image",
      type: "bgImage",
      validation: (Rule) =>
        Rule.required().error("Junior Hoagies image missing"),
    },
    {
      group: "main",
      name: "juniorHoagieMenu",
      title: "Marianna's Junior Hoagie Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "dishPizzaShop" }],
          options: {
            filter: 'type == "Marianna\'s Junior Hoagie"',
          },
        },
      ],
      validation: (Rule) => [
        Rule.required().error("Hoagie menu is empty"),
        Rule.unique().error("no duplicate items"),
      ],
    },
    {
      group: "main",
      name: "frozenPastaMenuImage",
      title: "Frozen Pasta Menu Image",
      type: "bgImage",
      validation: (Rule) => Rule.required().error("Frozen pasta image missing"),
    },
    {
      group: "main",
      name: "frozenPastaMenu",
      title: "Frozen Pasta Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "dishPizzaShop" }],
          options: {
            filter: 'type == "Frozen Homemade Pasta"',
          },
        },
      ],
      validation: (Rule) => [
        Rule.required().error("Original Pizza menu is empty"),
        Rule.unique().error("no duplicate items"),
      ],
    },
    {
      group: "main",
      name: "bottomSections",
      title: "Bottom Page Sections",
      description:
        "this content appears on the page after the pizza shop menus",
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
