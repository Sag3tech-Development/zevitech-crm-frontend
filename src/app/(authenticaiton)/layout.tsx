import { CRMProvider } from "@/context/crm-context";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CRMProvider>{children}</CRMProvider>;
}
