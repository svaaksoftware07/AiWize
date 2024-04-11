import "./style.css";
import { Helmet } from "react-helmet";
import Blog from "../home/Blogs/Blog";
import JoinNow from "../../components/joinNow/JoinNow";
import RecentBlog from "./RecentBlog/RecentBlog";

function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs - AIWIZE LABS</title>
      </Helmet>
      <div className="hero-section-main text-white overflow-x-hidden">
        <div
          className={`bg-[url(/images/blog/BannerHeroVideo.png)]  bg-auto bg-no-repeat w-screen h-[500px] md:h-[500px] sm:h-screen lg:h-[100vh] z-[-1]`}
        >
          <div className="hero-section-group-one">
            <div className="">
              <p className="text-3xl text-center mb-10">Let’s Check</p>
              <div className="flex items-center">
                <h3 className="hero-section-heading text-center">
                  WHAT’S NEW
                </h3>
                <img src="/gif/blogHeaderGIf.gif" alt="" className="w-16 h-16 md:w-28 md:h-28 rotate-[270deg]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecentBlog />
      <Blog />
      <JoinNow />
    </>
  );
}

export default Blogs;
