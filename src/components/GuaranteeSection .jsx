import React from "react";

const guarantees = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="transparent"
        viewBox="0 0 47 47"
        className="w-10 h-10 mb-3 text-gray-800"
        role="presentation"
      >
        <path
          stroke="currentColor"
          d="m33.798 30.612.016-.002c.42 0 .826-.172 1.12-.475 5.224-5.383 7.606-7.841 7.638-7.881a1.95 1.95 0 0 1 2.74-.23 1.95 1.95 0 0 1 .227 2.746l-8.713 10.44a6.76 6.76 0 0 1-4.708 1.898H19.202a4.83 4.83 0 0 0-3.373 1.366l-2.173 2.202-7.185-7.205.92-1.826c1.78-3.346 5.119-5.247 9.27-5.247 1.488 0 2.927.3 4.277.891a.95.95 0 0 0 .389.084h11.032a1.95 1.95 0 0 1 1.943 1.988c-.023 1.066-.926 1.906-1.99 1.906H21.088M25.5 13.953v.286c0 1.047 1.002 1.896 2.237 1.896s2.238-.849 2.238-1.896c0-.286 0-1.561-2.246-2.226S25.5 10.114 25.5 9.829c0-1.048 1.002-1.897 2.237-1.897s2.238.85 2.238 1.897v.285M27.835 6v1.932m0 8.204V18M4.482 32.86a.965.965 0 0 1 1.202-.136c.169.102-.315-.339 8.416 8.396a.98.98 0 0 1 .005 1.373l-3.228 3.187a1.11 1.11 0 0 1-1.567-.01l-7.989-8.068a1.11 1.11 0 0 1 .003-1.567l3.158-3.176ZM16.5 12c0 6.065 4.935 11 11 11s11-4.935 11-11-4.934-11-11-11-11 4.935-11 11Z"
        ></path>
      </svg>
    ),
    label: "100% money-back guarantee",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 37 31"
        className="w-10 h-10 mb-3 text-gray-800"
        role="presentation"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11.67h-7.33m3.33-4V1m0 6.67h14l-5.06-6.21a1.24 1.24 0 0 0-.97-.46H15m0 6.67H1l5.17-6.22c.23-.29.58-.45.95-.45H15m0 6.67H1v16.19c0 .63.51 1.14 1.14 1.14h17.61M15 7.67h14v5.46m0 0A8.5 8.5 0 0 0 19.75 25M29 13.13A8.5 8.5 0 1 1 19.75 25m5.84.32a4.32 4.32 0 1 0-1.58-5.9l-.78 1.55m2.5-.67-2.5.67m0 0-.67-2.5"
        ></path>
      </svg>
    ),
    label: "45-day return or exchange",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 47 47"
        fill="none"
        stroke="currentColor"
        className="w-10 h-10 mb-3 text-gray-800"
        role="presentation"
      >
        <path
          stroke="currentColor"
          d="M28.5 15.601h-4.296l-.41 4.142H24a2.34 2.34 0 0 1 1.943-1.01c1.33 0 2.352 1.111 2.352 2.526s-1.125 2.525-2.454 2.525c-1.126 0-2.148-.909-2.353-2.02M19.609 15.5s-2.864 0-3.784 3.03c-.92 3.032.204 5.355 2.25 5.355s2.966-2.727 1.841-4.344c-1.125-1.616-4.091-1.111-4.398 1.516M7.5 17.622c0-2.728 4.603-2.627 4.603 0 0 1.92-1.841 2.222-2.864 2.222m0 0h-.512m.512 0c1.023-.1 2.864.202 2.864 2.122 0 2.525-4.603 2.627-4.603 0M8.5 4.5h-5a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h23.172a2 2 0 0 0 1.414-.586l5.828-5.828a2 2 0 0 0 .586-1.414V6.5a2 2 0 0 0-2-2h-5m-4 0h-11m22 23h-5a2 2 0 0 0-2 2v5m-18-27h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm15 0h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Z"
        ></path>
      </svg>
    ),
    label: "365-day warranty",
  },
];

export default function GuaranteeSection() {
  return (
    <section className="bg-[#f6fafd] text-center py-12 px-6 md:px-0">
      <div className="max-w-3xl mx-auto">
        {/* Header Icon */}
        <div className="flex justify-center mb-4">
          <svg
            width="48"
            height="48"
            fill="none"
            stroke="#0F0F0F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M38.2 11.84a22.54 22.54 0 0 1-12.93-5.37 1.98 1.98 0 0 0-2.54 0A22.64 22.64 0 0 1 9.8 11.84c-1.02.08-1.8.96-1.8 1.98v8.66c0 8.74 6.31 16.93 14.96 19.37.67.2 1.4.2 2.09 0C33.69 39.41 40 31.22 40 22.5v-8.66c0-1.03-.78-1.9-1.8-1.99Z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Title & Subtitle */}
        <h2 className="font-bold text-xl md:text-2xl mb-2 text-gray-900">
          Perfect Pair Guarantee.
        </h2>
        <p className="text-gray-700 leading-relaxed text-base mb-10">
          As glasses wearers, we're committed to ensuring you the perfect pair,
          <br className="hidden md:inline" />
          with stylish frames and premium quality lenses.
        </p>

        {/* Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {guarantees.map((g, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {g.icon}
              <div className="text-sm text-gray-700">{g.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





