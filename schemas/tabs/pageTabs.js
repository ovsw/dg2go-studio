// import Tabs from "sanity-plugin-tabs";
import { FaListAlt, FaGoogle, FaCog } from "react-icons/fa";

export default {
  name: "pageTabs",
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
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      group: "main",
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) =>
        Rule.error("You have to fill out the slug of the page.").required(),
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "content.title",
        maxLength: 96,
      },
    },
    {
      group: "main",
      name: "body",
      title: "Body",
      type: "bodyPortableText",
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
