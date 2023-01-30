export default function Animal({ animal }) {
  return (
    <>
      <div className="animal-container">
        <p className="animal-name">{animal.name}</p>
        {animal.says}
        <img src={`/animals/${animal.type}.svg`} />
      </div>
    </>
  );
}
