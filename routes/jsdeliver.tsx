// routes/about.tsx

/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";

export default function AboutPage() {
  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@animxyz/core"
      ></link>
      <main className={tw`grid place-content-center`}>
        <h1>About</h1>
        {/*@ts-ignore*/}
        <p className="xyz-in" xyz="fade up big">
          something
        </p>
      </main>
    </Fragment>
  );
}
