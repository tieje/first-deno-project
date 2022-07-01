/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function AnimPreload() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@animxyz/core"
        ></link>
      </Head>
      <main className={tw`grid place-content-center`}>
        <h1>About</h1>
        {/*@ts-ignore*/}
        <p className="xyz-in" xyz="fade up big">
          It worked!
        </p>
      </main>
    </>
  );
}
