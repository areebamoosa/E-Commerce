


import FaqCard from "../../components/FaqCard";
import Footer from "../../components/layout/Footer";
import Nav from "../../components/layout/Navbar/Nav";

const faqs = [
  {
    id: 1,
    question: "What makes HER Cosmetics products unique?",
    answer:
      "HER Cosmetics products are made with high-quality, skin-safe ingredients designed to enhance your natural beauty while nourishing your skin. All products are cruelty-free and dermatologist-tested.",
  },
  {
    id: 2,
    question: "Are HER Cosmetics products cruelty-free and vegan?",
    answer:
      "Yes! All our products are cruelty-free, and most are vegan. You can find detailed ingredient information on each product page.",
  },
  {
    id: 3,
    question: "Are HER Cosmetics products safe for sensitive skin?",
    answer:
      "Our formulas are gentle and skin-friendly, but we recommend doing a patch test before full use if you have sensitive skin.",
  },
  {
    id: 4,
    question: "How should I store my HER Cosmetics products?",
    answer:
      "Keep your products in a cool, dry place away from direct sunlight to maintain freshness and quality.",
  },
  {
    id: 5,
    question: "How long do HER Cosmetics products last after opening?",
    answer:
      "Most of our products last 6–12 months after opening. Check the packaging for the exact shelf life symbol.",
  },
  {
    id: 6,
    question: "Do your foundations and concealers suit all skin tones?",
    answer:
      "Yes! We offer a wide range of shades designed to complement every skin tone. Use our online shade guide to find your perfect match.",
  },
  {
    id: 7,
    question:
      "What should I do if I experience irritation after using a product?",
    answer:
      "Stop using the product immediately and consult your dermatologist. Contact our support team for further help.",
  },
  {
    id: 8,
    question: "Can I return or exchange a product if it doesn’t work for me?",
    answer:
      "We want you to love your purchase! Please check our return policy or contact our customer service team within the return period.",
  },
];

const AboutUs = () => {
  return (
    <>
      <Nav />



      <div className="flex flex-col justify-center items-center mt-4 pt-[100px] bg-white">
        <div className="mt-[-15px] sm:mt-10">
          <h1 className="Font dark-pink text-2xl sm:text-3xl lg:text-4xl ">
            FAQ
          </h1>
        </div>
        <div className="mt-20 sm:mt-10 flex flex-col  gap-8 p-8 ">
          {faqs.map((faq) => (
            <FaqCard key={faq.id} {...faq} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
