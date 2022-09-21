import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

function ScrollToTop(props, event) {
    const { pathname } = useLocation();
  
    //Scroll page back to top on change
    useEffect(() => {
        const canControlScrollRestoration = 'scrollRestoration' in window.history
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }
        if(window.innerWidth < 1024) {
            window.scrollTo(0, 0);
        } else {
            let container = document.getElementsByClassName('container-inner');
            container[0].scrollTo(0,0);
        }
    }, [pathname]);

    return (
        <>
        </>
    );
}

export default ScrollToTop;