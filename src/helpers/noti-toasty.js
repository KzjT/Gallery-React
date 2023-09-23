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
//itemcount
export const notifyNoStockAvaliable =()=> toast.error(`No stock available`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

//itemcount
export const notifyNoProductsAvaliable =()=> toast.error(`No products available`, {
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
export const notifyRemoveItemCartWidget = () => toast.info("removed product", {
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
export const notifyErrorCheckout = () => toast.error(`Please complete all fields correctly before purchasing`, {
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
        `Your order: #${orderId} was successful.Thanks for shopping with us.`,
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

//contact
export const notifyErrorContact = () => {
    toast.error("An error occurred while submitting your message. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}


//contact
export const notifySuccesContact = (name) =>{
    toast.success(`Thanks for contacting us, ${name}. We will be responding to your query shortly.`);
}

//contact 
export const notifyErrorInputsIncomplete = () =>{
    toast.error(`Please complete all fields correctly before sending a message`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

//contact 
export const notifyServerErrorSending = (error) => {
    console.error("Error adding comment: ", error);
    toast.error("An error occurred while submitting your message. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}