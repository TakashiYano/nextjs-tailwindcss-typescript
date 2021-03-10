import cc from "classcat";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { DOMAttributes, ReactNode, VFC } from "react";
import React from "react";

type Common = {
  children: ReactNode;
  variant: "solid" | "outline" | "ghost" | "link";
  className?: string;
  coloredTextDefault?: boolean;
};

type Button = Common & {
  button: boolean;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
};

type Link = Common & { linkProps: LinkProps; external?: boolean };

const isButton = (props: Button | Link): props is Button => {
  return "button" in props;
};

export const Button: VFC<Button | Link> = (props) => {
  const className = cc([
    props.className,
    "inline-flex items-center jsutify-center rounded-full",
    {
      "text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:bg-green-600 focus:ring-green-400":
        props.variant === "solid",
      "border text-green-500 border-green-500 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-300":
        props.variant === "outline",
      "hover:bg-green-50 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-400":
        props.variant === "ghost",
      "hover:underline text-green-500": props.variant === "link",
      "text-green-500": props.coloredTextDefault,
    },
  ]);

  return isButton(props) ? (
    <button type="button" onClick={props.onClick} className={className}>
      {props.children}
    </button>
  ) : (
    <Link {...props.linkProps}>
      <a
        className={className}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined}
      >
        {props.children}
      </a>
    </Link>
  );
};
