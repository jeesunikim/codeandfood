export default function Tags({ tags }) {
  return (
    <p>
      {tags.edges.map((tag, index) => (
        <span key={index} className="ml-4 font-normal">
          {tag.node.name}
        </span>
      ))}
    </p>
  );
}
