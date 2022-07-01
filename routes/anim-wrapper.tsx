// routes/about.tsx

/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import AnimationWrapper from "../islands/AnimationWrapper.tsx";

export default function AboutPage() {
  return (
    <AnimationWrapper>
      <main className={tw`grid place-content-center`}>
        <h1>About</h1>
        {/*@ts-ignore*/}
        <p className="xyz-in" xyz="fade up big">
          It worked!
        </p>
      </main>
    </AnimationWrapper>
  );
}
