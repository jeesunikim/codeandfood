export default function Container({ children, isMainPage }) {
  return (
    <div
      className={`container px-4 md:px-0 mx-auto ${
        isMainPage ? "grid gap-8 grid-cols-6" : ""
      }`}
    >
      {children}
    </div>
  );
}
