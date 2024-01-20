export default function Travel({ childId, parentId, planById, onCompleted }) {
  return (
    <li>
      {planById[childId].title}{" "}
      <button onClick={() => onCompleted(parentId, childId)}>complete</button>
      {planById[childId].childIds.length > 0 && (
        <ol>
          {planById[childId].childIds.map((key) => (
            <Travel
              key={key}
              childId={key}
              planById={planById}
              onCompleted={onCompleted}
              parentId={childId}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
