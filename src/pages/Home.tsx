import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import SearchBar from "@/components/common/SearchBar";
import RegionFilter from "@/components/common/RegionFilter";
import CountryListItem from "@/components/common/CountryListItem";
import { ProviderRoutePaths } from "@/router/routePaths";
import type { Country } from "@/types";

const ITEMS_PER_PAGE = 16;

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/data.json");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Filter countries by region
  const filteredCountries = useMemo(() => {
    return selectedRegion
      ? countries.filter((country) => country.region === selectedRegion)
      : countries;
  }, [selectedRegion, countries]);

  // Filter by search
  const searchFilteredCountries = useMemo(() => {
    return filteredCountries.filter((country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [filteredCountries, searchValue]);

  // Pagination Logic
  const totalPages = Math.ceil(searchFilteredCountries.length / ITEMS_PER_PAGE);

  const paginatedCountries = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return searchFilteredCountries.slice(startIndex, endIndex);
  }, [searchFilteredCountries, currentPage]);

  // Reset to first page on filter/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue, selectedRegion]);

  return (
    <div className="space-y-8">
      {/* Search + Filter */}
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

      {/* Country List */}
      <section className="grid md:grid-cols-4 gap-4 md:gap-10 min-h-[20rem]">
        {loading ? (
          // Skeleton grid
          Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
            <div
              key={idx}
              className="space-y-3 rounded-md p-4 shadow-md bg-white dark:bg-[hsl(209,23%,22%)] animate-pulse"
            >
              <Skeleton className="w-full h-32 mb-4 rounded-md" />
              <Skeleton className="w-3/4 h-6 rounded-md" />
              <Skeleton className="w-full h-4 rounded-md" />
              <Skeleton className="w-5/6 h-4 rounded-md" />
              <Skeleton className="w-1/2 h-4 rounded-md" />
            </div>
          ))
        ) : paginatedCountries.length > 0 ? (
          paginatedCountries.map((country) => (
            <CountryListItem
              key={country.name}
              country={country}
              link={ProviderRoutePaths.CountryDetails.replace(
                ":countryName",
                country.name
              )}
            />
          ))
        ) : (
          <p className="text-muted-foreground text-center col-span-full">
            {searchValue !== ""
              ? "Country does not exist..."
              : "No countries found."}
          </p>
        )}
      </section>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-[hsl(209,23%,22%)] text-sm disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages })
            .map((_, index) => index + 1)
            .filter((page) => {
              return (
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1
              );
            })
            .map((page, idx, arr) => {
              const prevPage = arr[idx - 1];
              const showEllipsis = prevPage && page - prevPage > 1;

              return (
                <React.Fragment key={page}>
                  {showEllipsis && (
                    <span className="px-2 text-gray-500">...</span>
                  )}
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-[hsl(209,23%,22%)] hover:bg-gray-300 dark:hover:bg-[hsl(209,26%,28%)]"
                    }`}
                  >
                    {page}
                  </button>
                </React.Fragment>
              );
            })}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-[hsl(209,23%,22%)] text-sm disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
