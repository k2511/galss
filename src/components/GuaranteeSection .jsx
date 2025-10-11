// GuaranteeSection.jsx

const guarantees = [
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto mb-2">
        <circle cx="18" cy="18" r="16" />
        <path d="M14 18a4 4 0 008 0" />
        <path d="M16 16h.01" />
        <path d="M20 16h.01" />
      </svg>
    ),
    label: "100% money-back guarantee",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto mb-2">
        <rect x="10" y="12" width="16" height="12" rx="2" />
        <path d="M16 18h4" />
      </svg>
    ),
    label: "45-day return or exchange",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto mb-2">
        <rect x="12" y="14" width="12" height="8" rx="4" />
        <text x="18" y="19.5" textAnchor="middle" alignmentBaseline="middle" fontSize="7" >365</text>
      </svg>
    ),
    label: "365-day warranty",
  },
];

export default function GuaranteeSection() {
  return (
    <section className="bg-[#f6fafd] text-center py-12 px-4 md:px-0">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-4">
          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="20" cy="20" r="18" />
            <path d="M15 17a5 5 0 0110 0v3a5 5 0 01-10 0v-3z" />
            <circle cx="20" cy="21" r="2" />
          </svg>
        </div>
        <h2 className="font-bold text-xl mb-2">Perfect Pair Guarantee.</h2>
        <p className="text-gray-700 leading-relaxed text-base mb-10">
          As glasses wearers, we're committed to ensuring the perfect pair,<br className="hidden md:inline" />
          with stylish frames and premium quality lenses.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-xl mx-auto">
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



