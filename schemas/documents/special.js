import Tabs from "sanity-plugin-tabs"
import { BiDish } from "react-icons/bi"
import moment from "moment"

export default {
  name: 'special',
  title: 'Special',
  type: 'document',
  icon: BiDish,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'content',
      type: 'object',
      title: 'Content',
      inputComponent: Tabs,
      fieldsets: [
        {name: 'main', title: 'Main'},
        {name: 'seo', title: 'SEO'}
      ],
      fields: [
        {
          fieldset: 'main',
          name: 'name',
          type: 'string',
          title: 'Special\'s Name',
          validation: Rule => Rule.required().error('missing name')
        },
        {
          fieldset: 'main',
          name: 'date',
          title: 'Pick-up Date',
          type: 'date',
          options: {
            dateFormat: 'ddd Do MMM',
          },
          validation: Rule => Rule.required().error('missing date')
        },
        {
          fieldset: 'main',
          name: 'hideFromCustomers',
          title: 'Hide from customers',
          description: 'this option makes the special not show up on the specials listing page for customers. It will still be shown on the hidden page accessible to the DG2GO staff only. Used for placing late orders on specials.',
          type: 'boolean'
        },
        {
          fieldset: 'main',
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          validation: Rule => Rule.error('You have to fill out the slug of the page.').required(),
          description: 'Some frontends will require a slug to be set to be able to show the post',
          options: {
            source: 'content.name',
            maxLength: 96
          }
        },
        {
          fieldset: 'main',
          name: 'image',
          type: 'bgImage',
          title: 'Main image',
          validation: Rule => Rule.required().error('missing image')
        },
        {
          fieldset: 'main',
          name: 'shortDescription',
          type: 'string',
          title: 'Short Description',
          validation: Rule => Rule.required().error('missing description')
        },
        {
          fieldset: 'main',
          name: 'description',
          type: 'basicPortableText',
          title: 'Full Description',
          validation: Rule => Rule.required().error('missing description')
        },
        {
          fieldset: 'main',
          name: 'storeUrl',
          type: 'string',
          title: 'Link to Store',
          description: '(optional) leave empty to not show an "Order" button on the page - NOTE: without this visitors will be unable to order the special!'
        },
        {
          fieldset: 'main',
          name: 'storeComingSoon',
          type: 'string',
          title: 'Coming Soon Text',
          description: 'if you left the store link empty (no link to order) then enter some text below, saying when it will be available.'
        },
        {
          fieldset: 'main',
          name: 'dishes',
          title: 'Special\'s Dishes',
          description: 'you can edit each item\s price, pre-order and pick-up dates and times by editing the item. You can edit an item by clicking on the "link" icon below, or by fiding it in the "Special Dishes" section of the main menu',
          type: 'array',
          of: [
            {
              type: 'specialMenuItem'
            }
          ],
          validation: Rule => [
            Rule.min(1).error('must have at least one dish'),
            Rule.unique().error('no duplicate dishes')
          ]
        },
        {
          fieldset: 'seo',
          name: 'seo',
          title: 'SEO Title',
          type: 'seo',
        },
      ],
    }
  ],
  // orderings: [
  //   {
  //     name: 'menuDate',
  //     title: 'By Menu Date - oldest first',
  //     by: [
  //       {
  //         field: 'date',
  //         direction: 'asc'
  //       }
  //     ]
  //   },
  //   {
  //     name: 'menuDate',
  //     title: 'By Menu Date - newest first',
  //     by: [
  //       {
  //         field: 'date',
  //         direction: 'desc'
  //       }
  //     ]
  //   }
  // ],
  preview: {
    select: {
      name: 'content.name',
      hideFromCustomers: 'content.hideFromCustomers',
      media: 'content.image'
    },
    prepare({name, hideFromCustomers, media}) {

      const subtitle = hideFromCustomers ? 'HIDDEN' : ''

      return {
        title: name,
        subtitle: subtitle,
        media
      }
    }
  }
}
