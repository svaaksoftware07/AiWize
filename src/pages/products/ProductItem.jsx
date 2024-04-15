import React from 'react'

function ProductItem({data}) {
 console.log(data);
 
  return (
    <>
      <div className='py-[5rem] px-5 md:px-28 '>
        <div className="flex  justify-center flex-col md:flex-row items-center">
        <div className='w-100 md:w-[60%]'>
          <p className='text-[var(--yellow)] text-[20px] md:text-[24px] text-center md:text-start mb-3'>What is <span className=''>{data?.name}<sup>{data?.span2}</sup>{}</span></p>
          <h2 className='text-center md:text-start mb-3 text-[24px] md:text-[40px] lg:text-[50px] leading-8 md:leading-[50px] lg:leading-[65px] font-semibold'>{data?.heading}</h2>
          <p className='text-center text-[14px] md:text-[16px] leading-[20px] md:leading-[25px] md:text-start mb-3'>{data?.text}</p>
          <ul className='list-disc'>
        {
          data?.list?.map((item, index) => (
            <li key={index} className=' ml-5  text-start md:text-start text-[14px] md:text-[16px] leading-[20px] md:leading-[25px] mb-3'>{item?.text}</li>
          ))
        }
          </ul>

        </div>
        <div className='w-100 md:w-[40%] p-6'>
          <img src="/images/product/productImage.png" alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem