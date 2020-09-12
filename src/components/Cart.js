import React from 'react'
import styled from "styled-components"

const CartComponent = styled.div `
position: fixed;
  bottom: 0;
  width: 94%;
  margin-left: -4px;
  margin-right: 200px;
  z-index: 1;
`

const CartContainer = styled.div `
background-color: #a23530;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

border-radius: 5px;
`

const CartInfo = styled.div `
margin: 8px;
color: white;
`

const PriceCart = styled.div `
color: white;
  font-weight: 700;
  font-size: 14px;
`

const Ongkir = styled.div `
font-size: 12px;

`

const CartIcon = styled.div`
margin: 8px;
  color: white;
`

const TransparentBox = styled.div `
height: 16px;
background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0),
#ffffff);
`

const Cart = () => {
    return (
        <CartComponent>
            <CartContainer>
                <CartInfo>
                    <PriceCart>
                        5 Items | Rp 125.000
                    </PriceCart>
                    <Ongkir>
                        Termasuk ongkos kirim
                    </Ongkir>
                </CartInfo>
                <CartIcon>
                    <span class="material-icons md-24">
                        shopping_cart
                    </span>
                    <span class="material-icons">
                        keyboard_arrow_right
                    </span>
                </CartIcon>
            </CartContainer>
            <TransparentBox />
            
        </CartComponent>
    )
}

export default Cart
