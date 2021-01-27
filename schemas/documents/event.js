import Tabs from "sanity-plugin-tabs"
import {FaTruck} from "react-icons/fa"
import moment from "moment"

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
          fieldset: 'main',
          name: 'storeUrl',
          title: 'Link to Store Page',
          type: 'string',
          validation: Rule => Rule.required().error('missing store link')
        },
        {
          fieldset: 'main',
          name: 'menu',
          title: 'Menu',
          type: 'barePortableText',
          validation: Rule => Rule.required().error('missing menu')
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
