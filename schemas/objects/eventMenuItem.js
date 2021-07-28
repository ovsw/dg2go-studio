import Tabs from "sanity-plugin-tabs";
import { GrRestaurant } from "react-icons/gr";

export default {
  name: "eventMenuItem",
  title: "On The Road Event Menu Item",
  type: "object",
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
      name: "dish",
      title: "Dish",
      type: "reference",
      to: [{ type: "dishEvent" }],
      validation: (Rule) => Rule.required().error("missing dish"),
    },
    // {
    //   name: 'preOrderDeadline',
    //   title: 'Pre-order Deadline',
    //   type: 'string',
    //   validation: Rule => Rule.required().error('missing pre-order deadline')
    // },
    // {
    //   name: 'pickUpDate',
    //   title: 'Pick Up Date',
    //   type: 'string',
    //   validation: Rule => Rule.required().error('missing pick-up date')
    // },
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
      name: "dish.name",
      // mainImage: 'mainImage',
      price: "dish.price",
      preOrderDeadline: "preOrderDeadline",
      pickUpDate: "pickUpDate",
    },
    prepare({ name, price, preOrderDeadline, pickUpDate }) {
      return {
        title: `${name} - ${price}`,
        // media: mainImage,
        subtitle: `PO: ${preOrderDeadline} | PU: ${pickUpDate}`,
      };
    },
  },
};
