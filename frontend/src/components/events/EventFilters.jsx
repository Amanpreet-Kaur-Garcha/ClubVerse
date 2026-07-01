export default function EventFilters({
  category,
  setCategory,
  price,
  setPrice,
}) {
  return (
    <div className="flex gap-5 flex-wrap">

      <select
        className="border rounded-xl px-4 py-3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Workshop</option>
        <option>Hackathon</option>
        <option>Social</option>
      </select>

      <select
        className="border rounded-xl px-4 py-3"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      >
        <option>All</option>
        <option>Free</option>
        <option>Paid</option>
      </select>

    </div>
  );
}