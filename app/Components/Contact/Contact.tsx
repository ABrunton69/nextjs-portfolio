"use client";

import { FC, useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { SendToEmail } from "@/app/api/SendToEmail";
import AlertMessage from "./AlertMessage";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  // NEW: Destructure 'errors' from formState to display validation messages
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [buttonText, setButtonText] = useState("Submit");
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // NEW: State for loading

  async function onSubmit(data: FormData) {
    setIsSubmitting(true); // NEW: Set submitting state to true
    setButtonText("Sending...");

    try {
      await SendToEmail(data); // Assuming SendToEmail might be async
      reset();
      setButtonText("Thank you!");
      setShowAlert(true);

      setTimeout(() => {
        setButtonText("Submit");
        setShowAlert(false);
        setIsSubmitting(false); // Re-enable the button
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setButtonText("Submit"); // Reset button on error
      setIsSubmitting(false);
      // Optionally, show an error alert here
    }
  }

  return (
    // NEW: Wrapped in a <section> tag for semantic HTML
    <section id="contact" className="py-20">
      <div className="w-full max-w-xl p-8 mx-auto">
        {/* NEW: Added a heading and a paragraph for context */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-400">
            Have a question or want to work together? Leave your details below,
            and I'll get back to you.
          </p>
        </div>

        <div className="bg-[#1b2129] rounded-xl shadow-lg p-8">
          {showAlert && <AlertMessage />}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                // UPDATED: New classes for dark theme and better focus
                className="w-full rounded-md border border-gray-600 bg-gray-800 py-3 px-6 text-base font-medium text-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                {...register("name", { required: true })}
              />
              {/* NEW: Validation error message */}
              {errors.name && (
                <span className="text-red-500 text-sm mt-2 block">
                  This field is required.
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                // UPDATED: New classes for dark theme and better focus
                className="w-full rounded-md border border-gray-600 bg-gray-800 py-3 px-6 text-base font-medium text-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                {...register("email", { required: true })}
              />
              {/* NEW: Validation error message */}
              {errors.email && (
                <span className="text-red-500 text-sm mt-2 block">
                  Please enter a valid email address.
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-white"
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Type your message"
                // UPDATED: New classes for dark theme and better focus
                className="w-full resize-none rounded-md border border-gray-600 bg-gray-800 py-3 px-6 text-base font-medium text-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                {...register("message", { required: true })}
              ></textarea>
              {/* NEW: Validation error message */}
              {errors.message && (
                <span className="text-red-500 text-sm mt-2 block">
                  This field is required.
                </span>
              )}
            </div>
            <div>
              <button
                disabled={isSubmitting} // UPDATED: Use isSubmitting state
                // UPDATED: New classes for better hover and disabled states
                className="hover:shadow-form rounded-md bg-blue-600 hover:bg-blue-700 py-3 px-8 text-base font-semibold text-white outline-none transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
