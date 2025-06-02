import React from "react";

const HeroSection = () => (
  <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
    <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[320px] sm:min-h-[400px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyigKDSTOk__cRWcXh69P4pem0cjhmHmnTg6sOypdLpwdbYAljRfZ3kCwL_WnzSR_CvmMEpTHPK80lP-LvzqGeRGdpz0q8MczFcZrMOcZQwdcU61hFGa68QbY39NI_KcrElSBdtUTh7qLmi7Jxm6V81T0mL3r3Ms2nJVv4byQh3w4TCBpacdZjH2HWcDVKvaY-plRUXMVAmBS6GyfpjshfOAhdJ-HLfqgbSc6BKFcbZ0YoXbHux9GnMcl6wCGpANxhj9Iq4oQvMbc')`}}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Unlock the secrets to your skin's potential
              </h1>
              <h2 className="text-white text-xs sm:text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Upload a photo and receive a personalized analysis of your skin's health, along with tailored product recommendations to enhance your natural beauty.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#309be8] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
              <span className="truncate">Get started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection; 