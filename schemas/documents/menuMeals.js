import Tabs from "sanity-plugin-tabs";
import { FaRegCalendarAlt } from "react-icons/fa";

export default {
  name: "menuMeals",
  title: "Menu",
  type: "document",
  icon: FaRegCalendarAlt,
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
        { name: "seo", title: "SEO" },
        { name: "settings", title: "Page Settings" },
      ],
      fields: [
        {
          fieldset: "main",
          name: "topSections",
          title: "Top Page Sections",
          description: "this content appears before the meal menu listings",
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
          fieldset: "main",
          name: "bottomSections",
          title: "Bottom Page Sections",
          description:
            "this content appears on the page after the meal menu listings",
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
      const title = "Meals Menu Page";
      return {
        title: title,
      };
    },
  },
};
