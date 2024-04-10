// import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const RecentBlog = () => {
    // const [index, setIndex] = useState(0)
  
    // const nexthandler = () => {
    //   if (index < products.length - 1) {
    //     setIndex(index + 1);
    //   }
    // }
  
    // const backhandler = () => {
    //   if (index >= 1) {
    //     setIndex(index - 1);
    //   }
    // };
  return (

    <div className="flex flex-col justify-center items-center min-h-screen BlogGradient">
          <div className="w-full flex justify-center text-4xl lg:text-5xl font-bold bg-white py-8">
            Our Recent <span className="text-yellow-500 mx-2"> BLOGS</span>
          </div>
        <div className="flex flex-col justify-center items-center w-11/12 lg:w-3/4 lg:px-10 lg:pb-10 h-full bg-yellow-500  shadow-lg">
          <div className="flex flex-col md:flex-row justify-center items-start w-full h-auto">
            <div className="w-full lg:w-1/2 bg-white text-black p-8 lg:p-10 flex flex-col text-center md:text-left items-center md:items-start ">
              <h3 className="text-xl lg:text-2xl font-semibold"> The Toll of High Go-To-Market Costs on Indian Financial Organizations </h3>
              <p className="text-base lg:text-sm my-2"> In the dynamic landscape of Indian finance, where innovation and technological advancement are paramount, the race to market with cutting-edge products and services has never been more intense. </p>
              <button className="button bg-black text-yellow-500 text-xs w-48 py-2 lg:py-3 my-3"> Read Now    </button>
            </div>
            <img src="/images/home/blogPicture1.png" alt="" className="w-full hidden md:block lg:w-1/2 h-auto lg:h-5/6"
            />
          </div>
          {/* <div className="product-next product-card-arrow" >
              <MdNavigateBefore />
            </div>
            <div className="product-back product-card-arrow">
              <MdNavigateNext />
            </div> */}
        </div>

      </div>
  )
}

export default RecentBlog
