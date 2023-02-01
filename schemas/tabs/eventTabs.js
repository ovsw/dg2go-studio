// import Tabs from "sanity-plugin-tabs";

import { FaListAlt, FaStore, FaShoppingBasket, FaGoogle } from "react-icons/fa";

export default {
  name: "eventTabs",
  type: "object",
  title: "Content",
  // inputComponent: Tabs,
  // fieldsets: [
  //   { name: "main", title: "Main" },
  //   { name: "centerEdge", title: "CenterEdge" },
  //   { name: "foxyCart", title: "FoxyCart" },
  //   { name: "seo", title: "SEO" },
  // ],
  groups: [
    { name: "main", title: "Main Content",icon: FaListAlt,  default: true},
    { name: "centerEdge", title: "CenterEdge", icon: FaStore },
    { name: "foxyCart", title: "FoxyCart", icon: FaShoppingBasket },
    { name: "seo", title: "SEO", icon: FaGoogle },
  ],
  fields: [
    {
      group: "main",
      name: "name",
      title: "Event Name",
      type: "string",
      validation: (Rule) => Rule.required().error("missing event name"),
    },
    {
      group: "main",
      name: "pickupTimeOfDay",
      title: "Pick-up Time of Day",
      description: "this shows up in the cart next to the item.",
      type: "string",
      options: {
        list: [
          { title: "lunch", value: "lunch" },
          { title: "dinner", value: "dinner" },
        ],
      },
      validation: (Rule) =>
        Rule.required().error("missing time of day for pickup"),
    },
    {
      group: "main",
      name: "foxyCart",
      title: "Enable FoxyCart?",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
      description:
        "must set to either on or off. If checked = Event uses FoxyCart store. Unchecked = event uses CenterEdge Store.",
    },
    {
      group: "main",
      name: "hideFromCustomers",
      title: "Hide from customers",
      options: {
        layout: "checkbox",
      },
      description:
        "this option makes the special not show up on the specials listing page for customers. It will still be shown on the hidden page accessible to the DG2GO staff only. Used for placing late orders on events.",
      type: "boolean",
    },
    {
      group: "main",
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) =>
        Rule.error("You have to fill out the slug of the page.").required(),
      description:
        "Some frontends will require a slug to be set to be able to show the event",
      options: {
        source: "content.name",
        maxLength: 96,
      },
    },
    {
      group: "main",
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "ddd Do MMM YYYY",
      },
      validation: (Rule) => Rule.required().error("missing event date"),
    },
    {
      group: "main",
      name: "time",
      title: "Time",
      type: "string",
      validation: (Rule) => Rule.required().error("missing time"),
    },
    {
      group: "main",
      name: "ordersDue",
      title: "Orders Due",
      type: "string",
      validation: (Rule) => Rule.required().error("missing orders due date"),
    },
    {
      group: "main",
      name: "location",
      title: "Pick up location",
      type: "string",
      validation: (Rule) => Rule.required().error("missing pick up location"),
    },
    {
      group: "centerEdge",
      name: "storeUrl",
      title: "CenterEdge Store Link",
      type: "string",
      validation: (Rule) =>
        Rule.custom((field, context) =>
          !context.document.content.foxyCart &&
          (field === undefined || field === "n/a")
            ? "missing centerEdge store link"
            : true
        ),
    },
    {
      group: "centerEdge",
      name: "menu",
      title: "Menu",
      type: "barePortableText",
      validation: (Rule) =>
        Rule.custom((field, context) =>
          !context.document.content.foxyCart && field === undefined
            ? "missing centerEdge menu"
            : true
        ),
    },
    {
      group: "foxyCart",
      name: "menuFoxy",
      title: "FoxyCart Menu",
      type: "array",
      of: [{ type: "eventMenuItem" }],
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context.document.content.foxyCart && field === undefined
            ? "missing FoxyCart menu"
            : true
        ),
    },
    {
      group: "main",
      name: "image",
      title: "Image",
      type: "bgImage",
      validation: (Rule) => Rule.required().error("missing image"),
    },
    {
      group: "seo",
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
};
