import React, { useState, useEffect } from 'react'
import moment from 'moment';
import 'moment/locale/id';

const Calendar = () => {
    moment.locale('id')
    const [date, setDate] = useState([])


    useEffect(() => {
        const dateNow = moment().format('YYYY-MM-DD')
        const dateTwoWeeks = moment().add(14, 'd').format('YYYY-MM-DD')
        let temp = []

        for (let m = moment(dateNow); m.isBefore(dateTwoWeeks); m.add(1, 'days')) {
            let obj = {}
            obj.hari = m.format('ddd')
            obj.tanggal = m.format('DD')
            temp.push(obj);
        }
        setDate(temp)
    }, []);

    console.log(date)



    return (
        <div className="date-picker">
            {date && date.map(daydate => (
                <div className="day-date">
                    <div className="day">
                        {daydate.hari}
                </div>
                    <div className="date">
                        {daydate.tanggal}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Calendar
