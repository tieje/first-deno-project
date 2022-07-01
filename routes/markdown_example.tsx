// routes/markdown_example

/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";
import { marked } from "Marked";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Data {
  result: string;
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const url = new URL(req.url + ".md");
    const htmlResponse = await fetch(url);
    const html = await htmlResponse.text();
    const result = marked.parse(html);
    return ctx.render({ result });
  },
};

export default function MarkdownExample({ data }: PageProps<Data>) {
  return (
    <main
      className={tw`text-green-500 border border-black underline underline-offset-2`}
      dangerouslySetInnerHTML={{ __html: data.result }}
    ></main>
  );
}
