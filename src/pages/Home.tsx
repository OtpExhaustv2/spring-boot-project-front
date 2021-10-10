import React from 'react';
import Card from "../shared/Card";

const Home = () => {
    return (
        <main className="home">
            <h3>Écoutés récemment</h3>
            <div className="cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </main>
    );
};

export default Home;
