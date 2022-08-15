import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cards = data.map(card => {
        return (
            <Card 
                key={card.title}
                {...card}
            />
        )
    })
    return (
        <div className="wrapper">
            <Header />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}