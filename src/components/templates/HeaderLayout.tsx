import { memo, ReactNode, VFC } from "react";

import { Header } from "../organisms/layout/Header";

type Props = {
    children: ReactNode;
}

export const HeaderLayout: VFC = memo((Props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {}
        </>
    )
});
