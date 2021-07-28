import Tabs from "sanity-plugin-tabs";
import { GiPizzaCutter } from "react-icons/gi";

export default {
  name: "menuPizzaShop",
  title: "Menu",
  type: "document",
  icon: GiPizzaCutter,
  liveEdit: false,
  __experimental_actions: [
    "create",
    "update",
    "publish",
    "delete",
  ] /* 'create', 'delete' */,
  fields: [
    {
      name: "content",
      type: "object",
      title: "Content",
      inputComponent: Tabs,
      fieldsets: [
        { name: "main", title: "Main" },
        { name: "settings", title: "Settings" },
        { name: "seo", title: "SEO" },
      ],
      fields: [
        {
          fieldset: "main",
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
            { type: "faqSection" },
            { type: "cardSection" },
            { type: "reusedSection" },
          ],
        },
        {
          fieldset: "main",
          name: "originalPizzaMenuImage",
          title: "Pizza Menu Image",
          type: "bgImage",
          validation: (Rule) =>
            Rule.required().error("Original Pizza image missing"),
        },
        {
          fieldset: "main",
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
          fieldset: "main",
          name: "deepDishPizzaMenuImage",
          title: "Deep Dish Pizza Menu Image",
          type: "bgImage",
          validation: (Rule) =>
            Rule.required().error("Deep Dish Pizza image missing"),
        },
        {
          fieldset: "main",
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
          fieldset: "main",
          name: "juniorHoagieMenuImage",
          title: "Junior Hoagies Menu Image",
          type: "bgImage",
          validation: (Rule) =>
            Rule.required().error("Junior Hoagies image missing"),
        },
        {
          fieldset: "main",
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
          fieldset: "main",
          name: "frozenPastaMenuImage",
          title: "Frozen Pasta Menu Image",
          type: "bgImage",
          validation: (Rule) =>
            Rule.required().error("Frozen pasta image missing"),
        },
        {
          fieldset: "main",
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
          fieldset: "main",
          name: "bottomSections",
          title: "Bottom Page Sections",
          description:
            "this content appears on the page after the pizza shop menus",
          type: "array",
          of: [
            { type: "magSection" },
            { type: "ctaSection" },
            { type: "faqSection" },
            { type: "cardSection" },
            { type: "reusedSection" },
          ],
        },
        {
          fieldset: "settings",
          name: "image",
          title: "Header Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) =>
            Rule.required().error("page header image missing"),
        },
        {
          fieldset: "seo",
          name: "seo",
          title: "SEO Title",
          type: "seo",
        },
      ],
    },
  ],
  orderings: [
    {
      name: "menuDate",
      title: "By Menu Date - oldest first",
      by: [
        {
          field: "date",
          direction: "asc",
        },
      ],
    },
    {
      name: "menuDate",
      title: "By Menu Date - newest first",
      by: [
        {
          field: "date",
          direction: "desc",
        },
      ],
    },
  ],
  preview: {
    select: {},
    prepare() {
      const title = "Pizza Shop Menu";
      return {
        title: title,
      };
    },
  },
};
