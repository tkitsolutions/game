import { createStandaloneToast } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';

const { ToastContainer } = createStandaloneToast();

function App() {
    return (
        <BrowserRouter>
            {/* <ScrollToTop /> */}
            <Routes />
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
