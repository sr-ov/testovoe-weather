import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import calendar from 'dayjs/plugin/calendar'

dayjs.locale('ru')
dayjs.extend(calendar)

export const normalizeDate = (date: string) => {
    return dayjs(date).calendar(null, {
        sameDay: '[сегодня]', // The same day ( Today at 2:30 AM )
        nextDay: '[завтра]', // The next day ( Tomorrow at 2:30 AM )
        nextWeek: 'DD MMMM', // The next week ( Sunday at 2:30 AM )
        sameElse: 'DD MMMM', // Everything else ( 17/10/2011 )
    })
}
