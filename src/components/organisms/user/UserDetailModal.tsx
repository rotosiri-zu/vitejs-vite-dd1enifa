import { memo, VFC } from "react";
import { Stack, Text, Input, Modal, ModelContent, ModelOverlay, ModelHeader, ModelcloseButton, ModelBody, FormControl, FormLabel, Spinner, Stack, useDisclosure,  } from "@chakra-ui/react";

import { User } from "../../../types/api/user";

type Props = {
    user: User | null; 
   isOpen: hoolean;
   onClose: () => void;
 }

export const UesrDetailModel: VFC = memo((props) => {
    const { user, isOpen, onClose } = Props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
          <ModalOverlay />
            <ModalContent pb={6}>
              <ModelHeader>ユーザー詳細</ModelHeader>
              <ModelcloseButton />
              <ModelBody mx={4}>
                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel>名前</FormLabel>
                        <Input value={user?.userName} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>フルネーム</FormLabel>
                        <Input value={user?.name} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>MAIL</FormLabel>
                        <Input value={user?.email} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>TEL</FormLabel>
                        <Input value={user?.phone} isReadOnly />
                    </FormControl>
                </Stack>
              </ModelBody>
          </ModalContent>
        </Modal>
    )
});