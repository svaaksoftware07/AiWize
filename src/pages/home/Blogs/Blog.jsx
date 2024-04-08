const Blog = () => {
  const blogs = [
    {
      image: "/assets/images/home/blogPicture1.png",
      date: "19 April 2024",
      title: "The Toll of High Go-To-Market Costs on Indian Financial Organizations"
    },
    {
      image: "/assets/images/home/blogPicture2.png",
      date: "17 April 2024",
      title: "Empowering Indian Financial Organizationswith Business Rule Engines: Unlocking Agility and Maximizing ROI"
    },
    {
      image: "/assets/images/home/blogPicture3.png",
      date: "12 April 2024",
      title: "Accelerating Innovation: The Power of Low-Code/No-Code Platforms for Indian Financial Organizations"
    },
  ];

  return (
    <div className="flex flex-col py-10 bg-white md:h-screen">
      <div>
        <h1 className="text-center heading_1 pb-6">
          Our Recent Blogs
        </h1>
      </div>
      <div className="hidden md:flex justify-center flex-wrap gap-10 ">
        {blogs.map((blog, index) => (
          <div key={index} className="w-[60%] md:w-[20%] flex flex-col gap-5 h-[410px] relative">
            <img src={blog.image} alt="" />
            <span className="text-gray-500 text-xs py-1 border-b-[1px] border-gray-500">{blog.date}</span>
            <h3 className="font-medium text-lg leading-5">
              {blog.title}
            </h3>
            <button className="bg-[var(--yellow)]  button w-[150px] absolute bottom-0 left-0"> Read More </button>
          </div>
        ))}
      </div>

      <div className="flex md:hidden justify-center flex-wrap gap-10 p-4 ">
          <div className="w-screen  flex flex-col gap-5 h-[410px] relative">
            <img src={blogs[0].image} alt="" />
            <span className="text-gray-500 text-xs py-1 border-b-[1px] border-gray-500 text-center">{blogs[0].date}</span>
            <h3 className="font-medium text-lg leading-5 text-center">
              {blogs[0].title}
            </h3>
            <div className="flex justify-center flex-row items-center ">
            <button className="bg-[var(--yellow)]  button w-[150px] "> Read More </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Blog;
