"use client";

import * as React from "react";
import { format } from "date-fns";

import { DatePickerProps } from "@/interfaces/common-component-interfaces";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CalendarIcon } from "lucide-react";

export function DatePicker({ setDate, date }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "h-[40px] rounded-[6px] bg-white border border-border w-[250px] justify-center text-left font-medium !shadow-button-shadow hover:bg-primary font-jetbrains text-heading",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            if (newDate) setDate(newDate);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
