// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import dish from "./documents/dish";
import dishEvent from "./documents/dishEvent";
import dishPizzaShop from "./documents/dishPizzaShop";
import dishSpecial from "./documents/dishSpecial";
import event from "./documents/event";
import events from "./documents/events";
import faqItem from "./documents/faqItem";
import faqCategory from "./documents/faqCategory";
import page from "./documents/page";
import menuPizzaShop from "./documents/menuPizzaShop";
import menuMeals from "./documents/menuMeals";
import reusableSection from "./documents/reusableSection";
import siteHome from "./documents/siteHome";
import special from "./documents/special";
import specials from "./documents/specials";
import siteSettings from "./documents/siteSettings";

// object types
import barePortableText from "./objects/barePortableText";
import basicPortableText from "./objects/basicPortableText";
import bgImage from "./objects/bgImage";
import bodyPortableText from "./objects/bodyPortableText";
import button from "./objects/button";
import card from "./objects/card";
import eventMenuItem from "./objects/eventMenuItem";
import hero from "./objects/hero";
import iframeEmbed from "./objects/iframeEmbed";
import mainImage from "./objects/mainImage";
import meal from "./objects/meal";
import specialMenuItem from "./objects/specialMenuItem";
import youtube from "./objects/youtube";

// Tabs
import eventTabs from "./tabs/eventTabs";
import eventsTabs from "./tabs/eventsTabs";
import menuMealsTabs from "./tabs/menuMealsTabs";
import menuPizzaShopTabs from "./tabs/menuPizzaShopTabs";
import pageTabs from "./tabs/pageTabs";
import siteHomeTabs from "./tabs/siteHomeTabs";
import specialTabs from "./tabs/specialTabs";
import specialsTabs from "./tabs/specialsTabs";
import seo from "./tabs/seo";

// sections
// import cardSection from "./objects/sections/cardSection";
import ctaSection from "./objects/sections/cta";
// import faqSection from "./objects/sections/faqSection";
import magSection from "./objects/sections/magazine";
import reusedSection from "./objects/sections/reusedSection";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // objects,
    barePortableText,
    basicPortableText,
    bgImage,
    bodyPortableText,
    button,
    card,
    eventMenuItem,
    hero,
    iframeEmbed,
    mainImage,
    meal,
    specialMenuItem,
    youtube,
    // tabs
    seo,
    eventTabs,
    eventsTabs,
    menuMealsTabs,
    menuPizzaShopTabs,
    pageTabs,
    siteHomeTabs,
    specialTabs,
    specialsTabs,
    // documents
    dish,
    dishEvent,
    dishPizzaShop,
    dishSpecial,
    event,
    events,
    faqItem,
    faqCategory,
    menuPizzaShop,
    menuMeals,
    page,
    reusableSection,
    siteHome,
    special,
    specials,
    siteSettings,
    // sections
    // cardSection,
    ctaSection,
    // faqSection,
    magSection,
    reusedSection,
  ]),
});
