export default function PostTitle({ children }) {
  return (
    <h1
      className="text-5xl font-bold tracking-tighter text-center"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
