import { memo, VFC } from "react";
import { Stack, Text, Input, Modal, ModelContent, ModelOverlay, ModelHeader, ModelcloseButton, ModelBody, FormControl, FormLabel, Spinner, Stack, useDisclosure,  } from "@chakra-ui/react";

type Props = { 
   isOpen: hoolean;
   onClose: () => void;
 }

export const UesrDetailModel: VFC = memo((props) => {
    const { isOpen, onClose } = Props;
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
                        <Input value="ひろき" isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>フルネーム</FormLabel>
                        <Input value="Hiroki Hijikata" isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>MAIL</FormLabel>
                        <Input value="12345@example.com" isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>TEL</FormLabel>
                        <Input value="090-1111-2222" isReadOnly />
                    </FormControl>
                </Stack>
              </ModelBody>
          </ModalContent>
        </Modal>
    )
});