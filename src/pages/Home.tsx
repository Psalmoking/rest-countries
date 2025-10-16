import { useState } from "react";

import SearchBar from "@/components/common/SearchBar";
import RegionFilter from "@/components/common/RegionFilter";
import CountryListItem from "@/components/common/CountryListItem";

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  return (
    <div className="p-4 space-y-8">
      <div className="space-y-4 md:flex md:justify-between md:items-center md:space-y-0">
        <SearchBar placeholder="Search for a country..." />
        <RegionFilter
          selectedRegion={selectedRegion}
          selectRegion={setSelectedRegion}
        />
      </div>
      <section className="grid md:grid-cols-4 gap-6">
        <CountryListItem
          capital="Beijing"
          flagUrl="https://flagcdn.com/w320/af.png"
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
