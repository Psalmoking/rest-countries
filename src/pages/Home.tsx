import { useState } from "react";

import SearchBar from "@/components/common/SearchBar";
import RegionFilter from "@/components/common/RegionFilter";
import CountryListItem from "@/components/common/CountryListItem";

import { ProviderRoutePaths } from "@/router/routePaths";

import countries from "../../data.json";

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  console.log(countries);

  return (
    <div className="space-y-8">
      <div className="space-y-4 md:flex md:justify-between md:items-center md:space-y-0">
        <SearchBar placeholder="Search for a country..." />
        <RegionFilter
          selectedRegion={selectedRegion}
          selectRegion={setSelectedRegion}
        />
      </div>
      <section className="grid md:grid-cols-4 gap-4 md:gap-10">
        {countries.map((country) => (
          <CountryListItem
            key={country.name}
            name={country.name}
            capital={country.capital ?? ""}
            flagUrl={country.flag}
            population={country.population.toLocaleString()}
            region={country.region}
            link={ProviderRoutePaths.CountryDetails.replace(
              ":countryName",
              country.name
            )}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
