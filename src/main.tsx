import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: 0, //during development it is better to fetch fresh data always
         gcTime: 5 * 60 * 1000,
      },
   },
});

createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools />
         <App />
      </QueryClientProvider>
   </BrowserRouter>,
);
