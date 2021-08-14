import Tabs from "sanity-plugin-tabs";

export default {
  name: "siteHomeTabs",
  type: "object",
  title: "Content",
  inputComponent: Tabs,
  fieldsets: [
    { name: "hero", title: "Hero" },
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    {
      fieldset: "hero",
      name: "hero",
      title: "Hero",
      type: "hero",
    },
    {
      fieldset: "main",
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
      fieldset: "seo",
      name: "seo",
      title: "SEO Title",
      type: "seo",
    },
  ],
};
