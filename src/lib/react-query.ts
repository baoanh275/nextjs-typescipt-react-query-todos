import { QueryClient } from "react-query";
import { toast } from 'react-toastify';

export const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            onSuccess: () => {
                toast.success("Your request has been successfully processed", {
                    position: toast.POSITION.TOP_RIGHT
                });
            },
            onError: (error) => {
                toast.error("Your request can't be processed", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
    }
});