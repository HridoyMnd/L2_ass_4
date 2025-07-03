import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/route';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>
)

