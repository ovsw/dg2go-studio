export default {
  name: "button",
  type: "object",
  title: "Button",
  fields: [
    {
      name: "text",
      title: "Button Text",
      type: "string",
      description: "the text on the button",
    },
    {
      name: "url",
      title: "Button Destination URL",
      type: "string",
      description: "where should this button lead to?",
    },
  ],
  preview: {
    select: {
      title: "text",
    },
  },
};
