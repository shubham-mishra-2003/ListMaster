"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "./ui/sheet";
import { Sidebar } from "@/app/(platform)/(dashboard)/_components/Sidebar";

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block text-black md:hidden"
        size="sm"
        variant="outline"
      >
        <Menu className="h-6 w-6" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose} >
        <SheetContent side="right" className="p-2 pt-10">
          <Sidebar storageKey="t-sidebar-mobile-state"/>
        </SheetContent>
      </Sheet>
    </>
  );
};
