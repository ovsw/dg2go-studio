import Tabs from "sanity-plugin-tabs";
import { FiCalendar } from "react-icons/fi";
import { CgUnavailable } from "react-icons/cg";

import moment from "moment";

export default {
  name: "meal",
  title: "Menu",
  type: "object",
  icon: CgUnavailable,
  liveEdit: false,
  __experimental_actions: [
    "create",
    "update",
    "publish",
    "delete",
  ] /* 'create', 'delete' */,
  fields: [
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "ddd Do MMM",
      },
      validation: (Rule) => Rule.required().error("missing date"),
    },
    {
      name: "dish",
      title: "Dish",
      type: "reference",
      to: [{ type: "dish" }],
      validation: (Rule) => Rule.required().error("missing dish"),
    },
    {
      name: "hideFromCustomers",
      title: "Hide from customers",
      description:
        "this option makes the meal not show up on the meals menu page for customers. It will still be shown on the hidden page accessible to the DG2GO staff only. Used for placing late orders on meals.",
      type: "boolean",
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
    select: {
      date: "date",
      dishName: "dish.name",
      hiddenFromCustomers: "hideFromCustomers",
    },
    prepare({ date, dishName, hiddenFromCustomers }) {
      const formattedDate = moment(new Date(date)).format("ddd Do MMM ");
      const hiddenStr = hiddenFromCustomers ? " HIDDEN" : "";
      const icon = hiddenFromCustomers ? CgUnavailable : FiCalendar;

      return {
        title: `${formattedDate}${hiddenStr}`,
        subtitle: dishName,
        media: icon,
      };
    },
  },
};
