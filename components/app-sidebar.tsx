import { BarChart3, Target, FileText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/dashboard",
  },
  {
    title: "Skill Test",
    icon: Target,
    href: "/",
  },
  {
    title: "Internship",
    icon: FileText,
    href: "/internship",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="before:block before:h-20">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem className="h-14" key={item.title}>
              <SidebarMenuButton
                className="rounded-e-full ps-6 h-full hover:text-blue-500"
                asChild
              >
                <Link
                  href={item.href}
                  className="flex items-center font-semibold h-full hover:font-bold gap-3"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
