import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_fsue47a",
        "template_uab6fvw",
        formRef.current,
        "0FnHRP6EW5pTVPjBx"
      )
      .then(
        () => {
          setLoading(false);
          MySwal.fire({
            title: "Success!",
            text: "Your message has been sent.",
            icon: "success",
            background: "#2f2f2f", // Dark background
            color: "#fff", // White text
            confirmButtonColor: "#3085d6", // Button color
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          MySwal.fire({
            title: "Oops...",
            text: "Something went wrong. Please try again.",
            icon: "error",
            background: "#2f2f2f", // Dark background
            color: "#fff", // White text
            confirmButtonColor: "#d33", // Button color
          });
          console.error(error);
        }
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen h-full flex items-center justify-center flex-col">
        <img
          src="src/public/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-full"
        />
        <div className="contact-container py-12 mt-12">
          <h3 className="head-text">Contact me</h3>
          <p className="text-lg text-white-600 mt-3">
            I can’t say enough good things about Adrian. He was able to take our
            complex project requirements and turn them into a seamless,
            functional website. His problem-solving abilities are outstanding.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-16 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="src/public/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
