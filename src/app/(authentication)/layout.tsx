import { SystemProvider } from "@/contexts/system-context";

export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SystemProvider>{children}</SystemProvider>;
}
