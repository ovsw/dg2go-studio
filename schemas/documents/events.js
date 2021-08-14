import Tabs from "sanity-plugin-tabs";
import { FaTruck } from "react-icons/fa";

export default {
  name: "events",
  title: "On the Road Page",
  type: "document",
  icon: FaTruck,
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
      type: "eventsTabs",
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
      const title = "On the Road Page";
      return {
        title: title,
      };
    },
  },
};
