import Tabs from "sanity-plugin-tabs"
import {FiCalendar} from "react-icons/fi"
import moment from "moment"

export default {
  name: 'meal',
  title: 'Menu',
  type: 'object',
  icon: FiCalendar,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'ddd Do MMM',
      },
      validation: Rule => Rule.required().error('missing date')
    },
    {
      name: 'dish',
      title: 'Dish',
      type: 'reference',
      to: [{type: 'dish'}],
      validation: Rule => Rule.required().error('missing dish')
    }
  ],
  orderings: [
    {
      name: 'menuDate',
      title: 'By Menu Date - oldest first',
      by: [
        {
          field: 'date',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'menuDate',
      title: 'By Menu Date - newest first',
      by: [
        {
          field: 'date',
          direction: 'desc'
        }
      ]
    }
  ],
  preview: {
    select: {
      date: 'date',
      dishName: 'dish.name',
      dishImage: 'dish.mainImage.asset'
    },
    prepare({date,dishName, dishImage}) {
      const formattedDate = moment(new Date(date)).format('ddd Do MMM ')
      return {
        title: formattedDate,
        subtitle: dishName,
        media: dishImage
      }
    }
  }
}
