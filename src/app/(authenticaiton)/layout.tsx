import { SystemProvider } from "@/context/system-context";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SystemProvider>{children}</SystemProvider>;
}
