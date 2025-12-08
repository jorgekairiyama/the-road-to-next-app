import clsx from "clsx";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { ticketPath } from "@/src/paths";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
};
const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    //console.log("Where am I displayed (TicketItem)");
    const detailButton = (
        <Button variant="outline" size="icon" asChild>
            <Link href={ticketPath(ticket.id)}>
                <LucideSquareArrowOutUpRight className="h-4 w-4" />
            </Link>
        </Button>
    );
    return (
        <div
            className={
                clsx("w-full flex gap-x-1", {
                    "max-w-[580px]": isDetail,
                    "max-w-[420px]": !isDetail
                })
            }>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex gap-x-2">
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className="truncate">{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span className="line-clamp-3 whitespace-break-spaces" >
                        {ticket.content}
                    </span>
                </CardContent>
            </Card >
            {isDetail ?? <div className="flex flex-col gap-y-1">{detailButton}</div>}
        </div >
    );
}

export { TicketItem };