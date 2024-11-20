import { UserButton } from "@clerk/nextjs";
import { NavigationMenu } from "@/components/layouts/NavigationMenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <NavigationMenu />
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
} 