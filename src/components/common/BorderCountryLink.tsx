import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface BorderCountryLinkProps {
  countryName: string;
  link: string;
}

const BorderCountryLink = ({ countryName, link }: BorderCountryLinkProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Link to={link}>
        <Button
          className="
            text-xs px-6 py-2 font-light rounded-sm shadow-[0_0_10px_rgba(0,0,0,0.15)]
            bg-white text-black dark:bg-[hsl(209,23%,22%)] dark:text-white
            hover:bg-gray-100 dark:hover:bg-[hsl(209,26%,28%)]
            transition-all duration-300
          "
        >
          {countryName}
        </Button>
      </Link>
    </motion.div>
  );
};

export default BorderCountryLink;
