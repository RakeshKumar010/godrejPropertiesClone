import React from 'react'
import Overview from '../components/HomeDetails/Overview'
import Map from '../components/HomeDetails/Map'
import Plan from '../components/HomeDetails/Plan'
import Price from '../components/HomeDetails/Price'
import Amenities from '../components/HomeDetails/Amenities'
import PropertieCarousel from '../components/HomeDetails/PropertieCarousel'
import Gallery from '../components/HomeDetails/Gallery'

const HomesDetailsPage = () => {

  
  return (
    <div>
 
      <PropertieCarousel/>
      <Overview />
      <Map />
      <Plan />
      <Price />
      <Amenities />
      <Gallery/>
    </div>
  )
}

export default HomesDetailsPage