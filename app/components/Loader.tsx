"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="K" transform="translate(35.000000, 35.000000)">
                <motion.text
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  x="-12"
                  y="26"
                  fill="currentColor"
                  fontSize="35px"
                  fontFamily="Consolas"
                >
                SAK
                </motion.text>
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
              />
            </g>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
