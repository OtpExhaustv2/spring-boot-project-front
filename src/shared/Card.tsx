import React from 'react';

const Card = () => {
    return (
        <article className="card">
            <div className="cover">
                <div className="pb-wrapper">
                    <button className="play-button">
                        <i className="fas fa-play play"/>
                    </button>
                </div>
                <img src="https://via.placeholder.com/150" alt="" className="thumbnail"/>
            </div>
            <div className="description">
                <h1 className="pl-name">Global Top 50</h1>
                <p className="pl-about">Your daily update of the most played tracks right now.</p>
            </div>
        </article>
    );
};

export default Card;
