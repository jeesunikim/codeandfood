import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./post-body.module.css";

import { useRouter } from "next/dist/client/router";

export default function PostBody({ content, isCodeCategory }) {
  const [activeContent, setActiveContent] = useState("");
  const [tableOfContents, setTableOfContents] = useState(0);

  const codePostRef = useRef(null);
  const router = useRouter();
  const { id } = router.query;

  // const observerRef = useRef(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  let codeContentHeaders;

  function handleIntersect(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setActiveContent(entry.target.innerHTML);
      }

      if (!entry?.isIntersecting && entry?.boundingClientRect.top > 0) {
      }
    });
  }

  console.log("**LOG** activeContent: ", activeContent);

  useEffect(() => {
    codeContentHeaders = codePostRef.current?.querySelectorAll("h2");

    if (codeContentHeaders) {
      setTableOfContents(codePostRef.current?.querySelectorAll("h2"));

      let observer;

      let options = {
        root: null,
        rootMargin: "0px",
        threshold: "0.5",
      };

      observer = new IntersectionObserver(handleIntersect, options);

      codeContentHeaders.forEach((header) => observer.observe(header));
    }
  }, [codePostRef.current, codeContentHeaders]);

  // useEffect(() => {
  //   //add eventlistener to window
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   // remove event on unmount to prevent a memory leak with the cleanup
  //   return () => {
  //     window.removeEventListener("scroll", onScroll, { passive: true });
  //   };
  // }, []);

  if (isCodeCategory) {
    return (
      <div className="max-w-5xl mx-auto lg:grid lg:gap-8 lg:grid-cols-5">
        <div
          ref={codePostRef}
          className={`${styles.content} lg:col-span-4`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="hidden text-md font-semibold lg:block lg:sticky lg:h-screen	lg:top-0 lg:mt-2">
          {Array.from(tableOfContents).map((heading, index) => (
            <div
              className="py-4"
              key={index}
              style={{
                color: heading.innerHTML === activeContent ? "blue" : "black",
              }}
            >
              {heading.innerHTML}
            </div>
          ))}
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
