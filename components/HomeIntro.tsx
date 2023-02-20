import { CMS_NAME, CMS_URL } from "../lib/constants";

import CoverImage from "./cover-image";
import SocialMedia from "./SocialMedia";

export default function HomeIntro() {
  return (
    <section className="md:px-5 items-center md:justify-between md:mb-12">
      <div className="relative mb-8">
        <CoverImage
          title="Jeesun Kim"
          staticImage="https://codeandfooddev.wpengine.com/wp-content/uploads/2023/02/home-thumb.jpg"
        />
        <div className="flex flex-col justify-between absolute left-0 right-0 mx-auto -bottom-14 w-4/5 h-32 border-solid border-2 border-gray-900 bg-slate-50 p-4">
          <h2 className="font-mono text-lg font-semibold text-center">
            Jeesun Kim
          </h2>
          <p className="font-serif text-sm text-center">
            developer with many interests ✨
          </p>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
