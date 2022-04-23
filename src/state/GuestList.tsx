import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onclick = () => {
    setName('');
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h3>Guest List</h3>
      {guests.map((guest) => {
        return <h4>{guest}</h4>;
      })}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onclick}>Add Guest</button>
    </div>
  );
};
export default GuestList;
