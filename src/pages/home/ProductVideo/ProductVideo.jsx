import Aos from "aos";
import { useEffect } from "react";
const ProductVideo = () => {
  // Define an array containing the data for each product video
  const videos = [
    {
      image: "/images/home/videoPicture1.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
      image: "/images/home/videoPicture2.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
      image: "/images/home/videoPicture3.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
  ];

  useEffect(() => {
    Aos.init({
        disable: 'mobile',
        duration: 2000
    })
}, [])

  return (
    <div 
    data-aos="fade-left"
    className="flex flex-col items-center py-6 md:py-10 bg-[#fffbe5] md:h-[650px] xl:h-screen">
      <p className="text-lg">{`What’s `}New in the market</p>
      <h1 className="text-center heading_1 pb-6">
        Explore Our Product Videos
      </h1>
      <div className=" hidden md:flex justify-center gap-10 py-10 ">
        {videos.map((video, index) => (
          <div key={index} className="w-1/4 flex flex-col gap-5 text-start">
            <img src={video.image} alt="" className="rounded-xl" />
            <h3 className="font-medium text-lg leading-5">{video.description}</h3>
            <button className="underline text-left text-base">Read Now</button>
          </div>
        ))}
      </div>
      <div className="flex justify-center px-3 md:hidden">
        <div className="w-screen flex flex-col text-start px-3">
          <img src={videos[0].image} alt="" className="rounded-xl mb-3" />
          <h3 className="font-medium text-lg leading-5 mb-3">{videos[0].description}</h3>
          <div className="flex justify-between md:hidden mb-5">
            <button className="underline text-left text-base">Read Now</button>
            <button className="bg-[#FFDA14] button w-[150px] d">
              Watch All Videos
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <button className="bg-[#FFDA14] button w-[250px] ">
          Watch All Videos
        </button>
      </div>
    </div>
  );
};

export default ProductVideo;
