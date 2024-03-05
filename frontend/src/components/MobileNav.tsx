import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>Welcome To Lizza.com</SheetTitle>
        <Separator />
        <SheetDescription>
          <Button className="flex-1 font-bold bg-orange-500">Login</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
