import { memo, useState, useEffect, VFC } from "react";
import { Stack, Text, Input, Modal, ModelContent, ModelOverlay, ModelHeader, ModelFooter, ModelcloseButton, ModelBody, FormControl, FormLabel, Spinner, Stack, useDisclosure,  } from "@chakra-ui/react";

import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton"

type Props = {
   user: User | null; 
   isOpen: hoolean;
   isAdmin?: boolean;
   onClose: () => void;
 }

export const UesrDetailModel: VFC = memo((props) => {
    const { user, isOpen, isAdmin = false, onClose } = Props;

    const [username, setUsername] = useState('');
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');

    useEffect(() => {
        setUsername(user?.username ?? '')
        setname(user?.name ?? '')
        setemail(user?.email ?? '')
        setphone(user?.phone ?? '')
    }, [user])

    const onchangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onchangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onchangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onchangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
    
    const onClickUpdate = () => alert()

    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
          <ModalOverlay />
            <ModalContent pb={2}>
              <ModelHeader>ユーザー詳細</ModelHeader>
              <ModelcloseButton />
              <ModelBody mx={4}>
                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel>名前</FormLabel>
                        <Input value={username}  onChange={onchangeUserName} isReadOnly={!isAdmin} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>フルネーム</FormLabel>
                        <Input value={name} onChange={onchangeName} isReadOnly={!isAdmin} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>MAIL</FormLabel>
                        <Input value={email} onChange={onchangeEmail} isReadOnly={!isAdmin} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>TEL</FormLabel>
                        <Input value={phone} onChange={onchangePhone} isReadOnly={!isAdmin} />
                    </FormControl>
                </Stack>
              </ModelBody>
              {isAdmin && (
                <ModelFooter>
                    <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
                </ModelFooter>
              )}
          </ModalContent>
        </Modal>
    )
});