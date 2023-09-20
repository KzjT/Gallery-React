import React from 'react';
import Map from "../../Map/Map";
import "./Contact.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const Contact = () => {
    const db = getFirestore();
    const contactCollection = collection(db, "contacts");
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        if (!name || !email || !message) {
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
            return;
        }

        const contactData = {
            name,
            email,
            message,
        };

        addDoc(contactCollection, contactData)
            .then(() => {
                event.target.reset();

                toast.success(`Thanks for contacting us, ${name}. We will be responding to your query shortly.`);
            })
            .catch((error) => {
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
            });
    };

    return (
        <div className="contact-page">
            <h1 className="h1-tittle">Contact Us</h1>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input type="text" className="form-control" id="name" placeholder='name' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input type="email" className="form-control" id="email" placeholder='email' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Message
                                    </label>
                                    <textarea className="form-control" id="message" rows="4" placeholder='your message'></textarea>
                                </div>
                                <div className='btn-Contact-Container'>
                                    <button type="submit" className="btn btn-primary btn-contact">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 contact-info">
                            <div className="contact-info">
                                <h3>Contact Information</h3>
                                <p><i className="fas fa-map-marker-alt"> <FontAwesomeIcon icon={faMapMarkerAlt} /></i> Address: 75001 París, Francia</p>
                                <p><i className="fas fa-phone-alt"><FontAwesomeIcon icon={faPhoneAlt} /></i> Phone: (+522) 456-7890</p>
                                <p><i className="fas fa-envelope"><FontAwesomeIcon icon={faEnvelope} /></i> Email: ArtGallery@info.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map-section">
                <div className="container">
                    <h3 className="h1-tittle">Location</h3>
                    <Map />
                </div>
            </section>
            <ToastContainer />
        </div>
    );
}

export default Contact;
