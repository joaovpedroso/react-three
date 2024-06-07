import { FC } from "react";
import * as Style from "./Main.styles";

interface IMain {
    children: React.ReactNode;
}

const Main: FC<IMain> = ({children}: IMain) => (
    <Style.Container>{children}</Style.Container>
);

export {Main};