// import Tabs from "sanity-plugin-tabs";
import { FaListAlt, FaGoogle, FaCog } from "react-icons/fa";

export default {
  name: "specialTabs",
  type: "object",
  title: "Content",
  // inputComponent: Tabs,
  // fieldsets: [
  //   { name: "main", title: "Main" },
  //   { name: "seo", title: "SEO" },
  // ],
  groups: [
    { name: "main", title: "Main Content",icon: FaListAlt,  default: true},
    // { name: "settings", title: "Page Settings", icon: FaCog },
    { name: "seo", title: "SEO", icon: FaGoogle },
  ],
  fields: [
    {
     group: "main",
      name: "name",
      type: "string",
      title: "Special's Name",
      validation: (Rule) => Rule.required().error("missing name"),
    },
    {
     group: "main",
      name: "date",
      title: "Pick-up Date",
      type: "date",
      options: {
        dateFormat: "ddd Do MMM",
      },
      validation: (Rule) => Rule.required().error("missing date"),
    },
    {
     group: "main",
      name: "time",
      title: "Pick-up Time (optional)",
      type: "string",
    },
    {
     group: "main",
      name: "shortDescription",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.required().error("missing description"),
    },
    {
     group: "main",
      name: "salesStarted",
      title: "Start Selling",
      options: {
        layout: "checkbox",
      },
      description:
        'check this to make the "Order" buttons appear next to menu items. With this option un-checked, any menu items added will be listed, but no "Order" buttons will show for them so people won\'t be able to order',
      type: "boolean",
    },
    {
     group: "main",
      name: "hideFromCustomers",
      title: "Hide from customers",
      options: {
        layout: "checkbox",
      },
      description:
        "this option makes the special not show up on the specials listing page for customers. It will still be shown on the hidden page accessible to the DG2GO staff only. Used for placing late orders on specials.",
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
        "Some frontends will require a slug to be set to be able to show the special",
      options: {
        source: "content.name",
        maxLength: 96,
      },
    },
    {
     group: "main",
      name: "image",
      type: "bgImage",
      title: "Main image",
      validation: (Rule) => Rule.required().error("missing image"),
    },

    {
     group: "main",
      name: "description",
      type: "basicPortableText",
      title: "Full Description",
      validation: (Rule) => Rule.required().error("missing description"),
    },
    // {
    //  group: 'main',
    //   name: 'storeUrl',
    //   type: 'string',
    //   title: 'Link to Store',
    //   description: '(optional) leave empty to not show an "Order" button on the page - NOTE: without this visitors will be unable to order the special!'
    // },
    // {
    //  group: 'main',
    //   name: 'storeComingSoon',
    //   type: 'string',
    //   title: 'Coming Soon Text',
    //   description: 'if you left the store link empty (no link to order) then enter some text below, saying when it will be available.'
    // },
    {
     group: "main",
      name: "dishes",
      title: "Special's Dishes",
      description:
        'you can edit each items price, pre-order and pick-up dates and times by editing the item. You can edit an item by clicking on the "link" icon below, or by fiding it in the "Special Dishes" section of the main menu',
      type: "array",
      of: [
        {
          type: "specialMenuItem",
        },
      ],
      // validation: Rule => [
      //   Rule.min(1).error('must have at least one dish'),
      //   Rule.unique().error('no duplicate dishes')
      // ]
    },
    {
     group: "seo",
      name: "seo",
      title: "SEO Title",
      type: "seo",
    },
  ],
};
