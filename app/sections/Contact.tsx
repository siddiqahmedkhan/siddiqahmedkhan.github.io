import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next</h2>
      <h2 className="contact-sub-title">Get in touch</h2>
      <p className="contact-text">
        My inbox is always open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </p>
      <div className="contact-cta">
        <Button text="Say Hi" link="mailto:siddiqahmedkhann@gmail.com" />
      </div>
      <div className="inspired-by">
        <h2>Portfolio inspired by Brittany Chiang</h2>
      </div>
    </motion.div>
  );
}

export default Contact;
