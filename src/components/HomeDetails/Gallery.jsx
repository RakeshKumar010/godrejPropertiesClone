import { useContext } from "react";
import { MyContext } from "../../App";


const Gallery = ({ slider }) => {
  const { gallery } = useContext(MyContext);

  return (
    <div className="md:p-10 my-10 " ref={gallery}>
      <div className="flex flex-col pb-10 items-center gap-4 justify-center">
        <p className="text-lg  font-semibold md:font-bold  text-nowrap uppercase">
          GALLERY
        </p>
      <p className="text-center  text-2xl font-thin">A blissful, idyllic lifestyle to perfectly complement your jam-packed, rushed urban life.</p>
      </div>
      <div className="m-6 flex flex-wrap gap-y-6 justify-evenly">
        {slider.map((value,index) => {
          return <img src={value} alt="" className={`rounded-md shadow-md shadow-black ${slider.length<2?"w-[500px]":"w-[420px]"}`} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
