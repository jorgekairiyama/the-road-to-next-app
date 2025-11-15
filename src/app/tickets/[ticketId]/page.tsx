import { initialTickets } from "@/src/data";

type TicketPageProps = {
    params: {
        ticketId: string;
    };
};
const TicketPage = async ({ params }: TicketPageProps) => {
    const resolvedParams = await params;

    const ticket = initialTickets.find((ticket) => ticket.id === parseInt(resolvedParams.ticketId));

    if (!ticket) {
        return <h2 className="text-lg">Ticket not found</h2>;
    }
    return (
        <div>
            <h2 className="text-lg">{ticket.title}</h2>
            <p className="text-sm">{ticket.content}</p>
        </div>
    );
};

export default TicketPage;