export default function Todo({ value }) {
  return (
    <>
      {value.map((item) => (
        <div
          style={{
            border: "3px solid red",
            margin: "10px 0",
            background: "lightgreen",
          }}
        >
          <p>{item}</p>
        </div>
      ))}
    </>
  );
}
