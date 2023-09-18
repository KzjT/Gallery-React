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