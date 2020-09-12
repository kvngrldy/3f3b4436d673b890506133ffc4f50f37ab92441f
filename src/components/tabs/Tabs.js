import React, {useState} from 'react'
import styled from "styled-components"

const TabsLunchDinner = styled.div `
margin-top: 8px;
margin-left: 16px;
  margin-right: 16px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border-radius: 5px;
  
  overflow: hidden;
`

const Tab = styled.div `

  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  
  ${({ active }) => active === false && `
  border: solid 2px #f1f1f2;
`}

  ${({ active }) => active && `
  background-color: #424749;
`}

  cursor: pointer;
`
const TabsFont = styled.div `

font-size: 14px;
  padding-top: 4px;
  padding-bottom: 4px;
    font-weight: 500;
  color: ${props => props.active ? 'white' : '#6e7679'};
`

const Tabs = () => {
const [lunch, setLunch] = useState(true)
const [dinner, setDinner] = useState(false)

const handleLunch = () => {
    setLunch(true)
    setDinner(false)
}

const handleDinner = () => {
    setDinner(true)
    setLunch(false)
}

    return (
        <TabsLunchDinner>
            <Tab active={lunch} onClick={() => handleLunch()}>
                <TabsFont active={lunch}>
                    Lunch
                </TabsFont>
            </Tab>
            <Tab active={dinner} dinner onClick={() => handleDinner()}>
                <TabsFont active={dinner}>
                    Dinner
                </TabsFont>    
            </Tab>
            
        </TabsLunchDinner>

    )
}

export default Tabs
