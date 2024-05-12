"use client"
 
import type { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Wallet = {
    asset: string;
    currentWorth: number;
    allocation: number;
    quantity: number;
}
 
export const columns: ColumnDef<Wallet>[] = [

  {
    accessorKey: "asset",
    header: "Asset",
  },
  {
    accessorKey: "currentWorth",
    header: "Price",
  },
  {
    accessorKey: "allocation",
    header: "Allocation",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  }
]