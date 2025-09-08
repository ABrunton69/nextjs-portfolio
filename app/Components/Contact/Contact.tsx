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
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [buttonText, setbuttonText] = useState("Submit");
  const [showAlert, setShowAlert] = useState(false);
  const [btnDisabled, setButtonStatus] = useState(false);

  function onSubmit(data: FormData) {
    SendToEmail(data);
    reset();
    setbuttonText("Thankyou!");
    setShowAlert(true);
    setButtonStatus(true);

    setTimeout(() => {
      setbuttonText("Submit");
      setShowAlert(false);
      setButtonStatus(false);
    }, 5000);
  }

  return (
    <>
      <div className="py-20 flex items-center justify-center ">
        {/* 2. The form "card" with width constraints and styling */}
        <div className="w-full max-w-xl p-8 mx-auto bg-[#1b2129] rounded-xl shadow-md">
          {showAlert && <AlertMessage />}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* We use space-y-6 on the form for consistent spacing, so mb-5 is no longer needed on each div */}
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
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("name", { required: true })}
              />
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
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("email", { required: true })}
              />
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
                className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div>
              <button
                disabled={btnDisabled}
                className="hover:shadow-form rounded-md bg-[#2563EB] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
