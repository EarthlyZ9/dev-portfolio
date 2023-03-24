import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.module.css';
import Sidebar from './components/Layout/Sidebar';
import SidebarToggle from './components/Layout/SidebarToggle';
import Main from './components/Layout/Main';
import Drawer from './components/UI/Drawer';
import Footer from './components/Layout/Footer';

function App() {
    const [innerWidth, setInnerWidth] = useState(window.visualViewport.width);
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const isMobile = innerWidth <= 1024;

    const [currentHashLocation, setCurrentHashLocation] = useState("#home");

    const hashLocationHandler = (hash) => {
        setCurrentHashLocation(hash);
    };

    const closeToggleOrGoBack = () => {
        if (isToggleOpen) {
            closeToggleMenuHandler();
        } else {
            window.history.back();

        }
    };

    const resizeListener = () => {
        setInnerWidth(window.visualViewport.width);
    };

    useEffect(() => {
        window.addEventListener('resize', resizeListener);
        window.addEventListener('onpopstate', closeToggleOrGoBack);

        return () => {
            localStorage.clear();
            window.removeEventListener('resize', resizeListener);
            window.removeEventListener('onpopstate', closeToggleOrGoBack);
        };
    }, []);

    const closeToggleMenuHandler = () => {
        setIsToggleOpen(false);
    };
    const openToggleMenuHandler = () => {
        setIsToggleOpen(true);
    };

    const appClasses = !isMobile ? classes.app : classes['app-mobile'];

    return (
        <BrowserRouter>
            <div className={appClasses}>
                {!isMobile ? (
                    <Sidebar hashLocation={currentHashLocation} />
                ) : (
                    !isToggleOpen && (
                        <SidebarToggle onToggleClick={openToggleMenuHandler} />
                    )
                )}
                {isToggleOpen && (
                    <Drawer
                        onClose={closeToggleMenuHandler}
                        isToggleOpen={isToggleOpen}
                    >
                        <Sidebar onMenuClick={closeToggleMenuHandler} hashLocation={currentHashLocation} />
                    </Drawer>
                )}

                <Main isMobile={isMobile} changeHashLocation={hashLocationHandler} />
            </div>
             {!isMobile && <Footer />}
        </BrowserRouter>
    );
}

export default App;
