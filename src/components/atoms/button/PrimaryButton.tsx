import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = { 
    children: ReactNode;
 }

export const PrimaryButton: VFC = memo((props) => {
    const { children } = Props;
    return (
        <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
            {children}
        </Button>
    )
});