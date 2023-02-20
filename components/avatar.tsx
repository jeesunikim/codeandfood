export default function Avatar({ author }) {
  return (
    <span className="text-base">
      by <span className="font-bold">{author.node.name}</span>
    </span>
  );
}
