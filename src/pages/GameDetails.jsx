import React from 'react'
import HeaderFive from '../components/header/HeaderFive'
import GameDetailsBanner from '../components/game-details/GameDetailsBanner'
import HomeSevenPricing from '../components/home-seven/HomeSevenPricing'
import HomeSevenPopularGame from '../components/home-seven/HomeSevenPopularGame'
import HomeSevenFooter from '../components/footer/HomeSevenFooter'
function GameDetails() {
    
    return (
        <div className='template-game template-game-details'>
            <HeaderFive />
            <GameDetailsBanner />
            <HomeSevenPricing />
            <HomeSevenPopularGame />
            <HomeSevenFooter />
        </div>
    )
}

export default GameDetails