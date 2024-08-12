import { supabase } from "../../supabaseClient";
import { useEffect, useState } from 'react';
import mainLogo from '../../assets/mainlogo.svg';
import { Link } from 'react-router-dom';
import googleIcon from '../../assets/contentIcons/googleIcon.svg';
import discordIcon from '../../assets/contentIcons/discordIcon.svg';
import githubIcon from '../../assets/contentIcons/githubIcon.svg';

function SignUp() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);
            setUser(session?.user || null);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);


    const signup = async () => {
        try {
            await supabase.auth.signInWithOAuth({ provider: 'github' });
        } catch (error) {
            console.error('Error signing up with GitHub:', error.message);
        }
    };

    const signupWithGoogle = async () => {
        try {
            await supabase.auth.signInWithOAuth({ provider: 'google' });
        } catch (error) {
            console.error('Error signing up with Google:', error.message);
        }
    };

    const signupWithDiscord = async () => {
        try {
            await supabase.auth.signInWithOAuth({ provider: 'discord' });
        } catch (error) {
            console.error('Error signing up with Discord:', error.message);
        }
    }

    //Note: the logout functionality is added using a modal window now!

    // const signOut = async () => {
    //     await supabase.auth.signOut()
    // };

    return (
        <div className="flex flex-col items-center justify-center my-6 md:my-0 md:min-h-screen md:bg-gradient-to-b from-white via-blue-50 to-blue-100 p-4 md:p-6 rounded-lg">
            <div className="bg-white md:shadow-lg shadow-xl rounded-lg p-6 md:p-8 max-w-sm w-full">
                {/* 
                This logic displays content based on the user's authentication status. 
                Currently, we manage authentication using modal, content, header, and tech content components.
                If desired, you can implement the logout functionality here by adding a button 
                and calling the logout function in an onClick handler.
                */}
                {user ? (
                    <div className="text-center">
                        <div className="flex flex-col items-center justify-center mb-4 md:mb-6 text-lg md:text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-10 h-10 md:w-12 md:h-12 mb-2" src={mainLogo} alt="LockTechFitness" />
                            <span className="text-center">Lock-Tech Fitness</span>
                        </div>
                        <h1 className="text-xl md:text-2xl text-green-600 font-bold mb-4">Authenticated.</h1>
                        <h2 className="text-xl md:text-2xl text-green-600 font-bold mb-4">Welcome, You are Signed in!</h2>
                        <p className="mb-4 md:mb-6 text-green-600 text-center text-sm md:text-base font-semibold">Explore - Learn - Revolutionize.</p>
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="flex flex-col items-center justify-center mb-4 md:mb-6 text-lg md:text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-10 h-10 md:w-12 md:h-12 mb-2" src={mainLogo} alt="LockTechFitness" />
                            <span className="text-center text-black">Lock-Tech Fitness</span>
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Sign Up</h1>
                        <p className="mb-4 md:mb-6 text-gray-600 text-sm md:text-base leading-relaxed px-2 md:px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                            Sign up to access exclusive insights and content for free.
                            Please take very good care of your health.
                        </p>
                        <div className="group">
                            <button
                                onClick={signupWithGoogle}
                                className="bg-blue-50 text-black py-2 px-4 mb-4 rounded-lg gap-2 shadow-md group-hover:bg-blue-100 group-hover:scale-105 transition duration-300 w-full flex items-center justify-center"
                            >
                                Sign Up with Google
                                <img src={googleIcon} alt="GoogleIcon" width="24" height="24" />
                            </button>
                        </div>
                        <div className="group">
                            <button
                                onClick={signupWithDiscord}
                                className="bg-blue-50 text-black py-2 px-4 mb-4 rounded-lg gap-2 shadow-md group-hover:scale-105 group-hover:bg-blue-100 transition duration-200 w-full flex items-center justify-center"
                            >
                                Sign Up with Discord
                                <img src={discordIcon} alt="GoogleIcon" width="24" height="24" />
                            </button>
                        </div>
                        <div className="group">
                            <button
                                onClick={signup}
                                className="bg-blue-50 text-black py-2 px-4 rounded-lg gap-2 shadow-md group-hover:scale-105 group-hover:bg-blue-100 transition duration-300 w-full flex items-center justify-center"
                            >
                                Sign Up with GitHub
                                <img src={githubIcon} alt="GoogleIcon" width="24" height="24" />
                            </button>
                        </div>
                        <div className="mt-4 text-center text-gray-600 text-sm">
                            Already have an account? <Link to="/LogIn" className="text-blue-500 hover:text-blue-600 font-medium">Login</Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default SignUp;
