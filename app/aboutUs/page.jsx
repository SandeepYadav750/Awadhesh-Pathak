"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaUsers,
  FaHandsHelping,
  FaGraduationCap,
  FaPrayingHands,
  FaBuilding,
  FaTrophy,
  FaHeart,
  FaUserGraduate,
  FaHandshake,
  FaClock,
  FaAward,
} from "react-icons/fa";
import { MdFamilyRestroom, MdWorkspacePremium } from "react-icons/md";

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-red-600 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Awadhesh Pathak
          </h1>
          <p className="text-xl md:text-2xl font-light text-red-100">
            जनसेवा • विकास • विश्वास
          </p>
          <p className="text-lg md:text-xl mt-4 text-red-100 max-w-3xl mx-auto">
            समाज के प्रत्येक नागरिक तक विकास, शिक्षा, रोजगार और सम्मान पहुँचाना
            हमारा संकल्प
          </p>
        </div>
      </section>

      {/* Personal Information */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-0">
            <div className="md:col-span-1 bg-red-50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-red-600 mb-4">
                <Image
                  src="/logo.jpeg"
                  alt="Awadhesh Pathak"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Awadhesh Pathak
              </h2>
              <p className="text-red-600 font-semibold">Samajwadi Party</p>
              <div className="flex gap-4 mt-4">
                <a
                  href="tel:+919739009767"
                  className="bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition"
                >
                  📞 Contact
                </a>
              </div>
            </div>

            <div className="md:col-span-2 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-600 min-w-[100px]">
                    Father:
                  </span>
                  <span className="text-gray-800">
                    Shri Kailash Nath Pathak (Retired Principal)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-600 min-w-[100px]">
                    Mother:
                  </span>
                  <span className="text-gray-800">
                    Shrimati [Mother's Name]
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-600 min-w-[100px]">
                    Wife:
                  </span>
                  <span className="text-gray-800">Shrimati Rekha Pathak</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-600 min-w-[100px]">
                    Children:
                  </span>
                  <span className="text-gray-800">
                    Saurabh Kumar Pathak (MBA-IIM Indore) [Entrepreneur]
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-600 min-w-[100px]">
                    Daughter:
                  </span>
                  <span className="text-gray-800">
                    Dr. Nandita Pathak (MBBS, MD)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-600 min-w-[100px]">
                    Son-in-Law:
                  </span>
                  <span className="text-gray-800">
                    Dr. Alok Pandey (MBBS, MD)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-600 min-w-[100px]">
                    Daughter-in-Law:
                  </span>
                  <span className="text-gray-800">
                    Shrimati Shraddha Saurabh Pathak (MBA)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-600 min-w-[100px]">
                    Brothers:
                  </span>
                  <span className="text-gray-800">
                    Shri Suresh Kumar Pathak, Shri Ramesh Kumar Pathak
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurship */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <FaBuilding className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              उद्यमशीलता (Entrepreneurship)
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                आर्थिक समृद्धि हासिल करने के लिए युवा अवधेश के समक्ष कड़ी
                समस्याएं थीं। शिक्षक पिता मध्यमवर्गीय किसान थे, व्यापार शुरू
                करने से पहले धन का ना होना सबसे बड़ी समस्या थी।
              </p>
              <p className="text-gray-700 leading-relaxed">
                कर्मठ, मेहनती स्वभाव के युवा अवधेश ने अपने एक निकट सम्बन्धी से
                15 हजार रुपये उधार लेकर उसी पूंजी के सहारे सरकारी निर्माण कार्य
                का एक छोटा सा अनुबंध किया और फिर कभी पीछे मुड़कर नहीं देखा।
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-red-700 mb-3">
                Achievement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                समय के साथ स्वयं की उद्यमशीलता, कठोर श्रम, कर्तव्य के प्रति
                ईमानदारी आदि गुणों के सहारे अवधेश पाठक सिविल कॉन्ट्रक्टर के रूप
                में आज जनपद व पूर्वाचल स्तर पर एक बड़े ब्रांड के रूप में स्थापित
                हैं।
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                श्री अवधेश पाठक को विरासत के रूप में अपने शिक्षक पिता से ऐसा
                संस्कार मिला है, जिसे आत्मसात कर वे जीवन के हर क्षेत्र में स्वयं
                की आदर्श उपस्थिति दर्ज करने में समर्थ हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Journey */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
              <FaPrayingHands className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              धर्मानुरागी अवधेश (Spiritual Journey)
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              सनातन धर्म के प्रति अटूट अनुराग भाव युवा अवधेश को अपने पुण्य
              पिताजी से विरासत में प्राप्त हुआ है। स्वयं की वर्तमान आर्थिक,
              सामाजिक, राजनीतिक स्थिति को ईश्वरीय कृपा मानते हैं श्री अवधेश।
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              सत्संग अनुष्ठानों के प्रति अवधेश जी की आस्था अक्षुण्ण है। ऐसे
              सार्वजनिक वैयक्तिक आयोजनों में सहर्ष भाग लेने के साथ ही अवधेश जी
              प्रतिवर्ष अपने गांव व नगरीय आवास क्षेत्र के अलावा भी धर्मसंघ समागम
              जैसे महत्वपूर्ण तीर्थ स्थलों पर सत्संग समागम जैसे आयोजन करवाते
              रहते हैं।
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
              <p className="text-gray-700 leading-relaxed">
                वर्ष 2022 में ग्राम भिटौवा की धरती पर श्री अवधेश पाठक के सौजन्य
                से मातृ दिवसीय श्रीमद्भागवत महापुराण कथा का आयोजन किया गया।
                जिसमें देश के मूर्धन्य कथावाचक विद्वान श्री कृष्णचंद्र हाथी
                ठाकुर जी महाराज का अमृतमयी उपदेश श्रवण कर लाखों देववासियों की
                भावना अपने सनातन धर्म के प्रति गहन रूप से मजबूत हुई।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <FaHandsHelping className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              समाज के प्रति कर्तव्य (Social Service)
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="text-red-600 text-2xl" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">अंत्योदय सेवा</h3>
              <p className="text-gray-600 text-sm">
                अंत्योदय की भावना के तहत दरिद्र नारायण सेवा के निमित्त सदैव
                तत्पर। कंबल वितरण, अन्नवितरण, अनाथ व वृद्धाश्रमों को आर्थिक
                सहयोग।
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-green-600 text-2xl" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">
                गरीब कन्याओं का विवाह
              </h3>
              <p className="text-gray-600 text-sm">
                गरीब कन्याओं का विवाह करवाने में आपकी भूमिका सराहनीय व अनुकरणीय
                है।
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">समाज कल्याण</h3>
              <p className="text-gray-600 text-sm">
                समाज के कमजोर वर्ग के हर सुख-दुख में यथासंभव सहयोग प्रदान करना
                स्वभाव बन चुका है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Welfare */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              छात्र युवा कल्याण (Student Welfare)
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  शिक्षा सबका अधिकार
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  "शिक्षा सबका अधिकार है" इस सूत्र वाक्य के मर्म को अंत:करण से
                  समझने वाले अवधेश जी का सोच है कि यदि कोई बालक शिक्षा प्राप्त
                  करना चाहता है, तो उसे हर तरह का सहयोग व प्रोत्साहन प्रदान करना
                  समाज के सामर्थ्यवान व्यक्तियों का कर्तव्य है।
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">Initiatives:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    जरूरतमंद विद्यार्थियों को यथासंभव सहयोग
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    इंजीनियरिंग व मेडिकल शिक्षा के लिए कोचिंग व्यवस्था
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    क्रीड़ा के क्षेत्र में युवाओं को प्रोत्साहन
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    आर्थिक व क्रीड़ा सामग्रियों की उपलब्धता सुनिश्चित
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tribute to Vipin */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
              <FaClock className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              विपिन 26 - A Tribute
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-red-600">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  अवधेश जी के जीवन में घटित एक मार्मिक घटना ने उन्हें हिला कर रख
                  दिया। स्वयं के ज्येष्ठ मेधावी युवा पुत्र विपिन की 26 वर्ष की
                  अल्पायु में दुखद निधन हो जाने से अवधेश जी अंदर से टूट गये।
                </p>
                <p className="text-gray-700 leading-relaxed">
                  किंतु शीघ्र ही श्रीमद्भागवत महापुराण-गीता के कर्मयोग को ध्यान
                  में रखकर अवधेश जी फिर से कर्मपथ पर दौड़ने के लिए तत्पर हो गये।
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-red-800 text-lg mb-3">
                  स्मृति में सेवा:
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 text-xl">❤️</span>
                    <span>
                      प्रति वर्ष 26 मेधावी अभावग्रस्त बच्चों की शिक्षा व्यवस्था
                      का पूर्ण खर्च
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 text-xl">📚</span>
                    <span>
                      इंजीनियरिंग व मेडिकल शिक्षा के लिए कोचिंग की व्यवस्था
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 text-xl">🏆</span>
                    <span>क्रीड़ा के क्षेत्र में युवाओं को प्रोत्साहन</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Journey */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
              <FaUsers className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              राजनीतिक यात्रा (Political Journey)
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">पहला कदम</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                आर्थिक आत्मनिर्भरता हासिल करने के उपरांत राजनीतिक सफलता के
                पायदान पर अवधेश पाठक का पहला कदम तब पड़ा, जब विपरीत परिस्थितियों
                के बावजूद अपनी जीवनसंगिनी श्रीमती रेखा पाठक को चिरहरडिंगांव
                क्षेत्र पंचायत का प्रमुख बनवाने में सफल हुए।
              </p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  स्वर्णिम कार्यकाल (2010-2015)
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">✓</span>
                  <span>5 वर्ष तक क्षेत्र पंचायत प्रमुख</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">✓</span>
                  <span>भ्रष्टाचार का लेश मात्र अंश भी नहीं</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">✓</span>
                  <span>पूरी तरह पारदर्शी कार्यशैली</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">✓</span>
                  <span>
                    स्थानीय ग्रामीणों द्वारा स्वर्णिम काल के रूप में स्मरण
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaBuilding className="text-2xl text-gray-100" />
              </div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-red-700">
                Years in Civil Contracting
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaUserGraduate className="text-2xl text-gray-100" />
              </div>
              <div className="text-3xl font-bold">26+</div>
              <div className="text-sm text-red-700">
                Students Supported Annually
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaHandshake className="text-2xl text-gray-100" />
              </div>
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm text-red-700">
                Years in Public Service
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaAward className="text-2xl text-gray-100" />
              </div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm text-red-700">Social Initiatives</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
