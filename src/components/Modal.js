import React, { Component } from 'react'
import styled from "styled-components";
import {ProductConsumer} from "../contex";
import {ButtonContainer} from "./Button";
import {Link} from "react-router-dom";

export default class Modal extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value) => {
                        const {modalOpen, closeModal} = value
                        const {img, title, price} = value.modalProduct;
                        
                        if(!modalOpen){
                            return null
                        }
                        else{
                            return(
                            
                            <ModalContainer>
                                <div className ="container">
                                    <div className = "row">
                                        <div id = "modal" className = "col-8 mx-auto col-md-6 col-lg-4 text-center">
                                            <h5>Item added to the cart</h5>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>)
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}

const ModalContainer = styled.div`
`