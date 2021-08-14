import Tabs from "sanity-plugin-tabs";

export default {
  name: "menuMealsTabs",
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
        // { type: "faqSection" },
        // { type: "cardSection" },
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
      validation: (Rule) => Rule.required().error("page header image missing"),
    },
    {
      fieldset: "seo",
      name: "seo",
      title: "SEO Title",
      type: "seo",
    },
  ],
};
