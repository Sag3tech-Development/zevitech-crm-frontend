"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SearchInput from "@/components/common/search-input";
import { DatePicker } from "@/components/common/date-picker";
import LegalTrademarkOfficeLeadsTable from "@/components/tables/leads/legal-trademark-office-leads-table";

const LegalTrademarkOfficeLeadsSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [filteredInput, setFilteredInput] = useState("");

  const handleSearch = () => {};

  return (
    <Card className="!standard-card-styling">
      <CardHeader className="py-4 border-b border-border">
        <CardTitle className="font-poppins font-medium text-heading text-lg">
          Leads Generated
        </CardTitle>
      </CardHeader>

      <CardContent className="py-5 flex gap-12 flex-col">
        <div className="w-full flex items-center justify-between">
          <SearchInput
            filteredInput={filteredInput}
            setFilteredInput={setFilteredInput}
            placeholderText="Lead"
            onSearch={handleSearch}
          />

          <DatePicker date={selectedDate} setDate={setSelectedDate} />
        </div>

        <LegalTrademarkOfficeLeadsTable
          filteredInput={filteredInput}
          selectedDate={selectedDate}
        />
      </CardContent>
    </Card>
  );
};

export default LegalTrademarkOfficeLeadsSection;
