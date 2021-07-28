import Tabs from "sanity-plugin-tabs"
import {FaTruck} from "react-icons/fa"
import moment from "moment"
import { string } from "prop-types"

export default {
  name: 'event',
  title: 'On the Road Event',
  type: 'document',
  icon: FaTruck,
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
        {name: 'centerEdge', title: 'CenterEdge'},
        {name: 'foxyCart', title: 'FoxyCart'},
        {name: 'seo', title: 'SEO'}
      ],
      fields: [
        {
          fieldset: 'main',
          name: 'name',
          title: 'Event Name',
          type: 'string',
          validation: Rule => Rule.required().error('missing event name')
        },
        {
          fieldset: 'main',
          name: 'foxyCart',
          title: 'Enable FoxyCart?',
          type: 'boolean',
          options: {
            layout: 'checkbox',
          },
          description: 'must set to either on or off. If checked = Event uses FoxyCart store. Unchecked = event uses CenterEdge Store.',
        },
        {
          fieldset: 'main',
          name: 'hideFromCustomers',
          title: 'Hide from customers',
          options: {
            layout: 'checkbox',
          },
          description: 'this option makes the special not show up on the specials listing page for customers. It will still be shown on the hidden page accessible to the DG2GO staff only. Used for placing late orders on events.',
          type: 'boolean'
        },
        {
          fieldset: 'main',
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          validation: Rule => Rule.error('You have to fill out the slug of the page.').required(),
          description: 'Some frontends will require a slug to be set to be able to show the event',
          options: {
            source: 'content.name',
            maxLength: 96
          }
        },
        {
          fieldset: 'main',
          name: 'date',
          title: 'Date',
          type: 'date',
          options: {
            dateFormat: 'ddd Do MMM YYYY',
          },
          validation: Rule => Rule.required().error('missing event date')
        },
        {
          fieldset: 'main',
          name: 'time',
          title: 'Time',
          type: 'string',
          validation: Rule => Rule.required().error('missing time')
        },
        {
          fieldset: 'main',
          name: 'ordersDue',
          title: 'Orders Due',
          type: 'string',
          validation: Rule => Rule.required().error('missing orders due date')
        },
        {
          fieldset: 'main',
          name: 'location',
          title: 'Pick up location',
          type: 'string',
          validation: Rule => Rule.required().error('missing pick up location')
        },
        {
          fieldset: 'centerEdge',
          name: 'storeUrl',
          title: 'CenterEdge Store Link',
          type: 'string',
          validation: Rule => Rule.custom((field, context) => (!context.document.content.foxyCart && (field === undefined || field === 'n/a')) ? "missing centerEdge store link" : true),
        },
        {
          fieldset: 'centerEdge',
          name: 'menu',
          title: 'Menu',
          type: 'barePortableText',
          validation: Rule => Rule.custom((field, context) => (!context.document.content.foxyCart && field === undefined) ? "missing centerEdge menu" : true),
        },
        {
          fieldset: 'foxyCart',
          name: 'menuFoxy',
          title: 'FoxyCart Menu',
          type: 'array',
          of: [
            {type: 'eventMenuItem'}
          ],
          validation: Rule => Rule.custom((field, context) => (context.document.content.foxyCart && field === undefined) ? "missing FoxyCart menu" : true),
        },
        {
          fieldset: 'main',
          name: 'image',
          title: 'Image',
          type: 'bgImage',
          validation: Rule => Rule.required().error('missing image')
        },
        {
          fieldset: 'seo',
          name: 'seo',
          title: 'SEO',
          type: 'seo',
        },
      ]
    },
  ],
  orderings: [
    {
      name: 'eventDateAsc',
      title: 'By Event Date - oldest first',
      by: [
        {
          field: 'content.date',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'eventDateDesc',
      title: 'By Event Date - newest first',
      by: [
        {
          field: 'content.date',
          direction: 'desc'
        }
      ]
    }
  ],
  preview: {
    select: {
      date: 'content.date',
      title: 'content.name',
      image: 'content.image'
    },
    prepare({date, title, image}) {
      const formattedDate = moment(new Date(date)).format('ddd Do MMM')
      return {
        title: title,
        subtitle: formattedDate,
        media: image
      }
    }
  }
}
