import React from "react";

function Footer() {
  return (
    <section className="c-space pt-7 pb-3 border-t flex flex-row items-center justify-between">
      <p className="text-white-500">Privacy Policy</p>

      <div className="flex gap-3">
        <div className="social-icon">
          <img
            src="src/public/assets/github.svg"
            alt="github"
            className="w-6 h-6"
          />
        </div>

        <div className="social-icon">
          <img
            src="src/public/assets/twitter.svg"
            alt="twitter"
            className="w-6 h-6"
          />
        </div>

        <div className="social-icon">
          <img
            src="src/public/assets/instagram.svg"
            alt="instagram"
            className="w-6 h-6"
          />
        </div>
      </div>

      <p className="text-white-500">© 2025 Iresh. All rights reserved.</p>
    </section>
  );
}

export default Footer;
