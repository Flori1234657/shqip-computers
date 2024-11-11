import { Outlet } from 'react-router-dom';
import TopBar from 'src/components/top-bar/TopBar';
import Footer from 'src/components/Footer';

export default function Layout() {
    return (
        <>
            <TopBar />
            <main style={{ padding: '0 1.5rem', overflowX: 'hidden' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
