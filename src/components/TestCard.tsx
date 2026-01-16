"use client"
  import { motion } from "framer-motion";

  export default function TestCard({
    name,
    sample,
    duration,
    price,
  }: {
    name: string;
    sample: string;
    duration: string;
    price: string;
  }) {
    return (
      <motion.div
        className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <h3 className="font-semibold text-lg mb-4">{name}</h3>
        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>
            <strong>Sample:</strong> {sample}
          </li>
          <li>
            <strong>Duration:</strong> {duration}
          </li>
          <li>
            <strong>Price:</strong> {price}
          </li>
        </ul>
        <a
          href="/book-test"
          className="block text-center bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          Book Test
        </a>
      </motion.div>
    );
  }
