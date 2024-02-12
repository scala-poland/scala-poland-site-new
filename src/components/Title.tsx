import type { ReactNode } from "react";

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps): JSX.Element {
  return <h1>{title}</h1>;
}

export default Title;
