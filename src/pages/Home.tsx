import { useState } from "react";

import SearchBar from "@/components/common/SearchBar";
import RegionFilter from "@/components/common/RegionFilter";
import CountryListItem from "@/components/common/CountryListItem";

import { ProviderRoutePaths } from "@/router/routePaths";

import countries from "../../data.json";

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredCountries = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries;

  const searchFilteredCountries = filteredCountries.filter((country) =>
    country.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="space-y-4 md:flex md:justify-between md:items-center md:space-y-0">
        <SearchBar
          placeholder="Search for a country..."
          value={searchValue}
          onChange={setSearchValue}
        />
        <RegionFilter
          selectedRegion={selectedRegion}
          selectRegion={setSelectedRegion}
        />
      </div>
      <section className="grid md:grid-cols-4 gap-4 md:gap-10">
        {searchFilteredCountries.length > 0 ? (
          searchFilteredCountries.map((country) => (
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
          ))
        ) : searchValue !== "" ? (
          <p className="text-muted-foreground text-center">
            Country does not exist...
          </p>
        ) : null}
      </section>
    </div>
  );
};

export default Home;
