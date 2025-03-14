"use client";

import React, { useEffect, useMemo, useState } from "react";

import { LegalTrademarkOfficeLeadsTableProps } from "@/interfaces/table/leads-table-interfaces";

import {
  flexRender,
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../../ui/button";

import { FormatDateTime } from "@/utils/format-date-time";

import { Hash } from "lucide-react";
import { ApiRequest } from "@/utils/api-request";

interface Lead {
  formId: string;
  timestamp: string;
  firstName: string;
  lastName: string;
  state: string;
  city: string;
  address: string;
  zipCode: string;
  emailAddress: string;
  phoneNumber: string;
  landlineNumber: string;
  preferredContactTime: string;
}

const LegalTrademarkOfficeLeadsTable = ({
  filteredInput,
  selectedDate,
}: LegalTrademarkOfficeLeadsTableProps) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    setError(null); // Reset error on each request
    try {
      const data = await ApiRequest<{
        success: boolean;
        message: string;
        data: Lead[];
      }>({
        endpoint: "/lto/leads",
        method: "GET",
      });
      setLeads(data.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
      setError("Failed to load leads data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredData = useMemo(() => {
    let filtered = leads;

    if (filteredInput) {
      filtered = filtered.filter((row) =>
        row.formId.toString().includes(filteredInput)
      );
    }

    if (selectedDate instanceof Date && !isNaN(selectedDate.getTime())) {
      filtered = filtered.filter((row) => {
        const [datePart] = row.timestamp.split(" ");
        const [day, month, year] = datePart.split("/").map(Number);
        const rowDate = new Date(year, month - 1, day);

        return (
          rowDate.getFullYear() === selectedDate.getFullYear() &&
          rowDate.getMonth() === selectedDate.getMonth() &&
          rowDate.getDate() === selectedDate.getDate()
        );
      });
    }

    return filtered;
  }, [leads, filteredInput, selectedDate]);

  const allColumns: ColumnDef<(typeof leads)[number]>[] = [
    {
      accessorKey: "formId",
      header: () => (
        <div className="w-full flex items-center gap-2 text-heading font-semibold text-sm">
          <h1>Form ID</h1>
          <Hash size={14} />
        </div>
      ),
    },

    {
      accessorKey: "timestamp",
      header: () => <h1>Timestamp</h1>,
      cell: ({ row }) => <span>{FormatDateTime(row.original.timestamp)}</span>,
    },

    {
      accessorKey: "fullName",
      header: () => (
        <h1 className="text-heading font-semibold text-sm">Name</h1>
      ),
      cell: ({ row }) => (
        <span>
          {row.original.firstName} {row.original.lastName}
        </span>
      ),
    },

    {
      accessorKey: "emailAddress",
      header: () => (
        <h1 className="text-heading font-semibold text-sm">Email</h1>
      ),
    },

    {
      accessorKey: "phoneNumber",
      header: () => (
        <h1 className="text-heading font-semibold text-sm">Number</h1>
      ),
    },

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <h1>Actions</h1>,
    },
  ];

  const table = useReactTable({
    data: filteredData,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  });

  return (
    <div className="h-[600px] flex flex-col justify-between">
      <div className="overflow-auto">
        <Table>
          <TableHeader className="font-poppins tracking-wide text-heading font-semibold">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-border">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="border-border">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={allColumns.length}
                  className="h-24 text-center"
                >
                  {selectedDate
                    ? "No Leads found on this date."
                    : "No Lead ID found."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* TABLE PAGINATION */}
      <div className="flex items-center justify-between py-4">
        <span className="font-semibold font-poppins">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-black hover:bg-black/70 rounded-[2px] !shadow-button-shadow"
          >
            Previous
          </Button>

          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="bg-black hover:bg-black/70 rounded-[2px] shadow-button-shadow"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LegalTrademarkOfficeLeadsTable;
