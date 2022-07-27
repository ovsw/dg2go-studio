// import Tabs from "sanity-plugin-tabs";
import { BiDish } from "react-icons/bi";
import moment from "moment";

export default {
  name: "special",
  title: "Special",
  type: "document",
  icon: BiDish,
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
      type: "specialTabs",
    },
  ],
  // orderings: [
  //   {
  //     name: 'menuDate',
  //     title: 'By Menu Date - oldest first',
  //     by: [
  //       {
  //         field: 'date',
  //         direction: 'asc'
  //       }
  //     ]
  //   },
  //   {
  //     name: 'menuDate',
  //     title: 'By Menu Date - newest first',
  //     by: [
  //       {
  //         field: 'date',
  //         direction: 'desc'
  //       }
  //     ]
  //   }
  // ],
  preview: {
    select: {
      name: "content.name",
      hideFromCustomers: "content.hideFromCustomers",
      media: "content.image",
    },
    prepare({ name, hideFromCustomers, media }) {
      const subtitle = hideFromCustomers ? "HIDDEN" : "";

      return {
        title: name,
        subtitle: subtitle,
        media,
      };
    },
  },
};
