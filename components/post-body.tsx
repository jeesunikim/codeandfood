import styles from "./post-body.module.css";

export default function PostBody({ content, isCodeCategory }) {
  if (isCodeCategory) {
    return (
      <div className="max-w-5xl mx-auto lg:grid lg:gap-8 lg:grid-cols-5">
        <div
          className={`${styles.content} lg:col-span-4`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="hidden text-md font-semibold lg:block lg:sticky lg:h-screen	lg:top-0 lg:mt-2">
          <div className="py-4">Table of Contents</div>
          <div className="py-4">
            Table of ContentsTable of ContentsTable of Contents Table of
            Contents
          </div>
          <div className="py-4">Table of Contents</div>
          <div className="py-4">Table of Contents</div>
          <div className="py-4">Table of Contents</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
