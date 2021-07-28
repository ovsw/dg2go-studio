import Tabs from "sanity-plugin-tabs";
import { FaRegStar } from "react-icons/fa";

export default {
  name: "specials",
  title: "Specials",
  type: "document",
  icon: FaRegStar,
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
          description: "this content appears before the specials listing",
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
          fieldset: "main",
          name: "bottomSections",
          title: "Bottom Page Sections",
          description:
            "this content appears on the page after the specials listing",
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
      const title = "Specials Page";
      return {
        title: title,
      };
    },
  },
};
