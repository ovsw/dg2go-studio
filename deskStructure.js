import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdHome } from "react-icons/md"
import { MdPerson } from "react-icons/md"
import { GiPizzaCutter } from "react-icons/gi"
import {FaRegStar, FaRegCalendarAlt, FaTruck} from "react-icons/fa"


const hiddenDocTypes = listItem =>
  !['siteSettings', 'menuItem', 'menuPizzaShop', 'dish', 'dishPizzaShop', 'page', 'event', 'special', 'dishSpecial', 'specials', 'siteHome', 'menuMeals', 'events'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .icon(MdHome)
        .child(
          S.editor()
            .id('siteHome')
            .schemaType('siteHome')
            .documentId('siteHome')
        ),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Pizza Shop Menu Page')
        .icon(GiPizzaCutter)
        .child(
          S.editor()
            .id('menuPizzaShop')
            .schemaType('menuPizzaShop')
            .documentId('menuPizzaShop')
        ),
      S.listItem()
        .title('Pizza Shop Dishes')
        .schemaType('dishPizzaShop')
        .child(S.documentTypeList('dishPizzaShop').title('Pizza Shop Dishes')),
      S.divider(),
      S.listItem()
        .title('Meals Menu Page')
        .icon(FaRegCalendarAlt)
        .child(
          S.editor()
            .id('menuMeals')
            .schemaType('menuMeals')
            .documentId('menuMeals')
        ),
      S.listItem()
        .title('Meal Dishes')
        .schemaType('dish')
        .child(S.documentTypeList('dish').title('Meal Dishes')),
      S.divider(),
      S.listItem()
        .title('On the Road Page')
        .icon(FaTruck)
        .child(
          S.editor()
            .id('events')
            .schemaType('events')
            .documentId('events')
        ),
      S.listItem()
        .title('On the Road Events')
        .schemaType('event')
        .child(S.documentTypeList('event').title('On the Road Events')),
      S.divider(),
      S.listItem()
        .title('Specials Page')
        .icon(FaRegStar)
        .child(
          S.editor()
            .id('specials')
            .schemaType('specials')
            .documentId('specials')
        ),
      S.listItem()
        .title('Specials List')
        .schemaType('special')
        .child(S.documentTypeList('special').title('Specials List')),
      S.listItem()
        .title('Special Dishes')
        .schemaType('dishSpecial')
        .child(S.documentTypeList('dishSpecial').title('Specials - Dishes')),
      S.divider(),
      S.listItem()
        .title('Misc Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Misc Pages')),
      // S.listItem()
      //   .title('Blog posts')
      //   .schemaType('post')
      //   .child(S.documentTypeList('post').title('Blog posts')),
      // S.listItem()
      //   .title('Authors')
      //   .icon(MdPerson)
      //   .schemaType('author')
      //   .child(S.documentTypeList('author').title('Authors')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      // ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
