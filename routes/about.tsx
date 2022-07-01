// routes/about.tsx

/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { ANIM } from "../anim.ts";

const html = `
  <style>
  ${ANIM}
  </style>
  <div class="xyz-in" xyz="fade up big">I will animate in!</div>
  <div class="xyz-out" xyz="fade up big">I will animate out!</div>
  <img
    src="/logo.svg"
    height="100px"
    alt="the fresh logo: a sliced lemon dripping with juice"
    class="xyz-in"
    xyz="big iterate-infinite duration-10 direction-alternate"
  />
`;

export default function AboutPage() {
  return (
    <main className={tw`grid place-content-center`}>
      <h1>About</h1>
      <p dangerouslySetInnerHTML={{ __html: html }}></p>
      {/*@ts-ignore*/}
      <p className="xyz-in" xyz="fade up big"></p>
    </main>
  );
}
