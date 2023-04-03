import React from 'react'
import Categories from '../components/Categories'
import Menu from '../components/Menu'

const Home = ({ filterItems }) => {
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories filterItems={filterItems} />
                <Menu/>
            </section>
        </main>
    )
}

export default Home