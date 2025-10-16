import { useState } from "react";

import SearchBar from "@/components/common/SearchBar";
import RegionFilter from "@/components/common/RegionFilter";

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  return (
    <section className="p-4 space-y-8">
      <SearchBar placeholder="Search for a country..." />
      <RegionFilter
        selectedRegion={selectedRegion}
        selectRegion={setSelectedRegion}
      />
    </section>
  );
};

export default Home;
