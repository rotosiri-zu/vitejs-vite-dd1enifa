import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { MenuIconButton } from "react-icons/fa";


type Props = { 
    onOepn: () => void;
 }

export const MenuIconButton: VFC = memo((props) => {
    const { onOpen } = Props;
    return (
        <IconButton 
        aria-label='メニューボタン' 
        size="sm" 
        variant="unstyled" 
        display={{ base: "block", md: "none" }} 
        onClick={onOpen}
        >
          <FaBars />
      </IconButton>
    )
});