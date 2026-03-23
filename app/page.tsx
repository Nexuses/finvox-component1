"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const modalBackdropRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const cards = Array.from({ length: 9 }).map((_, index) => ({ index }));

  return (
    <main className="min-h-screen bg-[#F1F1F1] flex justify-center px-4 py-10 md:px-4 md:py-16">
      <div className="w-full max-w-6xl">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map(({ index }) => (
            <article
              key={index}
              className="group relative bg-white rounded-[12px] border-2 border-transparent hover:border-[#3347af] transition-all duration-300 ease-out flex flex-col justify-between w-full min-h-[220px] px-5 py-5 md:w-[388px] md:h-[245px] md:px-8 md:py-7"
              onClick={() => setActiveCardIndex(index)}
            >
              <div className="flex justify-between gap-3 md:gap-4 h-full">
                <div className="flex-1 flex flex-col min-w-0">
                  <div className="text-[16px] md:text-[18px] font-medium tracking-[0.12em] text-[#ff6a3d] mb-2">
                    {index === 1
                      ? "02"
                      : index === 2
                      ? "03"
                      : index === 3
                      ? "04"
                      : index === 4
                      ? "05"
                      : index === 5
                      ? "06"
                      : index === 6
                      ? "07"
                      : index === 7
                      ? "08"
                      : index === 8
                      ? "09"
                      : "01"}
                  </div>
                  <h2 className="text-[18px] leading-[24px] font-semibold text-[#1b2838] mb-2 md:text-[20px] md:leading-[26px] md:mb-3 md:max-w-[210px]">
                    {index === 4 ? (
                      <>
                        Litigation, Disputes &
                        <br />
                        Specialist Valuation
                      </>
                    ) : index === 1 ? (
                      "ESOP, SAR & Equity Instrument Valuation"
                    ) : index === 2 ? (
                      "M&A & Share Swap Valuation"
                    ) : index === 3 ? (
                      <>
                        Portfolio
                        <br />
                        Valuation
                      </>
                    ) : index === 5 ? (
                      "Regulatory & Tax Valuation"
                    ) : index === 6 ? (
                      "Complex Securities & Instruments"
                    ) : index === 7 ? (
                      "Specialized & Niche Valuation"
                    ) : index === 8 ? (
                      <>
                        Cross-Border Transaction &
                        <br />
                        Regulatory Valuation
                      </>
                    ) : (
                      "Financial Reporting Valuation"
                    )}
                  </h2>
                  <ul className="list-disc list-inside space-y-0.5 md:space-y-1 text-[14px] leading-[20px] md:text-[15px] md:leading-[22px] text-[#5b6575]">
                    {index === 1 ? (
                      <>
                        <li>Stock Options</li>
                        <li>SARs</li>
                        <li>Performance Shares</li>
                      </>
                    ) : index === 2 ? (
                      <>
                        <li>Merger Valuation</li>
                        <li>Swap Ratio Analysis</li>
                        <li>Fairness Opinions</li>
                      </>
                    ) : index === 3 ? (
                      <>
                        <li>PE/VC Portfolio</li>
                        <li>Credit Portfolios</li>
                        <li>Alternative Assets</li>
                      </>
                    ) : index === 4 ? (
                      <>
                        <li>Shareholder Disputes</li>
                        <li>Matrimonial</li>
                        <li>Insolvency</li>
                        <li>Expert Witness</li>
                      </>
                    ) : index === 5 ? (
                      <>
                        <li>FEMA / RBI Compliance</li>
                        <li>Transfer Pricing</li>
                        <li>Tax-Triggered Events</li>
                      </>
                    ) : index === 6 ? (
                      <>
                        <li>Convertibles</li>
                        <li>Warrants</li>
                        <li>Derivatives</li>
                        <li>SPAC Interests</li>
                       
                      </>
                    ) : index === 7 ? (
                      <>
                        <li>Biotech</li>
                        <li>Crypto Mining</li>
                        <li>Life Insurance</li>
                        <li>Carbon Credits</li>
                        
                      </>
                    ) : index === 8 ? (
                      <>
                        <li>Global Standards</li>
                        <li>Multi-Jurisdictional Compliance</li>
                      </>
                    ) : (
                      <>
                        <li>Purchase Price Allocation</li>
                        <li>Goodwill &amp; Impairment Testing</li>
                        <li>Fair Value Measurement</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="w-[58px] h-[58px] shrink-0 self-start mt-2 md:w-[80px] md:h-[80px] md:mt-[15px]">
                  <img
                    src={
                      index === 1
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fin2.svg"
                        : index === 2
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fin3.svg"
                        : index === 3
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fin4.svg"
                        : index === 4
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fin5.svg"
                        : index === 5
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fin6.svg"
                        : index === 6
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fin7.svg"
                        : index === 7
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fin8.svg"
                        : index === 8
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fin9.svg"
                        : "https://nexuses.s3.us-east-2.amazonaws.com/fin1.svg"
                    }
                    alt="Card icon"
                    className="w-full h-full object-contain icon-draw-loop"
                  />
                </div>
              </div>
              <span className="absolute right-4 bottom-4 md:right-5 md:bottom-5 w-7 h-7 md:w-8 md:h-8 group-hover:w-[33px] group-hover:h-[33px] md:group-hover:w-[37px] md:group-hover:h-[37px] rounded-full border border-[#d7dcec] text-[#3347af] flex items-center justify-center leading-none pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#3347af] group-hover:border-[#3347af] group-hover:text-white">
                <span className="inline-flex items-center justify-center transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
                  >
                    <path
                      d="M8 4 L16 12 L8 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="inline-block scale-x-125 group-hover:scale-x-[1.6] text-[14px] md:text-[16px] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100">
                    &rarr;
                  </span>
                </span>
              </span>
            </article>
          ))}
        </section>

        {activeCardIndex !== null && (
          <div
            ref={modalBackdropRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px] overflow-y-auto p-4 pt-[max(1rem,env(safe-area-inset-top))] md:p-0"
            onClick={() => setActiveCardIndex(null)}
          >
            <div
              ref={modalContentRef}
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden ring-1 ring-inset ring-[#3347] bg-[#0b3b84] text-white my-auto mx-auto max-h-[min(90vh,calc(100vh-2rem))] md:max-h-none flex flex-col md:flex-row min-h-0 shrink-0 shadow-[0_30px_90px_-25px_rgba(2,16,60,0.75)]"
              style={{
                backgroundImage:
                  "url('https://nexuses.s3.us-east-2.amazonaws.com/Group_1597881447.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-[#002d7d]/55 text-white hover:bg-[#002d7d]/75 border border-white/35 shadow-lg shadow-[#001744]/35 transition-all duration-300 ease-out text-2xl leading-none touch-manipulation"
                onClick={() => setActiveCardIndex(null)}
                aria-label="Close"
              >
                ×
              </button>

              <div className="flex flex-col md:flex-row min-h-0 flex-1 overflow-hidden md:overflow-y-auto">
                <div className="md:w-2/5 w-full relative flex flex-col items-center justify-center pt-14 pb-8 md:py-20 shrink-0 min-h-[220px] md:min-h-0 bg-[#0b3b84] md:bg-transparent">
                  <img
                    src={
                      activeCardIndex === 1
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fi_15636012__1_.png"
                        : activeCardIndex === 2
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/Group_1000006094.png"
                        : activeCardIndex === 3
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/Group_1000006094__1_.png"
                        : activeCardIndex === 4
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fi_13338380__2_.png"
                        : activeCardIndex === 5
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/Group_1000006094__2_.png"
                        : activeCardIndex === 6
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fi_10208321__1_.png"
                        : activeCardIndex === 7
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/fi_994733__1_.png"
                        : activeCardIndex === 8
                        ? "https://nexuses.s3.us-east-2.amazonaws.com/Group_1000006094__3_.png"
                        : "https://nexuses.s3.us-east-2.amazonaws.com/fi_11126169__1_.png"
                    }
                    alt="Card icon large"
                    className="w-[90px] h-[90px] md:w-[138px] md:h-[138px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)] icon-draw-loop"
                  />
                </div>

                <div className="md:w-3/5 w-full bg-[#ffffff] text-[#1b2838] px-5 py-6 md:px-10 md:py-12 overflow-y-auto min-h-0 flex-1 min-w-0">
                  <div className="inline-flex items-center rounded-full bg-[#edf1ff] text-[13px] md:text-[14px] tracking-[0.12em] font-semibold text-[#2647b0] px-3 py-1 mb-3 md:mb-4">
                    {activeCardIndex === 0
                      ? "01"
                      : activeCardIndex === 1
                      ? "02"
                      : activeCardIndex === 2
                      ? "03"
                      : activeCardIndex === 3
                      ? "04"
                      : activeCardIndex === 4
                      ? "05"
                      : activeCardIndex === 5
                      ? "06"
                      : activeCardIndex === 6
                      ? "07"
                      : activeCardIndex === 7
                      ? "08"
                      : "09"}
                  </div>

                  <h2 className="text-[22px] leading-[28px] font-semibold mb-3 md:text-[32px] md:leading-[40px] md:mb-4 text-[#12213a]">
                    {activeCardIndex === 1
                      ? "ESOP, SAR & Other Option Instruments Valuation"
                      : activeCardIndex === 2
                      ? "M&A & Share Swap Valuation"
                      : activeCardIndex === 3
                      ? "Portfolio Valuation"
                      : activeCardIndex === 4
                      ? "Litigation, Disputes & Specialist Valuation"
                      : activeCardIndex === 5
                      ? "Regulatory & Tax Valuation"
                      : activeCardIndex === 6
                      ? "Complex Securities & Instruments"
                      : activeCardIndex === 7
                      ? "Specialized & Niche Valuation"
                      : activeCardIndex === 8
                      ? "Cross-Border Transaction & Regulatory Valuation"
                      : "Financial Reporting Valuation"}
                  </h2>

                  <p className="text-[14px] md:text-[16px] text-[#42506a] mb-3 md:mb-4 font-medium">
                    {activeCardIndex === 1
                      ? "Stock Options, SARs, Phantom Equity, Performance Linked Shares"
                      : activeCardIndex === 2
                      ? "Merger Valuation, Swap Ratio Analysis, Fairness Opinions"
                      : activeCardIndex === 3
                      ? "PE/VC Portfolio, Credit Portfolios, Alternative Assets"
                      : activeCardIndex === 4
                      ? "Shareholder Disputes, Matrimonial, Insolvency, Expert Witness"
                      : activeCardIndex === 5
                      ? "FEMA / RBI Compliance, Transfer Pricing, Tax-Triggered Events"
                      : activeCardIndex === 6
                      ? "Convertibles, Warrants, Derivatives, SPAC Interests, Carried Interest"
                      : activeCardIndex === 7
                      ? "Biotech, Crypto Mining, Life Insurance, Carbon Credits"
                      : activeCardIndex === 8
                      ? "Global Standards, Multi-Jurisdictional Compliance"
                      : "Purchase Price Allocation · Goodwill & Impairment Testing · Fair Value Measurement"}
                  </p>

                  <p className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#5b6575]">
                    {activeCardIndex === 1
                      ? "Structurally sound valuations for employee equity programs and management incentive units supporting grant-date reporting and regulatory compliance."
                      : activeCardIndex === 2
                      ? "Independent valuation and fairness opinion support for mergers, acquisitions, demergers, and share swap structures."
                      : activeCardIndex === 3
                      ? "Periodic and event-driven portfolio valuation for funds aligned with IPEV guidelines and investor reporting standards."
                      : activeCardIndex === 4
                      ? "Valuation evidence built to withstand scrutiny in courts, arbitration, and regulatory proceedings."
                      : activeCardIndex === 5
                      ? "Valuations structured for domestic and cross-border transactions and statutory compliance under Indian and international frameworks."
                      : activeCardIndex === 6
                      ? "Expertly pricing non-vanilla and exotic instruments by blending quantitative theory with market intuition. Proficient in deploying Monte Carlo simulations and advanced pricing models where standard frameworks fail."
                      : activeCardIndex === 7
                      ? "Sector-specific methodology for assets with limited comparability and high analytical complexity."
                      : activeCardIndex === 8
                      ? "Delivering comprehensive valuations for complex inbound and outbound M&A. We harmonize diverse valuation standards across geographies to ensure seamless compliance with simultaneous regulatory, tax, and financial reporting requirements."
                      : "Technically rigorous valuations aligned with Ind AS, IFRS, and US GAAP requirements. We support audit committees, finance teams, and Big Four auditors with defensible, standard-compliant fair value work."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx global>{`
        .icon-draw-loop {
          animation: icon-draw-loop 2.8s ease-in-out infinite;
          transform-origin: center;
          will-change: clip-path, opacity;
        }

        @keyframes icon-draw-loop {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0.35;
          }
          45% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
          70% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
          100% {
            clip-path: inset(0 100% 0 0);
            opacity: 0.35;
          }
        }
      `}</style>
    </main>
  );
}

