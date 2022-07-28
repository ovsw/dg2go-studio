// import Tabs from "sanity-plugin-tabs";
import { GrRestaurant } from "react-icons/gr";
import React from 'react'

export default {
  name: "specialMenuItem",
  title: "Special Menu Item",
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
      name: "hidden",
      type: "boolean",
      title: "Hidden?",
      description: "Turn on to hide this item from this special's menu",
      initialValue: true,
    },
    {
      name: "dish",
      title: "Dish",
      type: "reference",
      to: [{ type: "dishSpecial" }],
      validation: (Rule) => Rule.required().error("missing dish"),
    },
    {
      name: "preOrderDeadline",
      title: "Pre-order Deadline",
      type: "string",
      validation: (Rule) => Rule.required().error("missing pre-order deadline"),
    },
    {
      name: "pickUpDate",
      title: "Pick Up Date",
      type: "string",
      validation: (Rule) => Rule.required().error("missing pick-up date"),
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
      name: "dish.name",
      hidden: "hidden",
      // mainImage: <GrStop />,
      price: "dish.price",
      preOrderDeadline: "preOrderDeadline",
      pickUpDate: "pickUpDate",
    },
    prepare({ name, price, preOrderDeadline, pickUpDate, hidden }) {
      const status = hidden ? "disabled" : "active";
      const EMOJIS = {
        active: '✅',
        disabled: '🚫'
      }
      return {
        title: `${name} - ${price}`,
        // media: mainImage,
        media: <span style={{fontSize: '1.5rem'}}>{status ? EMOJIS[status] : '✅'}</span>,
        subtitle: `PO: ${preOrderDeadline} | PU: ${pickUpDate}`,
      };
    },
  },
};
