import React from "react";
import Overview from "../components/HomeDetails/Overview";
import Map from "../components/HomeDetails/Map";
import Plan from "../components/HomeDetails/Plan";
import Price from "../components/HomeDetails/Price";
import Amenities from "../components/HomeDetails/Amenities";
import PropertieCarousel from "../components/HomeDetails/PropertieCarousel";
import Gallery from "../components/HomeDetails/Gallery";
import { useParams } from "react-router-dom";
import Homes from "../data/Homes";
import FooterContact from "../components/FooterContact";
import YouMayLike from "../components/HomeDetails/YouMayLike";
import Download from "../components/HomeDetails/Download";

const HomesDetailsPage = () => {
  // const {id} =match.params;
  const { id } = useParams();
  const {
    name,
    location,
    price,
    space,
    date,
    ovtext,
    ovimg,
    planimg,
    map,
    mapad,
    maptext,
    bhk1,
    bhk2,
    bhk3,
    floorplan1,
    floorplan2,
    floorplan3,
    unitplan1,
    unitplan2,
    unitplan3,
    slider,
  } = Homes.find((home) => home.id === id);

  return (
    <div className="relative">
      <PropertieCarousel
        name={name}
        location={location}
        price={price}
        date={date}
        space={space}
        slider={slider}
      />
      <Overview ovtext={ovtext} ovimg={ovimg} />
      <Map map={map} mapad={mapad} maptext={maptext} />
      <Plan
        planimg={planimg}
        floorplan={{ floorplan1, floorplan2, floorplan3 }}
        unitplan={{ unitplan1, unitplan2, unitplan3 }}
      />
      <Price bhk1={bhk1} bhk2={bhk2} bhk3={bhk3} />
      <Amenities />
      <Gallery slider={slider} />
      <Download />
      <YouMayLike id={id} />

      <FooterContact     name={name}/>
    </div>
  );
};

export default HomesDetailsPage;
