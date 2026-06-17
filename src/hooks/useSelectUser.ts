import { useCallback, useState } from "react";

type Props = {
    id: number;
    users: Array<User>;
    onOpen: () => void;
}

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
    const [selectedUser, setselectedUser] = useState<Use | null>(null);

    const onselectUser = useCallback((props: Props) => {
        const { id, users } = props;
        const targetUser = users.find((user) => user.id === id);
        setselectedUser(targetUser!);
        onOpen();
    },[])
    return { onselectUser, selectedUser }
}