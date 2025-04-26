"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { github } from "../utils/Icons";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";

function Navbar() {
  const router = useRouter();
  const { state, dispatch } = useGlobalContext(); // Assuming dispatch is available for updating state

  // Callback to handle city selection
  const handleCitySelect = (city: string) => {
    // Update global state with the selected city (if needed)
    dispatch({ type: "SET_CITY", payload: city });
    // Optionally, perform other actions (e.g., navigate or fetch data)
  };

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog onCitySelect={handleCitySelect} />

        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />
          <Button
            className="source-code-btn flex items-center gap-2"
            onClick={() => {
              router.push("https://github.com");
            }}
          >
            {github} Source Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;