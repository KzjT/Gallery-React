import { toast } from 'react-toastify';

//itemCount
export const notifyAddProduct = () => toast.success("item added to cart", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

//cartWidget
export const notifyRemoveItemCartWidget=()=> toast.info("removed product", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});


//cartWidget
export const notifyClearAllCartWidget = () => toast.info("empty cart", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});



//checkout
export const notifyErrorCheckout=()=> toast.error(`Please complete all fields correctly before purchasing`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

//checkout
export const notifySuccessCheckout = (orderId) => {
    toast.success(
        `Your order: #${orderId} was successful. You will be redirected to home. Thanks for shopping with us.`,
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        }
    );
};