// import Tabs from "sanity-plugin-tabs";
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
      type: "specialsTabs",
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
