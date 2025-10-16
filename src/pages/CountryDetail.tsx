import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import BorderCountryLink from "@/components/common/BorderCountryLink";

const CountryDetail = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        className="bg-white font-light dark:bg-[hsl(209,23%,22%)] rounded-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[hsl(209,26%,28%)] shadow-[0_0_10px_rgba(0,0,0,0.15)] mb-8 w-[7rem] cursor-pointer"
      >
        <ArrowLeft /> Back
      </Button>
      <div className="grid md:grid-cols-2 gap-10 items-center md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <img src="https://flagcdn.com/af.svg" alt="Country Flag" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2>Country Name</h2>
          <div className="grid md:grid-cols-2 gap-10 my-6">
            <div className="space-y-3 text-sm font-light">
              <p>
                <span className="font-medium text-foreground">
                  Native Name:
                </span>{" "}
                {"region"}
              </p>
              <p>
                <span className="font-medium text-foreground">Population:</span>{" "}
                {"region"}
              </p>
              <p>
                <span className="font-medium text-foreground">Region:</span>{" "}
                {"region"}
              </p>
              <p>
                <span className="font-medium text-foreground">Sub Region:</span>{" "}
                {"region"}
              </p>
              <p>
                <span className="font-medium text-foreground">Capital:</span>{" "}
                {"region"}
              </p>
            </div>
            <div className="space-y-3 text-sm font-light">
              <p>
                <span className="font-medium text-foreground">
                  Top Level Domain:
                </span>{" "}
                {"region"}
              </p>
              <p>
                <span className="font-medium text-foreground">Currencies:</span>{" "}
                {"region"}
              </p>
              <p>
                <span className="font-medium text-foreground">Languages:</span>{" "}
                {"region"}
              </p>
            </div>
          </div>
          <div className="space-y-4 md:space-y-0 md:flex items-center md:gap-4 mb-10 md:my-16 md:mb-0">
            <h4 className="font-medium">Border Countries:</h4>
            <div className="w-fulal flex flex-wrap justify-betwdeen gap-2">
              <BorderCountryLink countryName="Country 1" link="#" key={134} />
              <BorderCountryLink countryName="Country 1" link="#" key={134} />
              <BorderCountryLink countryName="Country 1" link="#" key={134} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CountryDetail;
