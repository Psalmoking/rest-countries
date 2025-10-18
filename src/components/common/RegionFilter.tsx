import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const regions = ["Africa", "Americas", "Antarctic Ocean", "Asia", "Europe", "Oceania", "Polar"];

interface RegionFilterProps {
  selectedRegion?: string | null;
  selectRegion: (region: string | null) => void;
}

const RegionFilter = ({ selectedRegion, selectRegion }: RegionFilterProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex justify-between items-center w-full h-12 max-w-[12rem] border-none shadow-md"
        >
          {selectedRegion ? selectedRegion : "Filter by Region"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={5}
        className={`w-56 rounded-md border bg-background dark:bg-[hsl(209,23%,22%)] border-none shadow-md 
          data-[state=open]:animate-in 
          data-[state=open]:fade-in-0 
          data-[state=open]:zoom-in-95 
          data-[state=closed]:animate-out 
          data-[state=closed]:fade-out-0 
          data-[state=closed]:zoom-out-95 
          duration-150 ease-out shadow-[0_0_10px_rgba(0,0,0,0.15)]`}
      >
        <DropdownMenuItem
          onSelect={() => selectRegion(null)}
          className="text-muted-foreground flex items-center gap-2 cursor-pointer"
        >
          Clear filter
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {regions.map((region) => (
          <DropdownMenuItem
            key={region}
            onSelect={() => selectRegion(region)}
            className="cursor-pointer"
          >
            {region}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RegionFilter;
