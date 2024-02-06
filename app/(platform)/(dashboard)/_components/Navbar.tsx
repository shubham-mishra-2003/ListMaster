import Logo from "@/components/Logo";
import { MobileSidebar } from "@/components/mobile-footer";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed z-50 top-0 flex justify-between items-center w-full px-3 md:px-6 p-4 bg-black text-white">
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-sm block md:hidden"
        >
          <Plus className="h-4 w-4 text-black" />
        </Button>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="rounded-sm hidden md:block h-auto py-1.5 text-black px-2"
        >
          Create
        </Button>
        <div className="ml-auto flex items-center gap-x-2 bg-white p-1 rounded-lg">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organisation/:id"
            afterSelectOrganizationUrl="/organisation/:id"
            afterLeaveOrganizationUrl="/organisation-select"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </div>
      <MobileSidebar />
    </div>
  );
};

export default Navbar;
