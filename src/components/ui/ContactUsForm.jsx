import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormField, resetForm, submitForm } from "../../store/slices/formSlice";
import Swal from "sweetalert2";

const ContactUsForm = () => {
  const dispatch = useDispatch();
  const { name, email, websiteUrl, projectDetails, status, error } =
    useSelector((state) => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ field: name, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      websiteUrl,
      projectDetails,
    };

    dispatch(submitForm(formData)).then((result) => {
      if (result.type === "form/submitForm/fulfilled") {
        dispatch(resetForm());
        Swal.fire({
          title: "Success",
          text: "Your form has been submitted successfully.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (result.type === "form/submitForm/rejected") {
        Swal.fire({
          title: "Error",
          text: error,
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="py-0 sm:py-10 md:py-10 lg:py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-0">
        <div className="w-full md:w-2/5 p-4 relative">
          <img
            src="/images/contact-us/Side-Image.jpg"
            alt="Contact Us"
            className="w-full h-[600px] md:h-[700px] object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-3/5 p-6">
          <p className="text-[34px] sm:text-[44px] lg:text-[44px] font-[700] leading-[55.62px] text-right md:text-right mb-6">
            We'd love to hear
            <br />
            from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Name*"
                required
                onChange={handleChange}
                className="mt-1 px-3 py-5 w-full border-2 border-slate-900 placeholder-style"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={email}
                required
                placeholder="Email*"
                onChange={handleChange}
                className="mt-1 px-3 py-5 w-full border-2 border-slate-900 placeholder-style"
              />
            </div>

            <div>
              <input
                type="url"
                name="websiteUrl"
                value={websiteUrl}
                placeholder="Website URL"
                onChange={handleChange}
                className="mt-1 px-3 py-5 w-full border-2 border-slate-900 placeholder-style"
              />
            </div>

            <div>
              <textarea
                name="projectDetails"
                value={projectDetails}
                required
                minLength="20"
                placeholder="Project Details*"
                rows="5"
                onChange={handleChange}
                className="mt-1 px-3 py-5 w-full border-2 border-slate-900 placeholder-style"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 px-4 bg-neutral-900 text-white font-small hover:bg-neutral-800 disabled:bg-neutral-400 transition-all text-2xl"
            >
              {status === "loading" ? "Sending..." : "Send Proposal"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
