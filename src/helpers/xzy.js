import { toast } from 'react-toastify';


export const buildXZY = () => {
    return {
        browserVersion: ((navigator.userAgent.match(/(Chrome|Firefox|Safari|Edge)/) || ['N/A'])[0].split(' ')[0] || 'N/A'),
        deviceType: (navigator.userAgent.match(/(iPhone|iPad|Android|Windows Phone|BlackBerry|Chrome OS)/) || ['N/A'])[0],
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        date: new Date(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A',
        language: navigator.language || 'N/A',
        browser: navigator.userAgent || 'N/A',
    };
};

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

export const clearBuyerData = (setBuyerData) => {
    setBuyerData((prevBuyerData) => ({
        ...prevBuyerData,
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
    }));
};

export const validateBuyerData = ( buyerData, items) => {
    return (
        items.length > 0 &&
        buyerData.firstName &&
        buyerData.lastName &&
        buyerData.email &&
        buyerData.confirmEmail &&
        buyerData.email === buyerData.confirmEmail &&
        buyerData.email.includes("@")
    );
};