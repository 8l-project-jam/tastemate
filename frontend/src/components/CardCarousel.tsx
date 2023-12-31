import React, { useState } from 'react'
import RestaurantCard from '@/components/RestaurantCard'
import { Restaurant } from '@/types'

interface CardCarouselProps {
  restaurants: Restaurant[]
  addLikedRestaurant(): any
}

export default function CardCarousel({
  restaurants = [],
  addLikedRestaurant,
}: CardCarouselProps) {
  const [dummyStatus, setDummyStatus] = useState<string>('none')

  const handleButtonClick = (buttonType: string) => {
    setDummyStatus(`${buttonType} button clicked`)
  }

  if (restaurants.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1 style={{ background: 'white', color: 'black' }}>
        Button status: {dummyStatus}
      </h1>
      <RestaurantCard
        restaurant={restaurants[0]}
        onAcceptButtonClick={() => addLikedRestaurant(restaurants[0])}
        onDeclineButtonClick={() => handleButtonClick('decline')}
      />
    </div>
  )
}
