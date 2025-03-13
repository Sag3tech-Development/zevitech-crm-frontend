import { SystemProvider } from "@/context/system-context";

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SystemProvider>{children}</SystemProvider>;
}
