import { memo, useCallback, useEffect, VFC } from "react";
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { UesrDetailModel } from "../organisms/user/UesrDetailModel";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, users, loading } = useAllUsers();

    useEffect(() => getUsers(), [])

    const onClickUser = useCallback(() => onOpen(), []);

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
                        imageUrl="https://source.unsplash.com/random" 
                        userName="ひろき" 
                        fullName="Hiroki hijikata"
                        onClick={onClickUser} 
                        />
                      </WrapItem>
                  ))}
                </Wrap>
            )}
           <UesrDetailModel isOpen={isOpen} onClose={onClose}/>
        </>
    )
});