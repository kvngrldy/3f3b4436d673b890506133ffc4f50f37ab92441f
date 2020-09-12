import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';
import styled from "styled-components"
import Cart from './Cart'

const Card = styled.div`
display: flex;
flex-direction: column;
border-radius: 2%;
box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.2);
margin-bottom: 16px;
background-color: #f1f1f2;
`

const CardImg = styled.div`
height: 200px;
`
const CardInfo = styled.div`
 margin: 8px;
`

const MenuName = styled.div`
font-size: 14px;
  font-weight: 600;
  color: #424749;
`

const Seller = styled.div`
font-size: 12px;
  color: grey;
  margin-bottom: 16px;
  font-weight: 500;
`

const Rating = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
const PriceMenu = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`

const AddToCartButton = styled.button`
    background-color: #f9423a;
    color: white;
    border: none;
    font-weight: 600;
    font-size: 12px;
    padding: 8px 24px;
    border-radius: 5px;
    text-align: center;
    box-sizing: border-box;
`


const MenuCard = () => {
    const [cart, setCart] = useState([])
    function addToCart() {

        let tempCart = []
        let newCart = tempCart.concat(cart)
        newCart.push(Math.floor(Math.random() * 100))
        setCart(newCart)
        console.log(cart)
    }

    return (
        <div>
            <Card>
                <CardImg>
                    <img src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt="Girl in a jacket" />
                </CardImg>
                <CardInfo>
                    <Rating>
                        <div className="rating-value">4.5</div>
                        <div>
                            <StarRatings
                                rating={4.5}
                                starDimension="14px"
                                starSpacing="0px"
                                starRatedColor="rgb(249, 66, 58)"
                            />
                        </div>
                    </Rating>
                    <MenuName>
                        Roasted Chicken with Scrambled Egg
                    </MenuName>
                    <Seller>
                        by Kulina - Uptown Lunch
                     </Seller>
                    <PriceMenu>
                        <div className="info-item-price">
                            Rp 35.000
                        </div>
                        <div className="addToCart">
                            <AddToCartButton onClick={() => addToCart()}>
                                <div className="button-with-icon">
                                    <span>ADD </span>
                                    <span class="atc-icon material-icons md-16">
                                        add
                                    </span>
                                </div>
                            </AddToCartButton>
                        </div>
                    </PriceMenu>
                </CardInfo>
            </Card>
            {cart.length > 0 && <Cart></Cart>}
        </div>
    )
}

export default MenuCard
