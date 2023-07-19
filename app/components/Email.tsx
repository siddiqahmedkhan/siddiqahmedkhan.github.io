import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Email() {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <Link
        href="mailto:shaikabdulkhadar1.shaik@gmail.com"
        className="email-link"
      >
        Mail Me
      </Link>
    </motion.div>
  );
}

export default Email;
