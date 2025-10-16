import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

interface RegionFilterProps {
  selectedRegion?: string | null;
  selectRegion: (region: string | null) => void;
}

const RegionFilter = ({ selectedRegion, selectRegion }: RegionFilterProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex justify-between items-center w-full h-12 max-w-[12rem] border-none shadow-md"
        >
          {selectedRegion ? selectedRegion : "Filter by Region"}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={5}
        className={`w-56 rounded-md border bg-background shadow-md 
          data-[state=open]:animate-in 
          data-[state=open]:fade-in-0 
          data-[state=open]:zoom-in-95 
          data-[state=closed]:animate-out 
          data-[state=closed]:fade-out-0 
          data-[state=closed]:zoom-out-95 
          duration-150 ease-out shadow-[0_0_10px_rgba(0,0,0,0.15)]`}
      >
        {regions.map((region) => (
          <DropdownMenuItem key={region} onSelect={() => selectRegion(region)}>
            {region}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RegionFilter;
