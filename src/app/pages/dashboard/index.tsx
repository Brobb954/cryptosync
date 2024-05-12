import React from "react";
import { WalletCard } from "~/components/walletCard/walletCard";
import { DataTableDemo } from "./table";
import { CardLayout } from "~/components/walletCard/walletCardLayout";

export default function Dashboard() {
  return (
    <div className="justify-top">
      <CardLayout>
        <WalletCard />
        <DataTableDemo />
      </CardLayout>
    </div>
  );
}
