import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Menu, Plus } from "lucide-react";
import type { Module, Progress, Segment } from "~/db/schema";
import { NavigationItems } from "./navigation-items";
import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
interface ModuleWithSegments extends Module {
  segments: Segment[];
}

interface MobileNavigationProps {
  modules: ModuleWithSegments[];
  currentSegmentId: number;
  isAdmin: boolean;
  isPremium: boolean;
  progress: Progress[];
}

export function MobileNavigation({
  modules,
  currentSegmentId,
  isAdmin,
  isPremium,
  progress,
}: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden ml-6 mt-4">
          <Menu className="size-6" /> Quick Navigation
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <SheetHeader>
          <SheetTitle>Course Content</SheetTitle>
        </SheetHeader>
        <div className="my-4 px-4">
          <NavigationItems
            modules={modules}
            currentSegmentId={currentSegmentId}
            isAdmin={isAdmin}
            isPremium={isPremium}
            progress={progress}
            onItemClick={() => setOpen(false)}
          />
          {isAdmin && (
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-4"
              onClick={() => {
                router.navigate({ to: "/learn/add" });
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Segment
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
