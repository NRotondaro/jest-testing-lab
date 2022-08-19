import Options from './Options';

export default function OrderEntry() {
  return (
    <div>
      <Options optionTypes='scoops' />
      <Options optionTypes='toppings' />
    </div>
  );
}
