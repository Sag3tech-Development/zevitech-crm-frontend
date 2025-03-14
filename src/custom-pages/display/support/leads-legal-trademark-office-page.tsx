import React from "react";

import LegalTrademarkOfficeLeadsSection from "@/sections/support/leads/legal-trademark-office-leads-section";

import { SectionalHeading01 } from "@/components/common/sectional-headings";

const LeadsLegalTrademarkOfficePage = () => {
  return (
    <main className="page-layout-standard section-padding-standard">
      <SectionalHeading01
        title="Legal Trademark Office"
        titleColor="text-[#3a56af]"
        subTitle="Leads"
      />
      <LegalTrademarkOfficeLeadsSection />
    </main>
  );
};

export default LeadsLegalTrademarkOfficePage;
