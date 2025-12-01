import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { homePath, ticketsPath } from "../paths";
import { buttonVariants } from "./ui/button";
import { ThemeSwitcher } from "./theme/theme-switcher";


export const Header = () => {
    return (
        <nav className="
          supports-backdrop-blur:bg-background/60
          fixed top-0 left-0 right-0 z-20
          border-b bg-background/95 backdrop-blur
          w-full flex py-2.5 px-5 justify-between
        ">
            <div className="flex align-items gap-x-2">
                <Link
                    href={homePath()}
                    className={buttonVariants({ variant: "ghost" })}
                >
                    <LucideKanban />
                    <h1 className="ml-2 text-lg font-semibold">
                        TicketBounty
                    </h1>
                </Link>
            </div>
            <div className="flex align-items gap-x-2">
                <ThemeSwitcher />
                <Link
                    href={ticketsPath()}
                    className={buttonVariants({ variant: "default" })}
                >
                    Tickets
                </Link>
            </div>
        </nav>
    );
}