import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CountryListItemProps {
  flagUrl: string;
  name: string;
  population: string;
  region: string;
  capital: string;
  link: string;
}

const CountryListItem = ({
  flagUrl,
  name,
  population,
  region,
  capital,
  link,
}: CountryListItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-[85%] md:w-full mx-auto"
    >
      <Link to={link}>
        <Card className="p-0 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer bg-background">
          <img
            src={flagUrl}
            alt={`${name} flag`}
            className="h-40 w-full object-cover"
          />

          <CardContent className="space-y-4 py-6 px-5">
            <h4 className="font-bold text-lg text-foreground">{name}</h4>

            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  Population:
                </span>{" "}
                {population}
              </p>
              <p>
                <span className="font-semibold text-foreground">Region:</span>{" "}
                {region}
              </p>
              <p>
                <span className="font-semibold text-foreground">Capital:</span>{" "}
                {capital}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CountryListItem;
