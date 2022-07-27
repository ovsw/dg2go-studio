// import Tabs from "sanity-plugin-tabs";

export default {
  name: "eventsTabs",
  type: "object",
  title: "Content",
  // inputComponent: Tabs,
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
      description: "this content appears on the page before the events listing",
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
      fieldset: "main",
      name: "eventsList",
      title: "Events List",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "event" }],
        },
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
    {
      fieldset: "main",
      name: "bottomSections",
      title: "Bottom Page Sections",
      description: "this content appears on the page after the events listing",
      type: "array",
      of: [
        { type: "magSection" },
        { type: "ctaSection" },
        // { type: "faqSection" },
        // { type: "cardSection" },
        { type: "reusedSection" },
      ],
    },
  ],
};
