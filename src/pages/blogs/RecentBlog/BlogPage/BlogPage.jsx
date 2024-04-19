import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import JoinNow from "../../../../components/joinNow/JoinNow";
import BlogData from "../../../../assets/BlogData.json";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect } from "react";
import AllBlogs from "../../allBlogs/AllBlogs";

const BlogPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 700);
  }, [pathname]);

  const { id } = useParams();
  const blogData = BlogData.find((blog) => blog.id == id);
  return (
    <>
      <div className="product-hero-section-main text-white overflow-x-hidden ">
        <div
          className={`bg-cover bg-center bg-no-repeat w-screen h-screen md:h-[750px] xl:h-screen z-[-1]`}
          style={{ backgroundImage: `url('${blogData.image}')` }}
        >
          <div className="product-hero-section-group-one h-[600px]">
            <div className="flex flex-col gap-3 py-8 pl-8 pr-0 md:pr-24 mx-auto rounded-xl w-[80%] md:w-[60%] blogPage_div">
              <button className="text-black w-fit text-sm rounded-full py-1 px-5 bg-[var(--yellow)]">
                {blogData?.date}
              </button>
              <h3 className="text-base leading-6 lg:text-3xl font-semibold lg:leading-10">{blogData?.title}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <div className="w-[90%] md:w-[65%] flex flex-col gap-4">
          {blogData?.BlogData.map((item, index) => {
            switch (item.type) {
              case "heading":
                return (
                  <h3 key={index} className="text-[1.6rem] md:text-[2rem] font-extrabold">
                    {item.content}
                  </h3>
                );
              case "paragraph":
                return (
                  <p key={index} className="text-base text-justify md:text-start">
                    {item.content}
                  </p>
                );
              case "image":
                return (
                  <img
                    key={index}
                    src={item.src}
                    alt=""
                    className="rounded-2xl my-3"
                  />
                );
              case "quote":
                return (
                  <div
                    key={index}
                    className="bg-[#181818] bg-[url(/images/blog/recentPagePartical.png)] bg-contain bg-no-repeat w-full h-[300px] rounded-2xl flex flex-col justify-center text-center items-center text-white px-8 md:px-20 text-base md:text-[1.2rem] leading-10 md:leading-6 my-3"
                  >
                    <img
                      src="/images/blog/quotes.svg"
                      alt=""
                      className="py-2 w-14 h-14"
                    />
                    <p className="text-sm md:text-xl">
                      <q>{item.content}</q>
                    </p>
                  </div>
                );
              case "ceo":
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center gap-2 py-4"
                  >
                    <img
                      src="/images/blog/CeoImage.png"
                      alt=""
                      className="rounded-full w-28"
                    />
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <h5 className="text-xs font-semibold">{item.title}</h5>
                    <div className="flex text-[var(--yellow)] gap-4">
                      <FaLinkedin className="cursor-pointer text-2xl" /> <FaFacebook className="cursor-pointer text-2xl" /> <FaInstagram className="cursor-pointer text-2xl" />
                      <FaSquareXTwitter className="cursor-pointer text-xl" />
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
      <div className="mt-8 md:mt-16">
      <AllBlogs />
      <Link to={"/blogs"} className="w-[300px] h-[60px]  items-center  justify-center mx-auto border-[2px] border-black md:mx-3 py-2 mb-10 font-semibold rounded-full text-center flex md:hidden"> View All </Link>
      </div>
      <JoinNow />
    </>
  );
};

export default BlogPage;
