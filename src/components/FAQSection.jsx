import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "When does FSA or HSA money expire?",
    answer:
      "Most FSA funds expire at the end of the plan year unless your employer provides a grace period or carryover. HSA funds do not expire.",
  },
  {
    question: "How can I purchase if I don't have my FSA debit card?",
    answer:
      "You can pay out of pocket and then submit an itemized receipt for reimbursement from your FSA/HSA account.",
  },
  {
    question: "How can I request an itemized receipt?",
    answer:
      "After your order is confirmed, you can request an itemized receipt through your account dashboard or contact support.",
  },
  {
    question: "What products I can purchase with my FSA/HSA?",
    answer:
      "You can use your FSA or HSA funds for eligible health-related items like prescription glasses, contact lenses, and eye exams.",
  },
  {
    question: "Can I pay with 2 FSA debit cards?",
    answer:
      "No, you can only use one FSA debit card per transaction. You can split payments with another payment method if needed.",
  },
  {
    question: "Do you take insurance discounts?",
    answer:
      "We do not directly process insurance, but you can use your insurance receipt for reimbursement.",
  },
  {
    question: "What happens if I don't find my health provider on the website?",
    answer:
      "You can still place your order and use your FSA/HSA card if your provider supports eligible health purchases.",
  },
  {
    question: "What is the return policy when purchasing with insurance?",
    answer:
      "Returns are accepted within 30 days for unused products. Refunds will be processed according to your payment method.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">
          Frequently asked questions
        </h2>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-gray-800 font-medium text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-600" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
