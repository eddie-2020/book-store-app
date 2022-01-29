const Select = () => {
  const types = [
    {
      id: 1,
      val: 'Category',
    },
    {
      id: 2,
      val: 'Action',
    },
    {
      id: 3,
      val: 'Sience Fiction',
    },
    {
      id: 4,
      val: 'Economy',
    },
    {
      id: 5,
      val: 'Comedy',
    },
  ];
  return (
    <div>
      <select className="select" style={{ padding: 10 }}>
        {types.map((type) => (
          <option key={type.id} value={type.val}>{type.val}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
