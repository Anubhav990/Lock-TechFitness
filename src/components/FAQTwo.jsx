import faqIcon from '../assets/contentIcons/faqIcon.svg';
import { faqCardsThree } from '../data/faqcardsThree';
import { faqCardsTwo } from '../data/faqcardsTwo';

function FAQTwo({ iconFaq = faqIcon }) {
    return (
        <div className="bg-white py-16 sm:py-8 lg:pt-28">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* First FAQ Section */}
                <div className="mb-10 md:mb-20">
                    <div className="flex flex-wrap w-full mb-16">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h2 className="text-3xl font-medium title-font mb-2 text-gray-900 text-center lg:text-left">
                                Doubts & Fitness Related FAQs
                            </h2>
                            <div className="h-1 w-20 bg-indigo-500 rounded mx-auto lg:mx-0"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed font-medium text-white text-center lg:text-left bg-indigo-400 p-6 rounded-lg shadow-md">
                            We always try to give the most accurate answers for your doubts! For us, customer service comes first.
                        </p>
                    </div>
                </div>
                {/* First Set of FAQ Cards */}
                <div className="group grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3 rounded-lg md:shadow-md md:hover:scale-105 md:hover:shadow-lg transition-all duration-300 ease-in md:mt-6">
                    {faqCardsThree.map(faq => (
                        <div key={faq.id} className="relative rounded-lg bg-gray-50 p-5 pt-8 group-hover:bg-gray-100 transition-all duration-300 ease-in">
                            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white border border-gray-300 text-white">
                                <img
                                    src={iconFaq}
                                    alt="FAQ icon"
                                    width="30"
                                    height="30"
                                />
                            </span>
                            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">{faq.title}</h3>
                            <p className="text-gray-500 font-medium">{faq.content}</p>
                        </div>
                    ))}
                </div>

                {/* Add a gap between the sections */}
                <div className="my-16 md:my-32"></div>

                {/* Second FAQ Section */}
                <div className="mb-10 md:mb-20">
                    <div className="flex flex-wrap w-full mb-16">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h2 className="text-3xl font-medium title-font mb-2 text-gray-900 text-center lg:text-left">
                                Additional Intriguing Questions
                            </h2>
                            <div className="h-1 w-20 bg-indigo-500 rounded mx-auto lg:mx-0"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed font-medium text-white text-center lg:text-left bg-indigo-400 p-6 rounded-lg shadow-md">
                            Uncover Valuable Insights for Better Fitness & Health. Explore Answers to Your Top Wellness Questions.
                        </p>
                    </div>
                </div>

                {/* Second Set of FAQ Cards */}
                <div className="group grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3 rounded-lg md:shadow-md md:hover:scale-105 md:hover:shadow-lg transition-all duration-300 ease-in md:mt-6">
                    {faqCardsTwo.map(faq => (
                        <div key={faq.id} className="relative rounded-lg bg-gray-50 p-5 pt-8 group-hover:bg-gray-100 transition-all duration-300 ease-in">
                            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white border border-gray-300 text-white">
                                <img
                                    src={iconFaq}
                                    alt="FAQ icon"
                                    width="30"
                                    height="30"
                                />
                            </span>
                            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">{faq.title}</h3>
                            <p className="text-gray-500 font-medium">{faq.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQTwo;
