import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import bodyBuildingIcon from '../assets/contentIcons/bodybuildingIcon.svg';
import bodyweightIcon from '../assets/contentIcons/bodyweightIcon.svg';
import cardiovascularIcon from '../assets/contentIcons/cardiovascularIcon.svg';
import dietIcon from '../assets/contentIcons/dietIcon.svg';
import sleepIcon from '../assets/contentIcons/sleepIcon.svg';
import resistanceIcon from '../assets/contentIcons/resistanceIcon.svg';

function Content({
    iconSrc1 = cardiovascularIcon,
    iconAlt1 = "Cardiovascular health",
    iconSrc2 = bodyBuildingIcon,
    iconAlt2 = "Bodybuilding",
    iconSrc3 = bodyweightIcon,
    iconAlt3 = "Bodyweight",
    iconSrc4 = dietIcon,
    iconAlt4 = "Diet",
    iconSrc5 = sleepIcon,
    iconAlt5 = "Sleep",
    iconSrc6 = resistanceIcon,
    iconAlt6 = "Resistance training"
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

    const handleExploreClick = () => {
        console.log("current session in content", session);
        if (session) {
            navigate('/Blog');
        } else {
            navigate('/SignUp');
        }
    };

    const cards = [
        {
            id: 'cardio',
            iconSrc: iconSrc1,
            iconAlt: iconAlt1,
            title: "Cardiovascular Health",
            description: "Represents cardiovascular health, focusing on exercises and tips for improving heart health and endurance.",
            background: 'bg-heart' // Replace with your actual background class
        },
        {
            id: 'bodybuilding',
            iconSrc: iconSrc2,
            iconAlt: iconAlt2,
            title: "Bodybuilding Gems",
            description: "Highlights key tips & insights for bodybuilding, including workout routines and techniques to build muscle.",
            background: 'bg-bodybuilding' // Replace with your actual background class
        },
        {
            id: 'bodyweight',
            iconSrc: iconSrc3,
            iconAlt: iconAlt3,
            title: "Bodyweight Exercises",
            description: "Showcases exercises that use body weight as resistance, ideal for strength training and functional fitness.",
            background: 'bg-bodyweight' // Replace with your actual background class
        },
        {
            id: 'diet',
            iconSrc: iconSrc4,
            iconAlt: iconAlt4,
            title: "Diet - Food - Supplements",
            description: "Covers essential information on diet, nutrition & supplements to support your fitness and health goals.",
            background: 'bg-diet' // Replace with your actual background class
        },
        {
            id: 'sleep',
            iconSrc: iconSrc5,
            iconAlt: iconAlt5,
            title: "Sleep",
            description: "Emphasizes the importance of sleep for recovery and overall health, offering tips for improving sleep quality.",
            background: 'bg-sleep' // Replace with your actual background class
        },
        {
            id: 'resistance',
            iconSrc: iconSrc6,
            iconAlt: iconAlt6,
            title: "Resistance Training",
            description: "Explore resistance training with a focus on strength, hypertrophy & endurance to boost muscle growth and performance.",
            background: 'bg-resistance' // Replace with your actual background class
        }
    ];

    return (
        <section className="text-gray-900 md:text-gray-600 body-font bg-gradient-to-b from-white to-blue-100 md:bg-gradient-to-b from-white via-blue-50 to-blue-100 rounded-lg">
            <div className="container px-5 md:pt-28 pt-16 pb-16 mx-auto">
                <div className="flex flex-wrap w-full mb-14 md:mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-6 md:mb-2 text-gray-900">Transform Your Body and Mind with Advanced Fitness Insights and Tech</h1>
                    <p className="lg:w-3/4 w-full leading-relaxed text-gray-500 font-medium">Discover expert fitness advice, advanced hypertrophy tips and how to use technology to enhance your health journey.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {cards.map(({ id, iconSrc, iconAlt, title, description, background }) => (
                        <div key={id} className="xl:w-1/3 md:w-1/2 p-4 hover:scale-110 transition-all duration-75 ease-in rounded-lg cursor-pointer group relative">
                            <div className="border border-indigo-100 p-6 rounded-lg bg-white shadow-lg shadow-gray-400 relative overflow-hidden">
                                <div className={`absolute inset-0 ${background} bg-no-repeat bg-cover bg-center group-hover:opacity-40 transition-all duration-300`}></div>

                                <div className="relative z-10">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <img
                                            src={iconSrc}
                                            alt={iconAlt}
                                            width="30"
                                            height="30"
                                        />
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
                                    <p className="leading-relaxed font-medium group-hover:text-black transition-colors duration-300 text-base">{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {session ? (
                    <button
                        className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-500 transition-all duration-75 ease-in rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                        onClick={handleExploreClick}
                    >
                        Explore
                    </button>
                ) : (
                    <div className="flex flex-col items-center mt-12">
                        <p className="mb-6 md:mb-4 text-gray-800">Sign up for Free to Access Premium Fitness Insights!</p>
                        <div className="flex space-x-4">
                            <button
                                className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-500 transition-all duration-75 ease-in rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                                onClick={() => navigate('/SignUp')}
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Content;