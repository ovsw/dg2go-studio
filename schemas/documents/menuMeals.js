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
      type: "menuMealsTabs",
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
