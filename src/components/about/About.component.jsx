import mainLogo from '../../assets/mainlogo.svg';
import testosterone from '../../assets/contentIcons/testosterone.svg';
import productivity from '../../assets/contentIcons/productivity.svg';
import confidence from '../../assets/contentIcons/confidence.svg';
import intellectual from '../../assets/contentIcons/intellectual.svg';

const steps = [
    {
        key: "boostingtest",
        id: 1,
        title: "Boost Testosterone",
        description: "Follow our blog's insights and methods to effectively boost testosterone and enhance your resilience.",
        svgPath: testosterone
    },
    {
        key: "enhancingfokus",
        id: 2,
        title: "Enhance Focus & Productivity",
        description: "Regular workouts enhance focus and discipline, fostering a growth mindset for greater productivity.",
        svgPath: productivity
    },
    {
        key: "developingcourage",
        id: 3,
        title: "Develop Confidence",
        description: "Building strength through exercise boosts self-esteem and mental toughness, empowering you to tackle challenges.",
        svgPath: confidence
    },
    {
        key: "fosteringgrowth",
        id: 4,
        title: "Foster Intellectual Growth",
        description: "Physical fitness stimulates cognitive function, promoting a mindset geared towards continuous learning and growth.",
        svgPath: intellectual
    }
];


function About() {
    return (
        <section className="text-gray-600 body-font md:bg-gradient-to-b from-white to-blue-50 rounded-lg">
            <div className="container px-5 pt-16 pb-12 mx-auto flex flex-wrap flex-col items-center justify-center">
                <div className="flex flex-col items-center mb-4">
                    <img className="w-10 h-10 md:w-12 md:h-12 mb-2" src={mainLogo} alt="LockTechFitness" />
                    <span className="text-xl font-semibold text-gray-900">Lock-Tech Fitness</span>
                </div>
                <div className="flex flex-col text-center pb-12 w-full">
                    <h1 className="text-2xl font-medium title-font mb-4 text-blue-500">
                        About Us
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-medium md:text-[16px] text-[14px]">
                        At Lock-Tech Fitness, we provide top fitness insights and tips to help you achieve your goals. Our mission is to leverage technology to enhance performance and maximize gains. Whether you're a beginner or an experienced athlete, our expert advice and innovative strategies will elevate your fitness journey. Join us in exploring the intersection of fitness and technology!
                    </p>
                </div>
                <div className="flex flex-wrap w-full">
                    {steps.map((step) => (
                        <div key={step.key} className="flex relative pt-10 pb-16 md:pt-12 md:pb-20 sm:items-center md:w-2/3 mx-auto">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-blue-50 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">{step.id}</div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center hover:scale-110 transition-all duration-200 ease-in shadow-neon-blue">
                                    <img
                                        src={step.svgPath}
                                        width="80"
                                        height="80"
                                    />
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-blue-500 mb-1 text-xl">{step.title}</h2>
                                    <p className="leading-relaxed text-black font-medium">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
