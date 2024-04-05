const ProductVideo = () => {
  // Define an array containing the data for each product video
  const videos = [
    {
      image: "/assets/images/home/videoPicture1.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
      image: "/assets/images/home/videoPicture2.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
      image: "/assets/images/home/videoPicture3.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
  ];

  return (
    <div className="flex flex-col items-center py-6 bg-[#fffbe5] h-screen">
      <p className="text-lg">{`What’s `}New in the market</p>
      <h1 className="text-center heading_1 pb-6">
        Explore Our Product Videos
      </h1>
      <div className="flex justify-center gap-10 py-10 ">
        {videos.map((video, index) => (
          <div key={index} className="w-1/4 flex flex-col gap-5 text-start">
            <img src={video.image} alt="" className="rounded-xl" />
            <h3 className="font-medium text-lg leading-5">{video.description}</h3>
            <button className="underline text-left text-base">Read Now</button>
          </div>
        ))}
      </div>
      <button className="bg-[#FFDA14] button w-[250px]">
        Watch All Videos
      </button>
    </div>
  );
};

export default ProductVideo;
