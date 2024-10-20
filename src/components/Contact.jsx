import React, { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    // State to manage input fields and errors
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        firstname: '',
        email: '',
        message: ''
    });

    const emailValidator = (email) => {
        const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return isValidEmail.test(email);
    }

    const formSubmit = async (e) => {
        e.preventDefault();

        const { firstname, email, message } = formData;

        let newErrors = {
            firstname: '',
            email: '',
            message: ''
        };

        // Validate fields
        if (firstname === "") newErrors.firstname = "Please enter first name";
        if (email === "") newErrors.email = "Please enter an email";
        else if (!emailValidator(email)) newErrors.email = "Please enter a valid email";
        if (message === "") newErrors.message = "Please enter your message";

        // Update error state
        setErrors(newErrors);

        // If no errors, submit form
        if (!newErrors.firstname && !newErrors.email && !newErrors.message) {
            // Add the access key to form data
            const submissionData = {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                message: formData.message,
                access_key: "a4a3921e-dd10-484b-b233-ab6214fcd4c9"  // Add your access key here
            };

            // Send the form data as JSON
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(submissionData)
                });

                const data = await response.json();

                if (data.success) {
                    toast.success("Your message has been sent. Thanks for contacting us!", {
                        position: "bottom-right",
                        autoClose: 3000,
                        className: "shadow bg-black text-white shadow-md shadow-gray-700 custom-toast",
                        progressStyle: {
                            background: "white"
                        },
                        closeButton: {
                            background: "white"
                        }
                    });

                    // Optionally reset form after submission
                    setFormData({
                        firstname: '',
                        lastname: '',
                        email: '',
                        message: ''
                    });
                } else {
                    toast.error("Something went wrong. Please try again.", {
                        position: "bottom-right",
                        autoClose: 3000,
                        className: "shadow bg-black text-white shadow-md shadow-gray-700 custom-toast",
                        progressStyle: {
                            background: "white"
                        },
                        closeButton: {
                            background: "white"
                        }
                    });
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                toast.error("There was an issue with your submission. Please try again later.", {
                    position: "bottom-right",
                    autoClose: 3000,
                    className: "shadow bg-black text-white shadow-md shadow-gray-700 custom-toast",
                    progressStyle: {
                        background: "white"
                    },
                    closeButton: {
                        background: "white"
                    }
                });
            }
        }
    };


    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className='relative bg-black h-screen min-w-screen text-white font-matter' id='contact'>
            <div className='w-full h-[90vh] flex flex-col md:flex-row'>
                <div className='w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center'>
                    <div className='relative m-[10vw] md:m-[5vw] text-[12vw] md:text-[6vw] text-bold leading-none tracking-tight'>
                        <p>
                            Good things happen when you say <span className='underline'>hey</span>
                        </p>
                        <span className='absolute right-5 md:right-5 rotate-[120deg] md:rotate-[-30deg] hover:rotate-[-45deg] hover:right-0 transition-all duration-500 ease-in-out'>
                            <FaArrowRight />
                        </span>
                    </div>
                </div>

                <div className='w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center'>
                    <div className='bg-white text-black w-[80%] h-[80%] rounded-tr-[5vw] flex items-center justify-between px-[4vw]'>

                        <form onSubmit={formSubmit}>
                            <div className="w-full flex flex-col">
                                <div className="w-full flex justify-between gap-10">
                                    <input
                                        name="firstname"
                                        placeholder="First Name *"
                                        value={formData.firstname}
                                        onChange={handleInputChange}
                                        className={`h-full w-full border-b ${errors.firstname ? 'border-red-500' : 'border-blue-gray-500'}
                                        bg-transparent pt-4 pb-1.5 font-matter 
                                        text-lg text-black 
                                        outline outline-0 transition-all 
                                        placeholder:text-gray-500 
                                        placeholder-shown:border-blue-gray-200 
                                        focus:border-gray-900 focus:outline-0`}
                                    />
                                    <input
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={formData.lastname}
                                        onChange={handleInputChange}
                                        className="h-full w-full border-b border-blue-gray-500 
                                        bg-transparent pt-4 pb-1.5 font-matter 
                                        text-lg text-black 
                                        outline outline-0 transition-all 
                                        placeholder:text-gray-500 
                                        placeholder-shown:border-blue-gray-200 
                                        focus:border-gray-900 focus:outline-0"
                                    />
                                </div>
                                <span
                                    className={`text-red-500 text-sm transition-all duration-300`}
                                    style={{ visibility: errors.firstname ? 'visible' : 'hidden' }}>
                                    {errors.firstname}
                                </span>

                                <div className="w-full flex justify-between gap-10 mt-10">
                                    <input
                                        name="email"
                                        placeholder="Your email address *"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`h-full w-full border-b ${errors.email ? 'border-red-500' : 'border-blue-gray-500'}
                                        bg-transparent pt-4 pb-1.5 font-matter 
                                        text-lg text-black 
                                        outline outline-0 transition-all 
                                        placeholder:text-gray-500 
                                        placeholder-shown:border-blue-gray-200 
                                        focus:border-gray-900 focus:outline-0`}
                                    />
                                </div>
                                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

                                <div className="w-full flex justify-between gap-10 mt-10">
                                    <input
                                        name="message"
                                        placeholder="Message *"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={`h-full w-full border-b ${errors.message ? 'border-red-500' : 'border-blue-gray-500'}
                                        bg-transparent pt-4 pb-1.5 font-matter 
                                        text-lg text-black 
                                        outline outline-0 transition-all 
                                        placeholder:text-gray-500 
                                        placeholder-shown:border-blue-gray-200 
                                        focus:border-gray-900 focus:outline-0`}
                                    />
                                </div>
                                {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}

                                <div className='mt-5 flex items-center justify-center '>
                                    <button type="submit" className='group hover:gap-3 transition-all duration-500 ease-in-out flex items-center justify-between gap-2 border-2 rounded-full px-5  py-2 bg-black text-white '>
                                        Submit
                                        <span className='group-hover:rotate-[-45deg] transition-all duration-500 ease-in-out'>
                                            <FaArrowRight />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <div className='absolute footer w-full h-[10vh] bottom-0 left-0 flex 
            flex-col
            md:justify-between md:flex-row items-center md:px-12 md:py-5
            '>
                <div className='w-full flex items-center justify-center gap-2 cursor-pointer'>
                    <span className='hover:bg-white hover:rounded-full hover:text-black p-2 transition-all duration-200 ease-in'>
                        <a href="https://www.instagram.com/vivekguptaaa/" target='_blank'>
                            <FaInstagram />
                        </a>
                    </span>
                    <span className='hover:bg-white hover:rounded-full hover:text-black p-2 transition-all duration-200 ease-in'>
                        <a href="https://github.com/VivekkkGupta" target='_blank'>
                            <FaGithub />
                        </a>
                    </span>
                    <span className='hover:bg-white hover:rounded-full hover:text-black p-2 transition-all duration-200 ease-in'>
                        <a href="https://www.linkedin.com/in/vivekguptaaa/" target='_blank'>
                            <FaLinkedinIn />
                        </a>
                    </span>
                    <span className='hover:bg-white hover:rounded-full hover:text-black p-2 transition-all duration-200 ease-in'>
                        <a href="mailto:guptavivek1035@gmail.com" target='_blank'>
                            <BiLogoGmail />
                        </a>
                    </span>
                    <span className='hover:bg-white hover:rounded-full hover:text-black p-2 transition-all duration-200 ease-in'>
                        <a href="https://x.com/vivekkkgupta" target='_blank'>
                            <FaXTwitter />
                        </a>
                    </span>
                </div>
                <div>&copy;CodeVivek</div>
                <div className='flex flex-col hover:text-gray-400'>
                    <span className='cursor-pointer duration-500 transition-all'>
                        Made with <span className='text-red-600'>❤</span> by Vivek
                    </span>
                </div>
            </div>

            {/* Toast Container for displaying notifications */}
            <ToastContainer />
        </div>
    );
}

export default Contact;
