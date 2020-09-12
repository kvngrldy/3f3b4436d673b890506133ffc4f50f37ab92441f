import React, { useState, useEffect } from 'react'

import moment from 'moment';
import 'moment/locale/id';
import SingleDate from './SingleDate'


const Calendar = () => {
    moment.locale('id')
    const [date, setDate] = useState([])


    useEffect(() => {
        const dateNow = moment().format('YYYY-MM-DD')
        const dateTwoWeeks = moment().add(14, 'd').format('YYYY-MM-DD')
        let temp = []
        let idTemp = 1

        for (let m = moment(dateNow); m.isBefore(dateTwoWeeks); m.add(1, 'days')) {
            let tempid = idTemp
            let obj = {}
            obj.id = tempid
            obj.hari = m.format('ddd')
            obj.tanggal = m.format('DD')
            temp.push(obj);
            idTemp++
        }
        setDate(temp)
    }, []);

 


    return (
        <div className="date-box">
            {date && date.map((daydate, index) => (
                <SingleDate daydate={daydate} key={daydate.id}/>
            ))}

        </div>
    )
}

export default Calendar
