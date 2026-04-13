function SnackList() {
  const snacks = [
    { rank: 4, name: 'Cookies' },
    { rank: 3, name: 'Fruits' },
    { rank: 2, name: 'Candy' },
    { rank: 1, name: 'Chips' },
  ];

  //Sort in descending order
  var sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ul>
      {sortedSnacks.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ul>
  );
}

export default SnackList;
