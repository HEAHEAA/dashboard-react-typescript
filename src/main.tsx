import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './style/index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </RecoilRoot>
        </QueryClientProvider>
    </StrictMode>,
)
