import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import BorderCountryLink from "@/components/common/BorderCountryLink";
import { ProviderRoutePaths } from "@/router/routePaths";
import type { Country } from "@/types";

const CountryDetail = () => {
  const navigate = useNavigate();
  const { countryName } = useParams<{ countryName: string }>();
  const location = useLocation();
  const [country, setCountry] = useState<Country | null>(
    (location.state as Country) ?? null
  );
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(loading);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/data.json");
        const foundCountry =
          response.data.find((c: Country) => c.name === countryName) ?? null;
        setCountry(foundCountry);
        const countriesData = response.data as Country[];

        setBorderCountries(
          foundCountry?.borders
            ? foundCountry.borders.map(
                (code: string) =>
                  countriesData.find((c: Country) => c.alpha3Code === code) ??
                  null
              )
            : []
        );
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [countryName]);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{countryName} | REST Countries Explorer</title>
        <meta
          name="description"
          content="Explore countries around the world with REST Countries Explorer"
        />
      </Helmet>

      <div key={country.name}>
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
            <img
              src={country.flag}
              className="shadow-[0_0_10px_rgba(0,0,0,0.15)]"
              alt="Country Flag"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2>{country.name}</h2>
            <div className="grid md:grid-cols-2 gap-10 my-6">
              <div className="space-y-3 text-sm font-light">
                <p>
                  <span className="font-medium text-foreground">
                    Native Name:
                  </span>{" "}
                  {country.nativeName}
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Population:
                  </span>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-medium text-foreground">Region:</span>{" "}
                  {country.region}
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Sub Region:
                  </span>{" "}
                  {country.subregion}
                </p>
                <p>
                  <span className="font-medium text-foreground">Capital:</span>{" "}
                  {country.capital}
                </p>
              </div>
              <div className="space-y-3 text-sm font-light">
                <p>
                  <span className="font-medium text-foreground">
                    Top Level Domain:
                  </span>{" "}
                  {country.topLevelDomain.join(", ")}
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Currencies:
                  </span>{" "}
                  {country.currencies
                    ?.map((currency) => currency.name)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Languages:
                  </span>{" "}
                  {country.languages
                    ?.map((language) => language.name)
                    .join(", ")}
                </p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-0 md:flex items-start md:gap-4 mb-10 md:my-16 md:mb-0">
              <h4 className="font-medium min-w-fit pt-1">Border Countries:</h4>
              <div className="flex flex-wrap gap-2">
                {country.borders?.length === 0 || !country.borders ? (
                  <span className="text-muted-foreground pt-1">
                    No border countries
                  </span>
                ) : (
                  borderCountries?.map((c) =>
                    c ? (
                      <BorderCountryLink
                        countryName={c.name}
                        link={ProviderRoutePaths.CountryDetails.replace(
                          ":countryName",
                          c.name
                        )}
                        key={c.alpha3Code}
                      />
                    ) : null
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
