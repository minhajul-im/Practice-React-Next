// eslint-disable-next-line react/prop-types
const Tags = ({ tags }) => {
  const allTags = tags.split(" ");

  return (
    <ul className="tags">
      {allTags.map((tag) => (
        <li className="capitalize" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
