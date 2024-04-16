/* eslint-disable react/prop-types */

function ProductItem({data}) {
 
  return (
    <>
      <div className='py-[5rem] px-5 md:px-28 text-center'>
        <div className="flex justify-center flex-col items-center">
        <div className='w-100 md:w-[60%]'>
          <p className='text-[var(--yellow)] font-bold text-[20px] mb-3'>What is <span className=''>{data?.name}<sup>{data?.span2}</sup>{}</span></p>
          <h2 className='mb-3 text-[24px] md:text-[28px] lg:text-[32px] leading-8 md:leading-[50px] lg:leading-[65px] font-bold'>{data?.heading}</h2>
          <p className='text-[14px] leading-[20px] md:leading-[25px] mb-3'>{data?.text}</p>
        </div>
        <div className='w-100 md:w-[40%] p-6 md:p-10'>
          <img src="/images/product/productImage.png" alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem