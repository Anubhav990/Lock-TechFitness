import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import fitnessZpp from '../assets/images/bgImage2.webp';
import smartDevice from '../assets/contentIcons/smartdeviceIcon.svg';
import massager from '../assets/contentIcons/massagerIcon.svg';
import virtualReality from '../assets/contentIcons/vrIcon.svg';

function TechContent({
    imgBg = fitnessZpp,
    imgBgAlt = "FitnessTech",
    sIcon1 = smartDevice,
    sIconAlt1 = "Smart Devices",
    sIcon2 = massager,
    sIconAlt2 = "Massager Recovery",
    sIcon3 = virtualReality,
    sIconAlt3 = "Virtual Fitness"
}) {
    const [session, setSession] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getSession = async () => {
            try {
                const { data: { session: currentSession } } = await supabase.auth.getSession();
                setSession(currentSession);
            } catch (error) {
                console.error('Error getting session:', error.message);
            }
        };
        getSession();
    }, []);

    const handleLearnMoreClick = () => {
        if (session) {
            navigate('/TechBlog');
        } else {
            navigate('/About');
        }
    };

    // Array of tech cards
    const techCards = [
        {
            id: 'tech-1',
            iconSrc: sIcon1,
            iconAlt: sIconAlt1,
            title: "Smart Devices",
            description: "Leverage smart tech to boost your health and fitness. Discover AI-powered devices that support your fitness journey.",
            background: 'bg-smartdevices',
        },
        {
            id: 'tech-2',
            iconSrc: sIcon2,
            iconAlt: sIconAlt2,
            title: "Massagers/Massage Guns",
            description: "Explore the benefits and optimal use of massagers and massage guns for relaxation and muscle recovery.",
            background: 'bg-massager',
        },
        {
            id: 'tech-3',
            iconSrc: sIcon3,
            iconAlt: sIconAlt3,
            title: "Virtual Reality Fitness",
            description: "Immerse yourself in dynamic Virtual Reality Fitness and learn how to use advanced VR tech to stay fit.",
            background: 'bg-virtual',
        },
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-12 md:pt-20 pb-6 mx-auto">
                <div className="flex flex-wrap w-full md:mb-16">
                    <div className="lg:w-1/2 w-full mb-8 md:mb-6 lg:mb-0">
                        <h1 className="text-3xl font-medium title-font mb-2 text-gray-900 text-center lg:text-left">
                            Achieve Your Fitness Goals with Smart Tech Solutions
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded mx-auto lg:mx-0"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-center md:text-center font-medium md:text-[20px] md:pt-4">
                        Transform Your Health with Smart Devices, Relaxation, and VR Fitness!
                    </p>
                </div>
            </div>

            <div className="container px-5 pb-14 md:pb-16 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img
                        className="object-cover object-center h-full w-full"
                        src={imgBg}
                        alt={imgBgAlt}
                    />
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 text-center lg:text-left">
                    <div className="flex flex-col gap-10 lg:items-start items-center">
                        {techCards.map(({ id, iconSrc, iconAlt, title, description, background }) => (
                            <div
                                key={id}
                                className="relative group border border-gray-200 p-6 rounded-lg flex flex-col items-center text-center border-indigo-100 bg-white shadow-lg shadow-gray-400 transition-transform duration-300 overflow-hidden hover:scale-105"
                            >
                                {/* Background Image */}
                                <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out ${background} group-hover:opacity-30 md:opacity-0`} />

                                {/* Card Content */}
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <img
                                            src={iconSrc}
                                            alt={iconAlt}
                                            width="30"
                                            height="30"
                                        />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
                                    <p className="leading-relaxed text-gray-900 md:text-gray-500 font-medium group-hover:text-black text-base">{description}</p>
                                    <button onClick={handleLearnMoreClick} className="mt-3 text-white inline-flex items-center bg-black border-0 py-2 px-4 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-all duration-75 ease-in">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechContent;
