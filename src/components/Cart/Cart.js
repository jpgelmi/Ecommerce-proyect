import React, { Component } from 'react'
import Title from "../Title";
import CardColumns from "./Cart"

export default class Cart extends Component {
    render() {
        return (
            <section>
                <Title name = "your" title = "cart"/>
                <CardColumns />
            </section>
        )
    }
}
 