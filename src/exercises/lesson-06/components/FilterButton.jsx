export const FilterButton = ({ filter, setFilter, options }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => setFilter(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      <p>Current filter: {filter}</p>
    </div>
  );
};
