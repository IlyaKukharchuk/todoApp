export default function Todo({ value }) {
  return (
    <>
      {value.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
}
