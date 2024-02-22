import Banner from "../assets/image/banner.webp";


const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Banner})` }}
      className="h-44 md:h-screen  bg-cover bg-center relative bg-gradient-top"
    >
      <div className=" h-full">
      
        <div className="bg-gray-900/50 absolute p-3 md:p-7 bottom-3 md:bottom-12  left-3 md:left-12 tracking-widest">
          <p className="md:text-4xl  font-bold text-white ">2BHK FLATS IN PUNE</p>
        </div>
      </div>
      
    </div>
  )
}

export default Header