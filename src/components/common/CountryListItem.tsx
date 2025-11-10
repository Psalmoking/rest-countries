import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import type { Country } from "@/types";

interface CountryListItemProps {
  country: Country;
  link: string;
}

const CountryListItem = ({ country, link }: CountryListItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-[85%] md:w-full mx-auto"
    >
      <Link to={link} state={country}>
        <Card className="p-0 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer bg-background border-none dark:bg-[hsl(209,23%,22%)]">
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            className="h-40 w-full object-cover"
          />

          <CardContent className="space-y-2 pb-6 px-5">
            <h4 className="font-bold text-lg text-foreground">
              {country.name}
            </h4>

            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  Population:
                </span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold text-foreground">Region:</span>{" "}
                {country.region}
              </p>
              <p>
                <span className="font-semibold text-foreground">Capital:</span>{" "}
                {country.capital}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CountryListItem;
