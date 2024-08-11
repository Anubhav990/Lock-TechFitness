import { Outlet } from 'react-router-dom';
import Header from '../header/Header.component';
import Footer from '../footer/Footer.component';
import { useState } from 'react';
import Modal from '../../components/logoutmodal/Modal.component';
import { supabase } from '../../supabaseClient';
import ScrollTop from '../scrolltotop/ScrollTop';
function Layout() {
    const [showModal, setShowModal] = useState(false);

    const handleLogOut = async () => {
        await supabase.auth.signOut();
        setShowModal(false);
    };

    return (
        <>
            <Header onLogOutClick={() => setShowModal(true)} />
            <Outlet />
            <Footer />
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleLogOut}
            />
            <ScrollTop />
        </>
    )
}

export default Layout;
