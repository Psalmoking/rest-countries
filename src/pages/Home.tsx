import { useState } from "react";

import SearchBar from "@/components/common/SearchBar";
import RegionFilter from "@/components/common/RegionFilter";
import CountryListItem from "@/components/common/CountryListItem";

import { ProviderRoutePaths } from "@/router/routePaths";

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
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
        <CountryListItem
          capital="Beijing"
          flagUrl="https://flagcdn.com/af.svg"
          key={1}
          name="China"
          population="484,943,990"
          region="Asia"
          link={ProviderRoutePaths.CountryDetails}
        />
        <CountryListItem
          capital="Beijing"
          flagUrl="https://flagcdn.com/af.svg"
          key={1}
          name="China"
          population="484,943,990"
          region="Asia"
          link="#"
        />
        <CountryListItem
          capital="Beijing"
          flagUrl="https://flagcdn.com/af.svg"
          key={1}
          name="China"
          population="484,943,990"
          region="Asia"
          link="#"
        />
        <CountryListItem
          capital="Beijing"
          flagUrl="https://flagcdn.com/af.svg"
          key={1}
          name="China"
          population="484,943,990"
          region="Asia"
          link="#"
        />
        <CountryListItem
          capital="Beijing"
          flagUrl="https://flagcdn.com/af.svg"
          key={1}
          name="China"
          population="484,943,990"
          region="Asia"
          link="#"
        />
      </section>
    </div>
  );
};

export default Home;
