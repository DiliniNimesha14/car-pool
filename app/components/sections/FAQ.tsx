"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../Container";

type FAQItem = {
  question: string;
  answer: string;
};

const employeeFAQs: FAQItem[] = [
  {
    question: "Is it really safe?",
    answer:
      "Yes, safety is our top priority. All users go through a verification process, and we have rating systems and reviews to ensure trust within the community.",
  },
  {
    question: "Do I need to carpool every day?",
    answer:
      "You don't have to carpool every day—flexibility is usually flexible, so you can decide which days you want to share a ride based on your schedule, meetings or personal preferences. For example, you might carpool on days when traffic is heavy, when you want to save on fuel, when it's convenient and comfortable for you to share a ride and commuting easier, not mandatory every day.",
  },
  {
    question: "What if my schedule changes?",
    answer:
      "Our app allows you to update your schedule easily. You can modify or cancel your ride plans with advance notice to your carpool partners.",
  },
  {
    question: "How are costs split?",
    answer:
      "Costs are typically split evenly among passengers, or you can arrange a custom split based on distance traveled. Our app calculates fair shares automatically.",
  },
  {
    question: "What if I don't like my carpool partner?",
    answer:
      "You can rate and review your experience after each ride. If there are concerns, you can choose different carpool partners for future trips.",
  },
  {
    question: "Can publish ride and find ride both?",
    answer:
      "Yes, you can both publish rides when you're driving and find rides when you need transportation. The app supports both functions seamlessly.",
  },
];

const companyFAQs: FAQItem[] = [
  {
    question: "How do employees get verified?",
    answer:
      "Employees are verified through their company email address and additional identity verification steps to ensure authenticity and safety.",
  },
  {
    question: "What data do you collect about employees?",
    answer:
      "We collect basic profile information, ride history, and ratings. All data is handled securely and in compliance with privacy regulations.",
  },
  {
    question: "Can we integrate with our HR system?",
    answer:
      "Yes, we offer API integration options with most major HR systems. Contact our enterprise team to discuss your specific requirements.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing varies based on company size and features needed. Contact us for a customized quote that fits your organization's needs.",
  },
];

const stats = [
  {
    value: "2 Min",
    label: "Average setup time",
  },
  {
    value: "100%",
    label: "Candidates verified",
  },
  {
    value: "24/7",
    label: "IT support available",
  },
  {
    value: "Zero",
    label: "security incidents",
  },
];

export default function FAQ() {
  const [openEmployeeIndex, setOpenEmployeeIndex] = useState<number | null>(1);
  const [openCompanyIndex, setOpenCompanyIndex] = useState<number | null>(null);

  const toggleEmployeeAccordion = (index: number) => {
    setOpenEmployeeIndex(openEmployeeIndex === index ? null : index);
  };

  const toggleCompanyAccordion = (index: number) => {
    setOpenCompanyIndex(openCompanyIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Image - hidden on mobile */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-left-top hidden sm:block"
        style={{ backgroundImage: "url('/FAQ/freepik--freepik--background-complete--inject-481--inject-124.svg')" }}
      />

      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-12">
            {/* FAQs Label */}
            <div className="flex justify-center mb-5">
              <div className="px-6 py-2 rounded-lg border-2 border-[#9EA2A5] bg-transparent text-[#9EA2A5] font-poppins text-sm sm:text-[14px] font-medium">
                FAQs
              </div>
            </div>
            <h2 className="font-poppins text-[20px] pb-8 sm:text-[32px] md:text-[48px] font-extrabold text-[#1E272E]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="font-baloo text-gray-500 text-sm sm:text-[24px] mt-2 pb-5">
              Everything you need to know about carpooling
            </p>
          </div>

          {/* For Employee Section */}
          <div className="mb-12">
            {/* For Employee Label */}
            <div className="flex justify-center mb-4 sm:mb-8">
              <div className="font-baloo px-8 py-3 rounded-full border-2 border-black bg-white text-black flex items-center gap-2 text-sm font-semibold sm:text-[20px]">
                <Image
                  src="/FAQ/Union 24.svg"
                  alt=""
                  width={20}
                  height={20}
                  className=""
                />
                For Employee
              </div>
            </div>

            {/* Employee FAQ Accordion */}
            <div className="space-y-4">
              {employeeFAQs.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 sm:rounded-2xl! overflow-hidden hover:shadow-md px-3 sm:px-10 ${
                    openEmployeeIndex === index ? "bg-[#F4F4F5] rounded-lg" : "bg-white rounded-full"
                  }`}
                  style={{ transition: 'background-color 0.3s, box-shadow 0.3s, border-radius 0.05s' }}
                >
                  <button
                    onClick={() => toggleEmployeeAccordion(index)}
                    className="w-full px-2 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left transition-colors"
                  >
                    <span className="font-poppins text-[12px] sm:text-[18px] font-medium text-[#1E272E] pr-2 sm:pr-4 text-left">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        openEmployeeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                      openEmployeeIndex === index ? "max-h-125" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-10 pt-0">
                      <p className="font-baloo text-sm sm:text-[16px] text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Companies Section */}
          <div className="mb-12">
            {/* For Companies Label */}
            <div className="flex justify-center mb-8">
              <div className="font-baloo px-7 py-3 rounded-full border-2 border-black bg-white text-black flex items-center gap-2 text-sm font-semibold sm:text-[20px]">
                <Image
                  src="/FAQ/carbon_location-company.svg"
                  alt=""
                  width={24}
                  height={24}
                  className=""
                />
                For Companies
              </div>
            </div>

            {/* Company FAQ Accordion */}
            <div className="space-y-4">
              {companyFAQs.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 sm:rounded-2xl! overflow-hidden hover:shadow-md px-3 sm:px-10 ${
                    openCompanyIndex === index ? "bg-[#F4F4F5] rounded-lg" : "bg-white rounded-full"
                  }`}
                  style={{ transition: 'background-color 0.3s, box-shadow 0.3s, border-radius 0.05s' }}
                >
                  <button
                    onClick={() => toggleCompanyAccordion(index)}
                    className="w-full px-2 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left transition-colors"
                  >
                    <span className="font-poppins text-[12px] sm:text-[18px] font-medium text-[#1E272E] pr-2 sm:pr-4 text-left">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        openCompanyIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                      openCompanyIndex === index ? "max-h-125" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-10 pt-0">
                      <p className="font-baloo text-sm sm:text-[16px] text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-stretch gap-4 sm:gap-12 md:gap-16">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-stretch">
                  <div className="text-center px-1 sm:px-4">
                    <div className="font-saira text-[16px] sm:text-[40px] font-bold text-[#1E272E]">
                      {stat.value}
                    </div>
                    <div className="font-saira text-[10px] sm:text-[20px] mt-1">
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="w-px bg-gray-300 ml-4 sm:ml-12 md:ml-16 self-stretch" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
