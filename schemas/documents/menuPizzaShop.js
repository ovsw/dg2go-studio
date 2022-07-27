// import Tabs from "sanity-plugin-tabs";
import { GiPizzaCutter } from "react-icons/gi";

export default {
  name: "menuPizzaShop",
  title: "Menu",
  type: "document",
  icon: GiPizzaCutter,
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
      type: "menuPizzaShopTabs",
      title: "Content",
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
      const title = "Pizza Shop Menu";
      return {
        title: title,
      };
    },
  },
};
