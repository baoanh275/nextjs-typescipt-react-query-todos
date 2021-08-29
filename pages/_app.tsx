import React from 'react'
import {FC} from 'react';
import {QueryClientProvider,QueryClient} from 'react-query';
import { AppProps } from 'next/dist/shared/lib/router/router';
 
import 'bootstrap/dist/css/bootstrap.min.css';


const reactQueryClient = new QueryClient();

 const MyApp: FC<AppProps> = ({Component, pageProps} : AppProps) => {
    return (
      
        <QueryClientProvider client={reactQueryClient}>
          
            
                <Component {...pageProps} />
            
           
          
        </QueryClientProvider>
     
       
    )
}

export default MyApp;