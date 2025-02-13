import React from "react";
import { FileText, FileWarning } from "lucide-react";
import { motion } from "framer-motion";

const ActionButtons = () => {
  return (
    <div className="flex gap-4 mb-6">
      <motion.a
        href="https://media.knowde.com/image/upload/v1729178523/STADEX132_PIS_SAG_20231228.pdf20241017-1-uqqif8.pdf?__cld_token__=exp=1739070315~hmac=da80709bb4f21ca1ab7d8a9b5ab9a2f074b8738ad0317dad6dd97c4d17146945&_gl=1*9r8l5z*_gcl_au*OTM3OTM5ODQxLjE3MzU2Nzk4NzU."
        className="flex items-center gap-2 px-4 py-2 border rounded"
        download={true}
        target="_blank"
        whileHover={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FileText className="w-4 h-4" /> Technical Data Sheet
      </motion.a>

      <motion.a
        href="https://media.knowde.com/image/upload/v1729178523/STADEX132_SDS_SAG_20231228.PDF20241017-1-ag7bda.pdf?__cld_token__=exp=1739070514~hmac=2fd3392a991c2fc0b30eff7b8a6f5d26d95cacc37034d1b2247a61bca1439976&_gl=1*uqbn7k*_gcl_au*OTM3OTM5ODQxLjE3MzU2Nzk4NzU."
        className="flex items-center gap-2 px-4 py-2 border rounded"
        download={true}
        target="_blank"
        whileHover={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FileWarning className="w-4 h-4" color="red" /> Safety Data Sheet
      </motion.a>
      {/* <button className="flex items-center gap-2 px-4 py-2 border rounded">
    <FileText className="w-4 h-4" /> Request Document
  </button>
  <button className="flex items-center gap-2 px-4 py-2 border rounded">
    <Mail className="w-4 h-4" /> General Inquiry
  </button> */}
    </div>
  );
};

export default ActionButtons;
