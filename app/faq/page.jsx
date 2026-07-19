"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "आपको राजनीति में आने की प्रेरणा कहाँ से मिली?",
    answer:
      "मुझे राजनीति में आने की प्रेरणा समाज की सेवा करने और आम जनता की समस्याओं का समाधान करने की इच्छा से मिली। मेरा मानना है कि राजनीति एक ऐसा सशक्त माध्यम है जिसके द्वारा सकारात्मक परिवर्तन लाया जा सकता है, सभी को समान अवसर प्रदान किए जा सकते हैं और समाज के प्रत्येक वर्ग के कल्याण के लिए कार्य किया जा सकता है। मेरा उद्देश्य जनसेवा, पारदर्शिता और जवाबदेही के सिद्धांतों पर कार्य करना है।",
  },
  {
    question: "अपने विधानसभा क्षेत्र के लिए आपका क्या विज़न है?",
    answer:
      "मेरा लक्ष्य एक विकसित, समावेशी और आत्मनिर्भर विधानसभा क्षेत्र का निर्माण करना है। मैं बेहतर सड़क, शिक्षा, स्वास्थ्य सेवाओं, रोजगार के अवसर, किसानों और छोटे व्यापारियों को सहयोग तथा प्रत्येक नागरिक तक गुणवत्तापूर्ण सरकारी सुविधाएँ पहुँचाने के लिए प्रतिबद्ध हूँ। मेरा प्रयास रहेगा कि विकास बिना किसी भेदभाव के प्रत्येक गाँव, वार्ड और परिवार तक पहुँचे।",
  },
  {
    question: "शिक्षा के क्षेत्र में आपकी क्या योजनाएँ हैं?",
    answer:
      "शिक्षा किसी भी समाज की सबसे मजबूत नींव होती है। मेरा उद्देश्य सरकारी विद्यालयों की गुणवत्ता में सुधार, आधुनिक डिजिटल शिक्षा को बढ़ावा देना, योग्य विद्यार्थियों को छात्रवृत्ति उपलब्ध कराना तथा ग्रामीण और शहरी क्षेत्रों के प्रत्येक बच्चे को समान और गुणवत्तापूर्ण शिक्षा का अवसर प्रदान करना है।",
  },
  {
    question: "रोज़गार बढ़ाने के लिए आपकी क्या योजना है?",
    answer:
      "युवाओं के लिए रोजगार सृजन मेरी सर्वोच्च प्राथमिकताओं में से एक है। मैं उद्योगों को बढ़ावा देने, स्थानीय व्यवसायों को प्रोत्साहित करने, स्टार्टअप संस्कृति को विकसित करने, कौशल विकास कार्यक्रमों का विस्तार करने तथा नए निवेश आकर्षित करने के माध्यम से स्थायी रोजगार के अवसर उपलब्ध कराने का प्रयास करूँगा।",
  },
  {
    question: "किसानों के लिए आपकी क्या योजनाएँ हैं?",
    answer:
      "किसान हमारे देश की रीढ़ हैं। मेरा संकल्प है कि किसानों को बेहतर सिंचाई सुविधाएँ, उनकी फसलों का उचित मूल्य, आधुनिक कृषि तकनीक, भंडारण की बेहतर व्यवस्था तथा सरकारी योजनाओं का सरल और पारदर्शी लाभ उपलब्ध कराया जाए, जिससे उनकी आय और जीवन स्तर में सुधार हो सके।",
  },
  {
    question: "जनता आपसे कैसे संपर्क कर सकती है?",
    answer:
      "मैं जनसंपर्क और पारदर्शी संवाद में विश्वास रखता हूँ। नागरिक मुझसे जनसुनवाई कार्यक्रमों, क्षेत्रीय कार्यालय, सोशल मीडिया प्लेटफ़ॉर्म, ईमेल तथा विशेष शिकायत निवारण शिविरों के माध्यम से सीधे संपर्क कर सकते हैं। मेरा प्रयास रहेगा कि प्रत्येक नागरिक की बात सुनी जाए और उसका समाधान समयबद्ध तरीके से किया जाए।",
  },
];

const Faq = () => {
  return (
    <section className="py-8 md:py-16 bg-linear-to-b from-white to-red-50">
      <div className="max-w-5xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
            Have Questions?
          </h2>

          <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
            एक मज़बूत और ज़्यादा विकसित निर्वाचन क्षेत्र बनाने के प्रति मेरे
            विज़न, मिशन और प्रतिबद्धता के बारे में और जानें।
          </p>

          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Accordion */}

        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-red-100 bg-white shadow-md hover:shadow-xl transition-all"
            >
              <AccordionTrigger className="px-6 py-5 text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                    {/* <HelpCircle size={22} /> */}
                    {index + 1}
                  </div>

                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6 pt-2 text-gray-600 leading-8 text-[16px]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
