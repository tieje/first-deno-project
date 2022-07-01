/** @jsx h */
import { h, Fragment, ComponentChildren } from "preact";

export default function AnimationWrapper({
  children,
}: {
  children: ComponentChildren;
}) {
  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@animxyz/core"
      ></link>
      {children}
    </Fragment>
  );
}
