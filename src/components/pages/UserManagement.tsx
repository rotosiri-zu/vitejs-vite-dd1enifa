import { memo, useCallback, useEffect, VFC } from "react";
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { UesrDetailModel } from "../organisms/user/UesrDetailModel";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser"; 

export const UserManagement: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, users, loading } = useAllUsers();
    const { onSelectUser, selectedUser } = useSelectUser();
    const { loginUser } = useLoginUser();
    console.log(loginUser);

    useEffect(() => getUsers(), [])

    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users, onOpen });
    }, [users, onselectUser, onOpen]);

    return (
        <>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }}>
                  {users.map((user) => (
                      <WrapItem key={user.id} mx="auto">
                        <UserCard
                        id={user.id} 
                        imageUrl="https://source.unsplash.com/random" 
                        userName="ひろき" 
                        fullName="Hiroki hijikata"
                        onClick={onClickUser} 
                        />
                      </WrapItem>
                  ))}
                </Wrap>
            )}
           <UesrDetailModel user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose}/>
        </>
    )
});