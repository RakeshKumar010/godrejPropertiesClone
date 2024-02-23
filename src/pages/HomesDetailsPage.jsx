import React from 'react'
import Overview from '../components/HomeDetails/Overview'
import Map from '../components/HomeDetails/Map'
import Plan from '../components/HomeDetails/Plan'
import Price from '../components/HomeDetails/Price'
import Amenities from '../components/HomeDetails/Amenities'
import PropertieCarousel from '../components/HomeDetails/PropertieCarousel'

const HomesDetailsPage = () => {
  
  return (
    <div>
      {/* <Carousel/> */}
      <PropertieCarousel/>
      <Overview/>
      <Map/>
      <Plan/>
      <Price/>
      <Amenities/>
    </div>
  )
}

export default HomesDetailsPage