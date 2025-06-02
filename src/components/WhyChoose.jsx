import React from "react";

const WhyChoose = () => (
  <div className="flex flex-col gap-10 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-80 py-10 @container">
    <div className="flex flex-col gap-4">
      <h1 className="text-[#111518] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
        Why choose SkinScan?
      </h1>
      <p className="text-[#111518] text-base font-normal leading-normal max-w-[720px]">
        SkinScan offers a unique blend of technology and personalized care, ensuring you receive the best possible guidance for your skin.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-0">
      <div className="flex flex-1 gap-3 rounded-lg border border-[#dce1e5] bg-white p-4 flex-col">
        <div className="text-[#111518]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#111518] text-base font-bold leading-tight">Accurate analysis</h2>
          <p className="text-[#637888] text-sm font-normal leading-normal">Our AI-powered analysis provides accurate insights into your skin's health.</p>
        </div>
      </div>
      <div className="flex flex-1 gap-3 rounded-lg border border-[#dce1e5] bg-white p-4 flex-col">
        <div className="text-[#111518]" data-icon="Heart" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#111518] text-base font-bold leading-tight">Personalized recommendations</h2>
          <p className="text-[#637888] text-sm font-normal leading-normal">Receive product recommendations tailored to your unique skin type and concerns.</p>
        </div>
      </div>
      <div className="flex flex-1 gap-3 rounded-lg border border-[#dce1e5] bg-white p-4 flex-col">
        <div className="text-[#111518]" data-icon="ShieldCheck" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#111518] text-base font-bold leading-tight">Safe and secure</h2>
          <p className="text-[#637888] text-sm font-normal leading-normal">Your data is protected with the highest security standards.</p>
        </div>
      </div>
    </div>
  </div>
);

export default WhyChoose; 