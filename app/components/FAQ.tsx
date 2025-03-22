'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How does the AI character generator work?',
      answer: 'Our AI character generator uses advanced machine learning algorithms to transform text descriptions into visual character designs. Simply enter a description of your character, select style preferences, and our AI will generate multiple options for you to choose from.'
    },
    {
      question: 'Do I need any technical skills to use MorphAI?',
      answer: 'Absolutely not! MorphAI is specifically designed for creators without coding or technical skills. Our intuitive interface makes it easy for anyone to generate professional-quality character designs.'
    },
    {
      question: 'Can I use the generated characters for commercial projects?',
      answer: 'Yes, all generated characters come with a commercial use license. The specific terms vary by plan - Hobby and Professional plans include a standard commercial license, while the Enterprise plan includes an extended license with broader usage rights.'
    },
    {
      question: 'How many character variations can I generate?',
      answer: 'For each character description, you can generate multiple variations with different styles, poses, and details. The number of total characters you can create per month depends on your subscription plan.'
    },
    {
      question: 'Can I edit the generated characters after creation?',
      answer: 'Yes, you can make basic edits directly in our platform, such as color adjustments and background removal. For more advanced editing, you can download the character images in standard formats and edit them in your preferred graphics software.'
    },
    {
      question: 'What image formats are supported for downloads?',
      answer: 'Characters can be downloaded in PNG, JPEG, and transparent PNG formats. Enterprise users also have access to SVG and layered PSD file formats for more advanced editing capabilities.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 7-day free trial on all subscription plans. You can generate up to 10 characters during your trial period to test our service before committing to a subscription.'
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-foreground/70">
              Have questions about our AI character generator? We've got answers.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-foreground/10 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="font-medium">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform duration-200 ${openItem === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openItem === index && (
                  <div className="p-4 pt-0 border-t border-foreground/10">
                    <p className="text-foreground/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-foreground/70 mb-4">Still have questions?</p>
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-foreground/10 px-5 py-2 text-sm font-medium text-foreground hover:bg-foreground/20 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 