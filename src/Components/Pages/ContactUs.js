import { useForm } from "react-hook-form";

function ContactUs() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      id="contact"
      className="py-10 px-4 sm:px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="relative inline-block uppercase font-bold text-2xl sm:text-3xl">
          Contact Us
          <span className="absolute left-1/2 bg-gray-500 -bottom-2 -translate-x-1/2 h-[2px] w-[60px]"></span>
        </h1>
     
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-left text-sm md:text-base">
            Your Name (required)
          </label>
          <input
            id="name"
            {...register("name", {
              required: "Your name is required",
              minLength: {
                value: 3,
                message: "Your name must be at least 3 characters",
              },
              maxLength: {
                value: 100,
                message: "Your name must not exceed 100 characters",
              },
            })}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-red-500 mt-1 text-sm">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 text-left text-sm md:text-base">
            Your Email (required)
          </label>
          <input
            id="email"
            {...register("email", {
              required: "Your email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500 mt-1 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="subject"
            className="mb-1 text-left text-sm md:text-base">
            Subject
          </label>
          <input
            id="subject"
            {...register("subject", {
              minLength: {
                value: 3,
                message: "Your subject must be at least 3 characters",
              },
              maxLength: {
                value: 500,
                message: "Your subject must not exceed 500 characters",
              },
            })}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
            placeholder="Enter the subject"
          />
          {errors.subject && (
            <span className="text-red-500 mt-1 text-sm">
              {errors.subject.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="mb-1 text-left text-sm md:text-base">
            Your Message
          </label>
          <textarea
            id="message"
            {...register("message", {
              minLength: {
                value: 3,
                message: "Your message must be at least 3 characters",
              },
              maxLength: {
                value: 500,
                message: "Your message must not exceed 500 characters",
              },
            })}
            rows="5"
            className="resize-none border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 p-2 w-full"
            placeholder="Enter your message"
          />
          {errors.message && (
            <span className="text-red-500 mt-1 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-gray-700 text-white hover:bg-teal-600 hover:text-black uppercase duration-300 rounded-full p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-teal-500">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
