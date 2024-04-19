import { useState } from "react";

function JoinNow() {
  const [email, setEmail] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
   window.location.href=`${import.meta.env.VITE_URL}/joinNow.php?email=${email}&key=${import.meta.env.VITE_KEY}`
  }
  return (
    <>
      <div className="md:h-[380px] bg-[#191919] py-16 ">
        <div className="flex justify-center items-center h-[100%] px-16 md:px-2">
          <div>
            <div className="mb-5 text-white">
              <h1 className="text-[24px] text-center md:text-start md:text-[2.3rem] font-semibold rounded-full">
                Ready to get started?
              </h1>
              <p className="text-center text-[14px] md:text-base">
                To join the <span className="text-[var(--yellow)] pr-2">Aiwize</span>
                community
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center bg-white rounded-full p-1">
                <input
                  className="md:py-2 px-2 md:px-4 border-none outline-none text-[12px] md:text-[15px] md:w-[250px] rounded-full"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <button type="submit" className="w-[7rem] font-bold py-3 flex items-center justify-center bg-[var(--yellow)] text-[.89rem] md:text-xs rounded-full cursor-pointer text-center">
                  Join Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinNow;
