import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../contex";

export default class componentName extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">

                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`

`