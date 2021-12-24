import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

type Props = LinkProps & { children: ReactElement; activeClassName: string };

/**
 * @package
 */
export const NavLink = (props: Props) => {
  const { children, activeClassName, ...linkProps } = props;
  const router = useRouter();

  const className =
    linkProps.href === (router.pathname === "/index" ? "/" : router.pathname)
      ? `${activeClassName} ${children.props.className ?? ""}`
      : children.props.className ?? "";

  return <Link {...linkProps}>{cloneElement(children, { className })}</Link>;
};
