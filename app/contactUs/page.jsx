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
      {/* <div className=" mb-14"></div> */}

      <section className="py-8 md:py-16 bg-gray-50">
        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="mt-3 text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-6 max-w-2xl mx-auto text-sm font-bold text-green-900">
            हमें आपसे सुनकर अच्छा लगेगा। कभी भी संपर्क करें।
          </p>
          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-5"></div>
        </div>
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
          src="https://www.google.com/maps?q=Varanasi&output=embed"
          className="w-full h-100 md:h-130 border-0"
          loading="lazy"
        />
      </section>
    </>
  );
};

export default ContactPage;
