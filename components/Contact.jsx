"use client";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ScrollReveal from "./ScrollReveal";
import TypewriterOnScroll from "./TypewriterOnScroll";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      toast.error("Message not sent. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4"
      id="contact"
    >
      <Toaster />
      <section className="flex items-center gap-4 pt-2">
        <TypewriterOnScroll text="Contact Me" as="p" className="text-2xl font-bold border-l-4 border-blue-600 pl-3" />
      </section>

      {/* Contact Section */}
      <section className="flex justify-center items-center gap-12">
        <ScrollReveal direction="left" className="lg:w-1/3 max-lg:hidden">
        <section className="p-1 max-w-fit flex items-center">
          <Image
            className=""
            src="/contact/email.svg"
            alt="email"
            priority={false}
            height={300}
            width={650}
            style={{
              width: "650px",
              height: "auto",
            }}
          />
        </section>
        </ScrollReveal>
        <ScrollReveal direction="right" className="lg:w-2/4 md:w-3/4 sm:w-3/4 w-full max-sm:m-4 max-md:mt-8">
        <section className="w-full p-6 rounded-xl card flex flex-col justify-center items-center">
          <form className="w-full p-1 lg:p-6" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 outline-none"
                placeholder="Enter your name here"
                required
                aria-label="Name Input Field"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 outline-none"
                placeholder="Enter your email here"
                required
                aria-label="Email Input Field"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                rows="5"
                id="message"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 outline-none resize-none"
                placeholder="Enter your message here"
                required
                aria-label="Message Input Field"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              aria-label="Submit Button"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </section>
        </ScrollReveal>
      </section>
    </main>
  );
};
export default Contact;