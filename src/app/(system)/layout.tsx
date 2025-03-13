import { SidebarProvider } from "@/components/ui/sidebar";

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <main className="w-full overflow-hidden">{children}</main>
    </SidebarProvider>
  );
}
