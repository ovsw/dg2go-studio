// import Tabs from "sanity-plugin-tabs";
import { FiFile } from "react-icons/fi";

export default {
  name: "page",
  title: "Page",
  type: "document",
  icon: FiFile,
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
      type: "pageTabs",
    },
  ],
  orderings: [
    {
      name: "createdAt",
      title: "Created older->newer",
      by: [
        {
          field: "_createdAt",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "content.title",
      slug: "content.slug",
    },
    prepare({ title = "No title", slug = {} }) {
      const path = `/${slug.current}/`;
      return {
        title,
        subtitle: path,
      };
    },
  },
};
