import React from 'react'
import Carousel from '../components/HomeDetails/Carousel'
import Overview from '../components/HomeDetails/Overview'
import Map from '../components/HomeDetails/Map'
import Plan from '../components/HomeDetails/Plan'
import Price from '../components/HomeDetails/Price'
import Amenities from '../components/HomeDetails/Amenities'

const HomesDetailsPage = () => {
  
  return (
    <div>
      <Carousel/>
      <Overview/>
      <Map/>
      <Plan/>
      <Price/>
      <Amenities/>
    </div>
  )
}

export default HomesDetailsPage