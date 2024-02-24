import React from 'react'
import Overview from '../components/HomeDetails/Overview'
import Map from '../components/HomeDetails/Map'
import Plan from '../components/HomeDetails/Plan'
import Price from '../components/HomeDetails/Price'
import Amenities from '../components/HomeDetails/Amenities'
import PropertieCarousel from '../components/HomeDetails/PropertieCarousel'
import Gallery from '../components/HomeDetails/Gallery'
import { useParams } from 'react-router-dom'
import Homes from '../data/Homes'

const HomesDetailsPage = () => {
  // const {id} =match.params;
  const {id} =useParams()
  const {name,location,price,space,date} = Homes.find(home => home.id === id);
  
  return (
    <div>
      <PropertieCarousel name={name} location={location} price={price} date={date} space={space}/>
      <Overview  />
      <Map />
      <Plan />
      <Price />
      <Amenities />
      <Gallery/>
    </div>
  )
}

export default HomesDetailsPage