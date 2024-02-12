import type { ReactNode } from "react";
import * as Styled from "./Title.styled";
import { ThemeProvider, useTheme } from "@emotion/react";
import theme from "./theme";

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Styled.Title>
        <Styled.Text>{title}</Styled.Text>
      </Styled.Title>
    </ThemeProvider>
  );
}

export default Title;
