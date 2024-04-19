import "./product.css";
import "./product2.css";
import { scrolled } from "../../utility/GlobalFunction";
import { useEffect, useState } from "react";

function ProductHero({ data }) {
  const [imageSrc, setImageSrc] = useState(null);
  const deviceSize = window.screen.width;

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = data?.bannerImage;
    imageLoader.onload = () => {
      if (deviceSize < 768) {
        setImageSrc(data?.bannerImage2);
      } else {
        setImageSrc(data?.bannerImage);
      }
    };
    return () => {
      imageLoader.onload = null;
    };
  }, [data, deviceSize]);

  // alert(imageSrc)
  return (
    <div key={imageSrc} style={{ backgroundImage: `url(${imageSrc})` }}
      className="product2-hero-section-main text-white overflow-hidden  bg-cover bg-no-repeat" >
      <div className="product2-hero-background-color">
        <div className='product2-hero-section-group'>
          <div className='product2-hero-sectio-one'>

            <div className='product2-hero-section-tagline'>
              <p className='bg-[#262626]'><img src='/images/successIcon.png' alt='' className='mx-2' /><i className='pr-3'>{data.tagline}</i></p>
            </div>

            <div className="product2-hero-section-content">
              <div className='product2-hero-section-inner-one-text'>
                <p>{data.leftText1}</p>
                <p>{data.leftText2}</p>
              </div>
              <div className='product2-hero-middle-arrow'>
                <img src="/gif/home/arrowGIF.gif" className='h-14 md:rotate-90' alt="" />
              </div>

              <div className="product2-hero-section-inner-two-text">
                <div className="product2-hero-floating">
                  <div className='product2-hero-floating-heading'>
                    {/* <img src="/images/RADM.png" alt="" /> */}
                    <h1 className='product1-hero-section-heading'>{data.name}<span className='mx-2'>{data?.span}</span></h1>
                  </div>
                  <div className='product2-hero-floating-text'>
                    <p>{data.description}<sup>{data.span2}</sup>{data.description2}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='product2-hero-section-one-button'>
              <span onClick={scrolled}>{data.button}</span>
            </div>
          </div>
          {/* <div className='product2-hero-section-group-two-inner-two-button mb-5'><span className=' w-fit px-4 md:w-[350px] bg-[var(--yellow)] button md:h-12  text-black' onClick={scrolled}>Explore Now</span></div> */}
        </div>
      </div>
    </div>
    // <div className="product2-hero-section-main text-white overflow-hidden">
    //   <div key={imageSrc} style={{ backgroundImage: `url(${imageSrc})` }}
    //     className={`w-screen h-screen bg-no-repeat bg-cover md:h-auto sm:h-screen xl:h-screen z-[-1]`}>
    //     <div className="product2-hero-section-group-one">
    //       <div className="product2-hero-section-tagline mt-5">
    //         <p className="bg-[#262626]">
    //           <img src="/images/successIcon.png" alt="" className="mx-2" />
    //           <i className="pr-3">{data.tagline}</i>
    //         </p>
    //       </div>

    //       <div className="product2-hero-section-group-two">
    //         <div className="product2-hero-section-group-two-inner-one mb-8">
    //           <div className="product2-hero-section-group-two-inner-one-text">
    //             <p>{data.leftText1}</p>
    //             <p>{data.leftText2}</p>
    //           </div>
    //           <div className="product2-hero-section-group-two-inner-one-button">
    //             <span
    //               className=" w-[100px] md:w-[200px] bg-[var(--yellow)] button md:h-12  text-black"
    //               onClick={scrolled}
    //             >
    //               {data.button}
    //             </span>
    //           </div>
    //         </div>

    //         <div className="w-24 md:w-[4%] ">
    //           <img
    //             src="gif/home/arrowGIF.gif"
    //             className="h-14 md:rotate-90"
    //             alt=""
    //           />
    //         </div>

    //         <div className="md:p-10 w-screen md:w-[48%] flex items-center justify-center">
    //           <div className="my-8 md:mt-10">
    //             <div className="">
    //               {/* <img src="assets/images/RADM.png" alt="" /> */}

    //               <h1 className="product2-hero-section-heading">
    //                 {data.name}
    //                 <span className="text-[40px] md:text-[64px] absolute top-[-10px] md:top-[-50px] mx-2">
    //                   {data?.span}
    //                 </span>
    //               </h1>
    //             </div>
    //             <div className="product2-hero-section-text">
    //               <p>{data.rightText}</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="product2-hero-section-group-two-inner-two-button mb-5 ">
    //           <span
    //             className=" m-0 w-fit px-4 md:w-[200px] bg-[var(--yellow)] button md:h-12  text-black"
    //             onClick={scrolled}
    //           >
    //             {data.button}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductHero;
