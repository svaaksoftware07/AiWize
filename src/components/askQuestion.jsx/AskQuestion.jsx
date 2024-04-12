import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import RequestPage from "../RequestPage/RequestPage";

const AskQuestion = () => {
  const questions = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit expedita deserunt omnis ab. Eligendi laborum nihil sit accusamus in!",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit expedita deserunt omnis ab. Eligendi laborum nihil sit accusamus in!",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit expedita deserunt omnis ab. Eligendi laborum nihil sit accusamus in!",
    },
    {
      question: "How does billing work?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit expedita deserunt omnis ab. Eligendi laborum nihil sit accusamus in!",
    },
    {
      question: "How do I change my account email?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit expedita deserunt omnis ab. Eligendi laborum nihil sit accusamus in!",
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleQuestionClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  const [showPopup2, setShowPopup2] = useState(false);


  return (
    <>
    {showPopup2 && <RequestPage setShowPopup2={setShowPopup2} />}

      <div className="flex flex-col items-center justify-center bg-[#FFFCED] gap-10 py-5">
      <div className="text-center px-4">
        <h3 className="text-[1.2rem] md:text-[1.8rem] font-semibold my-3">FREQUENTLY ASKED QUESTIONS</h3>
        <p className="text-[14px] md:text-[17px] ">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="flex flex-col place-content-start w-[80%] md:w-[40%]">
        {questions.map((q, index) => (
          <div key={index} className={`py-4 ${index !== 0 && 'border-t-[1px] border-black'}`}>
            <div
              onClick={() => handleQuestionClick(index)}
              style={{ cursor: "pointer" }}
              className="text-[16px] font-[400] text-[#595566] "
            >
              <div className="flex justify-between border-black">
                <h3 className="text-[18px] text-[#262626]">{q.question}</h3>
                {expandedIndex === index ? <CiCircleMinus /> : <CiCirclePlus />}
              </div>
            </div>
            {expandedIndex === index && (
              <p className="text-[14px] py-1 text-[#667085]">{q.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className=" text-center bg-black w-[80%] md:w-[70%] px-4 md:px-0 rounded-xl py-3 mb-8">
        <h5 className="text-[18px] text-white pb-4">Still have questions?</h5>
        <p className="text-[15px] text-[#F3F3F3] pb-3">
          {`Can’t`} find the answer {`you’re`} looking for? Please chat to our friendly
          team.
        </p>
        <button onClick={()=>setShowPopup2(true)} className="text-[#FFDA14] text-[14px] border-[1px] rounded-full px-4 py-1 border-[#FFDA14]">
          Get in touch
        </button>
      </div>
    </div>
    </>

  );
};

export default AskQuestion;
