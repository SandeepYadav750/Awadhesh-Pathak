"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    toast.success("Your message has been submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-r from-red-700 to-red-500 py-20 text-white">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>

          <p className="mt-4 text-lg">
            We'd love to hear from you. Reach out anytime.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12">
          {/* Left */}

          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex gap-5 bg-white rounded-xl shadow-md p-6">
                <FaPhoneAlt className="text-red-600 text-3xl" />
                <div>
                  <h4 className="font-bold text-xl">Phone</h4>
                  <p>+91 9739009767</p>
                </div>
              </div>

              <div className="flex gap-5 bg-white rounded-xl shadow-md p-6">
                <FaEnvelope className="text-red-600 text-3xl" />
                <div>
                  <h4 className="font-bold text-xl">Email</h4>
                  <p>admin@pulseconnect.in</p>
                </div>
              </div>

              <div className="flex gap-5 bg-white rounded-xl shadow-md p-6">
                <FaMapMarkerAlt className="text-red-600 text-3xl" />
                <div>
                  <h4 className="font-bold text-xl">Office Address</h4>
                  <p>
                    Awadhesh Pathak Office,
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}

            <div className="flex gap-4 mt-10">
              <a
                href="https://www.facebook.com/Awadheshpathakofficial"
                target="_blank"
                className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-black transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/awadheshpathakofficial/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/awadheshpathk"
                target="_blank"
                className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-black transition"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Form */}

          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8">Send Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                />

                <p className="text-red-600 text-sm mt-1">
                  {errors.name?.message}
                </p>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                />

                <p className="text-red-600 text-sm mt-1">
                  {errors.email?.message}
                </p>
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  {...register("mobile", {
                    required: "Mobile Number is required",
                  })}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                />

                <p className="text-red-600 text-sm mt-1">
                  {errors.mobile?.message}
                </p>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject")}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message..."
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                />

                <p className="text-red-600 text-sm mt-1">
                  {errors.message?.message}
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map */}

      <section>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Lucknow&output=embed"
          className="w-full h-[450px]"
          loading="lazy"
        />
      </section>
    </>
  );
}

export default ContactPage;