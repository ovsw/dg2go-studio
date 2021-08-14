import Tabs from "sanity-plugin-tabs";

export default {
  name: "siteHome",
  type: "document",
  liveEdit: false,
  title: "Home Page",
  __experimental_actions: ["update", "create", /* 'delete', */ "publish"],
  fields: [
    {
      name: "content",
      type: "siteHomeTabs",
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Site Home",
      };
    },
  },
};
