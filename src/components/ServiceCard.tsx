"use client"
import { motion } from "framer-motion";

export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
   <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
  className="bg-white rounded-2xl shadow p-6 text-center cursor-pointer"
>
  <h3 className="font-semibold text-lg mb-2">{title}</h3>
  <p className="text-gray-600 text-sm">{description}</p>
</motion.div>

  );
}
