export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start packing your bag 💼✈️</em>
      </p>
    );

  const numitems = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedNum / numitems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️🌍"
          : `💼 You have ${numitems} items on your list, and alraedy packed ${packedNum} (${percentage}%)`}
      </em>
    </footer>
  );
}
