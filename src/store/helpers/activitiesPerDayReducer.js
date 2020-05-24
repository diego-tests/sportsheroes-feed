import { startOfDay, isSameDay } from 'date-fns'

export default function reduceActivitiesPerDay(accumulator, activity) {
  const acc = [...accumulator]
  const date = startOfDay(new Date(activity.date))
  const id = date.toString()
        
  if (!accumulator.length) {
    const day = { 
      date,
      id,
      activities: [activity],
    }
    return [day]
  }

  if (sameDayAsPrevious(acc, date)) {
    acc[acc.length -1].activities.push(activity)
    return acc
  }

  acc.push({
    date,
    id,
    activities: [activity],
  })

  return acc
}
function sameDayAsPrevious(accumulator, date) {
  const lastDayAdded = lastItem(accumulator).date

  return isSameDay(lastDayAdded, date)

}


function lastItem(arr) {
  return arr[arr.length -1]
}