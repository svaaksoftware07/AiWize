
function ProductItem({ data }) {

  return (
    <>
      <div className='py-[5rem] px-2 xl:px-10 text-center'>
        <div className="flex justify-center flex-col items-center">
          <div className='w-100 md:w-[80%]'>
            <p className='text-[var(--yellow)] font-black text-[22px] md:text-[30px] mb-3'>What is <span className=''>{data?.name}<sup>{data?.span2}</sup></span></p>
            <h2 className='text-3xl font-black mb-5 md:mb-10 md:text-[50px] leading-10 sm:leading-[55px] md:leading-[65px] lg:px-28'>{data?.heading}</h2>
            <p className='text-[20px] xl:text-[23px] leading-[28px] xl:leading-[30px] mb-3'>{data?.text}</p>
          </div>
          <div className='w-100 md:w-[40%] p-6 md:p-10'>
            <img src={data.productImage} alt="" />
          </div>

          {/* <div className='w-100 md:w-[40%] p-6 md:p-10'>
            <video loop autoPlay controls={false} >
              <source src="./video/product/product1.mp4" />
            </video>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ProductItem