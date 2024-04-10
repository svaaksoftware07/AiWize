/* eslint-disable react/prop-types */
import "./style.css";

const ProductPageAbout = ({ features }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-40 text-center xl:px-60">
        <span className="text-[var(--yellow)] font-semibold text-[30px] mb-8">What is {features?.name}</span>
        <h3 className="text-3xl font-bold pb-14 md:text-[64px] leading-3 md:leading-normal">
          {features?.heading}
        </h3>
        <p className=" text-[20px]">{features?.content}</p>
        <div className="flex justify-center items-center flex-wrap gap-8 py-20  w-10/12">
          {features.items ? (
            features.items.map((item, index) => (
              <div key={index} className="feature flex flex-col gap-6 h-fit font-semibold text-black text-start p-6 rounded-lg">
                <span className="bg-white text-black text-2xl rounded-full w-fit p-2">{item.icon}</span>
                <p>
                  {item.text.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx !== item.text.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))
          ) : (
            <img src="/images/ProductPageAboutChankya.png" alt="" className="W-52 h-52"/>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPageAbout;
