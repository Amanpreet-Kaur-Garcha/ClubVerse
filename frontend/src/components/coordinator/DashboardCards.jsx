import { CalendarDays, CircleDollarSign, Ticket } from "lucide-react";

export default function DashboardCards({ events }) {
  const total = events.length;

  const free = events.filter(
    (event) => Number(event.price) === 0
  ).length;

  const paid = total - free;

  const cards = [
    {
      title: "Total Events",
      value: total,
      color: "text-indigo-600",
      icon: CalendarDays,
    },
    {
      title: "Free Events",
      value: free,
      color: "text-green-600",
      icon: Ticket,
    },
    {
      title: "Paid Events",
      value: paid,
      color: "text-yellow-500",
      icon: CircleDollarSign,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <Icon
              size={34}
              className={card.color}
            />

            <h3 className="mt-4 text-gray-500">
              {card.title}
            </h3>

            <p className="text-4xl font-bold mt-2">
              {card.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}