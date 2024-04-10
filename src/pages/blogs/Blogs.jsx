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
          className={`bg-[url(/images/blog/BannerHeroVideo.png)] bg-cover bg-center bg-no-repeat   w-screen h-[90vh] sm:h-screen xl:h-[70vh] z-[-1]`}
        >
          <div className="hero-section-group-one">
            <div className="">
              <p className="text-3xl text-center">Let’s Check</p>
              <div className="flex">
                <h3 className="hero-section-heading text-center">
                  WHAT’S NEW
                </h3>
                <img src="/gif/blogHeaderGIf.gif" alt="" className="w-20 h-20 rotate-[270deg]" />
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
