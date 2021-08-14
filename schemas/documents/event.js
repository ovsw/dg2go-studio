import Tabs from "sanity-plugin-tabs";
import { FaTruck } from "react-icons/fa";
import moment from "moment";
import { string } from "prop-types";

export default {
  name: "event",
  title: "On the Road Event",
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
      type: "eventTabs",
    },
  ],
  orderings: [
    {
      name: "eventDateAsc",
      title: "By Event Date - oldest first",
      by: [
        {
          field: "content.date",
          direction: "asc",
        },
      ],
    },
    {
      name: "eventDateDesc",
      title: "By Event Date - newest first",
      by: [
        {
          field: "content.date",
          direction: "desc",
        },
      ],
    },
  ],
  preview: {
    select: {
      date: "content.date",
      title: "content.name",
      image: "content.image",
    },
    prepare({ date, title, image }) {
      const formattedDate = moment(new Date(date)).format("ddd Do MMM");
      return {
        title: title,
        subtitle: formattedDate,
        media: image,
      };
    },
  },
};
