import React from "react";
import { NavigationMenuLink } from "../ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ListItem = React.forwardRef((props, ref) => {
  const { title, href, description, className, ...rest } = props;

  return (
    <li className="md:col-span-1">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "group hover:bg-accent hover:shadow-accent hover:border-accent/80 flex min-h-[50px] flex-col justify-center rounded-md border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300",
            className,
          )}
          {...rest}
        >
          <div className="text-center text-sm font-semibold text-gray-800 transition group-hover:text-white">
            {title}
          </div>
          {description && (
            <p className="mt-1 line-clamp-2 text-sm text-gray-500 group-hover:text-gray-700">
              {description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
