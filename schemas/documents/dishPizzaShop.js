// import Tabs from "sanity-plugin-tabs";
import { FaPizzaSlice } from "react-icons/fa";

export default {
  name: "dishPizzaShop",
  title: "Dish",
  type: "document",
  icon: FaPizzaSlice,
  liveEdit: false,
  __experimental_actions: [
    "create",
    "update",
    "publish",
    "delete",
  ] /* 'create', 'delete' */,
  fields: [
    {
      name: "name",
      title: "Dish Name",
      type: "string",
      validation: (Rule) => Rule.required().error("missing name"),
    },
    {
      name: "type",
      title: "Dish type",
      type: "string",
      options: {
        list: [
          "Original Pizza",
          "Deep Dish Pizza",
          "Marianna's Junior Hoagie",
          "Frozen Homemade Pasta",
        ],
      },
      validation: (Rule) => Rule.required().error("missing dish type"),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().error("missing description"),
    },
    {
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule) => Rule.required().error("missing price"),
    },
    {
      name: "mainImage",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("missing image"),
    },
  ],
  preview: {
    select: {
      name: "name",
      mainImage: "mainImage",
      price: "price",
      type: "type",
    },
    prepare({ name, mainImage, price, type }) {
      return {
        title: name,
        media: mainImage,
        subtitle: `${type}`,
      };
    },
  },
};
