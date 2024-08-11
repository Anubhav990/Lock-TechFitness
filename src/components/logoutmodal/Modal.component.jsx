import { useEffect } from 'react';
import ReactDOM from "react-dom";
const Modal = ({ isOpen, onClose, onConfirm }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden";
            const handleEscape = (event) => {
                if (event.key === 'Escape') {
                    onClose();
                }
            };
            window.addEventListener('keydown', handleEscape);

            return () => {
                window.removeEventListener('keydown', handleEscape);
                document.body.style.overflowY = "scroll";
            };
        } else {
            document.body.style.overflowY = "scroll";
        }
    }, [isOpen, onClose]);


    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div onClick={(e) => e.stopPropagation()} className="bg-white p-8 rounded-lg shadow-lg max-w-sm transition-transform transform scale-95 animate-fade-in">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-600 hover:text-black focus:outline-none"
                        aria-label="Close Modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-xl font-semibold text-black text-center">Log Out</h2>
                    <p className="mt-2 text-gray-600 text-center font-medium md:text-[22px] text-[19px]">Are you sure you want to log out?</p>
                    <div className="mt-6 flex justify-center space-x-4">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-gray-300 hover:text-gray-800 transition duration-200 shadow-xl"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 shadow-xl"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </>,
        document.querySelector(".myPortalModalDiv")
    );
};

export default Modal;
