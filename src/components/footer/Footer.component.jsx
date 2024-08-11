import mainlogo from '../../assets/mainlogo.svg';
import instagramIcon from '../../assets/contentIcons/instagramIcon.svg';
import twitterIcon from '../../assets/contentIcons/twitterIcon.svg';
import discordIconTwo from '../../assets/contentIcons/discordIconTwo.svg';
import linkedinIcon from '../../assets/contentIcons/linkedinIcon.svg';


const services = [
    "Customized Workouts",
    "Customized Diet Plans",
    "Personal Guidance",
    "Consultation",
    "Online Training"
];

const contact = [
    { text: "locktechfitness@gmail.com" },
    { text: "Follow on X", href: "https://x.com/Anubhav990" },
    { text: "Join us on Discord", href: "https://discord.gg/rGpkzmsz" }, // Updated URL
    { text: "Instagram", href: "https://www.instagram.com/_anubhav_990/" }, // Updated URL
];

const socialLinks = [
    {
        href: "https://x.com/Anubhav990",
        src: twitterIcon,
        alt: "Twitter"
    },
    {
        href: "https://www.instagram.com/_anubhav_990/",
        src: instagramIcon,
        alt: "Instagram"
    },
    {
        href: "https://discord.gg/rGpkzmsz", // Updated URL
        src: discordIconTwo,
        alt: "Discord"
    },
    {
        href: "https://www.linkedin.com/in/anubhav-gupta-2ba294235/", // Updated URL
        src: linkedinIcon,
        alt: "LinkedIn"
    }
];

const certificationsAndAssociations = [
    {
        text: "Certified by MIFI - Gurumann",
        href: "https://gmmifi.com/about-us"
    },
    {
        text: "Global community of fitness enthusiasts",
        href: "https://disboard.org/servers/tag/fitness"
    }
];

const address = [
    "Industrial Area",
    "Phase - 8",
    "S.A.S Nagar",
    "Punjab, India"

];

function Footer({ LogoName = "Lock-Tech Fitness", logoAlt = "LockTechFitness", LogoSrc = mainlogo }) {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 pt-16 pb-6 md:pt-24 md:pb-20 rounded bg-gradient-to-b from-blue-50 to-white md:bg-none mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img
                                src={LogoSrc}
                                alt={logoAlt}
                                width="30"
                                height="30"
                            />
                            <span className="ml-3 text-xl">{LogoName}</span>
                        </a>
                        <p className="mt-4 text-sm font-medium text-gray-500"> Reach your fitness goals with our expert-designed workout and diet plans. For personalized guidance and consultations, please connect with us directly.</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-blue-600 tracking-widest text-sm mb-3">PREMIUM SERVICES</h2>
                            <nav className="list-none mb-10">
                                {services.map(service => (
                                    <li key={service}>
                                        <a className="text-gray-600 hover:text-[#e4405f]">{service}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-blue-600 tracking-widest text-sm mb-3">CONNECT WITH US</h2>
                            <nav className="list-none mb-10">
                                {contact.map(({ text, href }) => (
                                    <li key={text}>
                                        <a href={href} className="text-gray-600 hover:text-blue-500">{text}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-blue-600 tracking-widest text-sm mb-3">CERTIFICATIONS</h2>
                            <nav className="list-none mb-10">
                                {certificationsAndAssociations.map(({ text, href }) => (
                                    <li key={text}>
                                        <a href={href} className="text-gray-600 hover:text-blue-500" target="_blank" rel="noopener noreferrer">{text}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-blue-600 tracking-widest text-sm mb-3">ADDRESS</h2>
                            <nav className="list-none mb-10">
                                {address.map(line => (
                                    <li key={line} className="text-gray-600 hover:text-[#e4405f]">{line}</li>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 rounded">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 LockTech Fitness —
                            <a href="https://twitter.com/locktechfitness" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@locktechfitness</a>
                        </p>
                        <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-4">
                            {socialLinks.map(({ href, src, alt }) => (
                                <a key={href} href={href} className="text-gray-500" target="_blank" rel="noopener noreferrer">
                                    <img src={src} alt={alt} className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
