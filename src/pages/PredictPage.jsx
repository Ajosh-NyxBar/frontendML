import React, { useState } from "react";

const PredictPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setResult(null);
    setMsg("");
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl("");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMsg("Please select a photo first.");
      return;
    }
    setLoading(true);
    setMsg("");
    setResult(null);
    try {
      const formData = new FormData();
      formData.append("image", selectedFile); // Ganti di sini

      const res = await fetch("https://ajosh12-klasifikasi-kulit.hf.space/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        setMsg(data.message || "Analysis failed.");
      }
    } catch (err) {
      setMsg("Network error.");
    }
    setLoading(false);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-20 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">Upload your photo</p>
                <p className="text-[#637888] text-sm font-normal leading-normal">
                  Upload a clear photo of your face to get started. Make sure your face is well-lit and visible.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#dce1e5] px-6 py-14">
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                  <p className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                    Drag and drop or browse
                  </p>
                  <p className="text-[#111518] text-sm font-normal leading-normal max-w-[480px] text-center">
                    Upload a photo of your face for analysis. We support JPG, PNG, and HEIC formats.
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="fileInput"
                  onChange={handleFileChange}
                />
                <label htmlFor="fileInput">
                  <span className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f3f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em]">
                    Upload Photo
                  </span>
                </label>
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="mt-4 rounded-xl max-h-60 object-contain border"
                  />
                )}
                <button
                  onClick={handleUpload}
                  disabled={loading || !selectedFile}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#309be8] text-white text-sm font-bold leading-normal tracking-[0.015em] mt-4"
                >
                  {loading ? "Analyzing..." : "Analyze"}
                </button>
                {msg && <div className="text-red-500 text-sm mt-2">{msg}</div>}
                {result && (
                  <div className="mt-4 w-full max-w-[480px] bg-[#f0f3f4] rounded-xl p-6 shadow">
                    <h3 className="text-[#111518] text-lg font-bold mb-4 text-center">Skin Analysis Result</h3>
                    <div className="mb-4 flex flex-col items-center">
                      <span className="text-[#637888] text-base">Skin Type</span>
                      <span className="text-[#309be8] text-2xl font-bold mt-1">{result.jenis_kulit}</span>
                    </div>
                    <div>
                      <span className="text-[#637888] text-base">Recommended Ingredients</span>
                      <ul className="mt-2 flex flex-wrap gap-2 justify-center">
                        {Array.isArray(result.rekomendasi) && result.rekomendasi.map((item, idx) => (
                          <li
                            key={idx}
                            className="bg-white border border-[#dce1e5] rounded-full px-4 py-1 text-[#111518] text-sm font-medium shadow-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              By uploading your photo, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictPage;