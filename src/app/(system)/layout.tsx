import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layouts/app-sidebar";
import Header from "@/components/layouts/header";

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full overflow-hidden">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
