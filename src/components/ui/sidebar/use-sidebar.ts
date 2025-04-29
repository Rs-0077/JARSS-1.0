
import { useContext } from "react";
import { SidebarContext } from "./sidebar-types";
import { sidebarContext } from "./sidebar-provider";

export function useSidebar() {
  const context = useContext(sidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}
