import * as React from 'react';
import { FaApple, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


export default function Logintypes() {
    const buttonStyle = {
        width: '90%', // Adjust the width as needed
        maxWidth: '300px', // Add max-width if necessary
    };
    return (
        <div className="text-center">
            <h1 className="text-lg font-Roboto font-bold tracking-tight text-neutral-100 sm:text-5xl">
                Log In
            </h1>
            <p className="mt-4 font-Roboto text-lg leading-8 text-neutral-300">
                By continuing, you agree to our{' '}
                <a href="#" className="font-Roboto text-yellow-500 cursor-pointer">
                    Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-Roboto text-yellow-500 cursor-pointer">
                    Privacy Policy
                </a>
                .
            </p>

            {/* SSO Login Buttons */}
            <div className="mt-12 flex flex-col gap-5 items-center">
                {/* Apple Button */}
                <button style={buttonStyle} className="border border-white bg-transparent text-white rounded-md p-2 h-11 flex items-center justify-center font-Roboto">
                    <FaApple className="w-6 h-6 mr-2" />
                    Continue with Apple
                </button>

                {/* Google Button */}
                <button style={buttonStyle} className="border border-white bg-transparent text-white rounded-md p-2 h-11 flex items-center justify-center font-Roboto">
                    <FcGoogle className="w-6 h-6 mr-2" />
                    Continue with Google
                </button>

                {/* Facebook Button */}
                <button style={buttonStyle} className="border border-white bg-transparent text-white rounded-md p-2 h-11 flex items-center justify-center font-Roboto">
                    <span className="bg-blue-600 p-0.5 rounded-full mr-2">
                        <FaFacebookF className="w-5 h-5 text-white" />
                    </span>
                    Continue with Facebook
                </button>

                {/* Email Button */}
                <button style={buttonStyle} className="border border-white bg-transparent text-white rounded-md p-2 h-11 flex items-center justify-center font-Roboto">
                    Continue with Email
                </button>
            </div>

            {/* Sign Up Link */}
            <p className="mt-12 text-lg leading-8 text-neutral-300 font-Roboto">
                Don't have an account?
                <a href="#" className="text-yellow-500 cursor-pointer font-Roboto"> Sign Up</a>
            </p>
            <div className="mt-5 flex flex-col items-center">
                {/* Cancel Button */}
                <button style={buttonStyle} className="mt-10 border border-white bg-transparent text-white rounded-md p-2 h-11 flex items-center justify-center font-Roboto">
                    Cancel
                </button>
            </div>
        </div>
    )
}