// routes/about.tsx

/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Data {
  result: string;
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const url = new URL(req.url + ".css");
    const cssResponse = await fetch(url);
    const css = await cssResponse.text();
    const result = css
    return ctx.render({ result });
  },
};
export default function AboutPage({ data }: PageProps<Data>) {
  return (
    <main className={tw`grid place-content-center`}>
      <style>
        {data.result}
      </style>
      <h1>About CSS</h1>
      {/*@ts-ignore*/}
      <p className="xyz-in" xyz="fade up big">animation</p>
    </main>
  );
}
