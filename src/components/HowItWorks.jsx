import React from "react";

const HowItWorks = () => (
  <div className="flex flex-col gap-10 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-80 py-10 @container">
    <div className="flex flex-col gap-4">
      <h1 className="text-[#111518] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
        How SkinScan works
      </h1>
      <p className="text-[#111518] text-base font-normal leading-normal max-w-[720px]">
        Our advanced AI analyzes your skin from a simple photo, providing insights into your skin's condition and recommending products tailored to your unique needs.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <div className="flex flex-col gap-3 pb-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
          style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6fVBJRnAJTeR_djux7wtv_DlygBGqer2iojsUGUS493m1uqG7oW2s-07ZJLyevuBghwN1QWWQ_rFLVKVZBgEyc03t3BMl_H2szTFk6qFBWfqtSqn0vNnICDjBSn6Cw_RTcVR8fH_fVBA3HJeGLj9nkFYUHnsL-1c2ZqtSRpzOXpaXOBIdcA92TzPK6Xkz7XA8JyL1QJjor9NtnhUeRPb4vwQbmL8km4VMvod-2Ks8bryws2tQ-HsbLpv5MpPyMJ0V4S4gQVvXkKE')`}}
        ></div>
        <div>
          <p className="text-[#111518] text-base font-medium leading-normal">Upload a photo</p>
          <p className="text-[#637888] text-sm font-normal leading-normal">Take or upload a clear photo of your face to begin your skin analysis.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 pb-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
          style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvoVA8KF5668xyfwRgETDiHMj93LNMfbaCg8gTsUb_VaVErdHo8qjW1r-yKZ7fdXKoUxv_0Pv25_cEmUDTj9V0pmywwwzTG11VrKBx64XclCgGiF_G1LsKux6YD92kFjOpy4DDIbQeIaip4EgIKbdHJMkwc92M8et4F31JzuPCRee8csR-Wg03IQAgcm5JQgL2dgsX7Z4kdJ8Lj_B12iLq4F0jYpHISPS2dL_zlMXGbu_M6lcfqcY7owNtFCszdUnojzOWw1s5dBU')`}}
        ></div>
        <div>
          <p className="text-[#111518] text-base font-medium leading-normal">Receive your analysis</p>
          <p className="text-[#637888] text-sm font-normal leading-normal">Our AI will analyze your skin and provide a detailed report on its health.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 pb-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
          style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzF0_mf4GlpL0g1u3AfxwRrBNz_Paq4DfHtdzozsU9Usnn7bh8EclZIWccrnJByw8IDFamQB-f0giwzbs3RD7uihLNDkKA2QFtkHBNStDOyz8RT9n1VTzxCabuUcdmfHCirN9BvG89b0YsZbcNXagqynXknioxcpQx8Mh_vaAKRJ4YwVvZ75tqGrSoHAHiPh4Y8a9YPlQqrFmySKz-Ghn7_nWvyg1gLrqess0GoPiCnFMH3iqJ8iPXA1QoX8mHR3nR7tVFghWMw2g')`}}
        ></div>
        <div>
          <p className="text-[#111518] text-base font-medium leading-normal">Get personalized recommendations</p>
          <p className="text-[#637888] text-sm font-normal leading-normal">Receive a list of products tailored to your skin type and concerns.</p>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks; 