import React from "react";

const Footer = () => (
  <footer className="flex justify-center px-4 sm:px-8 md:px-20">
    <div className="flex max-w-[960px] flex-1 flex-col w-full">
      <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 @[480px]:flex-row @[480px]:justify-around">
          <a className="text-[#637888] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
          <a className="text-[#637888] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
          <a className="text-[#637888] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
        </div>
        <p className="text-[#637888] text-base font-normal leading-normal">© 2025 SkinScan. All rights reserved.</p>
      </footer>
    </div>
  </footer>
);

export default Footer; 