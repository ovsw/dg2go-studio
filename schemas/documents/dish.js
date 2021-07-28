import Tabs from "sanity-plugin-tabs";
import { GrRestaurant } from "react-icons/gr";

export default {
  name: "dish",
  title: "Dish",
  type: "document",
  icon: GrRestaurant,
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
      name: "dishId",
      title: "ID",
      type: "slug",
      description:
        "only capital letters and dashes, eg. for meatball spaghetti: SPG-MTB. ",
      validation: (Rule) =>
        Rule.custom((prodId) => {
          if (typeof prodId === "undefined") {
            return "missing ID";
          } else if (prodId.current === "") {
            return "missing ID";
          }
          const regex = /^[A-Z-]+$/; // Regex pattern goes here
          if (regex.test(prodId.current)) {
            return true;
          } else {
            return "Not a valid id: only capital letters and dashes"; // Error message goes here
          }
        }),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().error("missing description"),
    },
    {
      name: "price",
      title: "Price ($)",
      type: "number",
      precision: 2,
      validation: (Rule) => Rule.required().error("missing price"),
    },
    // {
    //   name: 'mainImage',
    //   type: 'image',
    //   title: 'Image',
    //   options: {
    //     hotspot: true
    //   },
    //   validation: Rule => Rule.required().error('missing image')
    // }
  ],
  preview: {
    select: {
      name: "name",
      // mainImage: 'mainImage',
      price: "price",
    },
    prepare({ name, price }) {
      return {
        title: name,
        // media: mainImage,
        subtitle: `$${price}`,
      };
    },
  },
};
