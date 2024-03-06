import React from "react";

export function Greet({ text }: { text?: string }) {
  return <div>Hello {text ? text : "Guest"}</div>;
}
