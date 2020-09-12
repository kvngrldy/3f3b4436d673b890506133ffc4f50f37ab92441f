import React from 'react'
import styled from "styled-components"

const DayDate = styled.div `
margin: 4px 4px;
border-radius: 50%;
`

const DateContainer = styled.div `
cursor: pointer;
width: 40px;
height: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Day = styled.div `
font-size: 8px;
color: ${props => props.weekend ? '#f1f1f2' : '#424749'};
`

const Date = styled.div `
font-size: 14px;
font-weight: 700;
margin-top: -2px;
color: ${props => props.weekend ? '#f1f1f2' : '#424749'};
`

const SingleDate = ({ daydate}) => {
    
   
   
    return (
        <DayDate>
            {daydate && <DateContainer>
                <Day weekend={daydate.hari == 'Min' || daydate.hari == 'Sab'}>
                {daydate.hari.toUpperCase()}
            </Day>
                <Date weekend={daydate.hari == 'Min' || daydate.hari == 'Sab'}>
                    {daydate.tanggal}
                </Date> </DateContainer>}
        </DayDate>
    )
}

export default SingleDate
