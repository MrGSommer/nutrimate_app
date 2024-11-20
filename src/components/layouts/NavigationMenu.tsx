import * as React from "react";
import Link from "next/link";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

const menuItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/meal-plans", label: "Meal Plans" },
  { href: "/dashboard/recipes", label: "Recipes" },
  { href: "/dashboard/progress", label: "Progress" },
  { href: "/dashboard/settings", label: "Settings" },
];

export function NavigationMenu() {
  return (
    <NavigationMenuPrimitive.Root className="relative">
      <NavigationMenuPrimitive.List className="flex gap-6">
        {menuItems.map((item) => (
          <NavigationMenuPrimitive.Item key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium hover:text-foreground/80 transition-colors"
            >
              {item.label}
            </Link>
          </NavigationMenuPrimitive.Item>
        ))}
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}