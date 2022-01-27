const SelectBooks = () => {
  const bookTypes = [
    {
      id: 1,
      value: 'Category',
    },
    {
      id: 2,
      value: 'Action',
    },
    {
      id: 3,
      value: 'Science Fiction',
    },
    {
      id: 4,
      value: 'Economy',
    },
    {
      id: 5,
      value: 'Comedy',
    },
  ];
  return (
    <div>
      <select style={{ padding: 10 }} className="select">
        {bookTypes.map((type) => (
          <option key={type.id} value={type.value}>
            {' '}
            {type.value}
            {' '}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBooks;
