import { useCallback, useState } from "react"; 
import axios from "axios";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
    const history = useHistory();
    const { showMessage } = useMessage();
    const { setLoginUser } = useLoginUser();

    const [loading, setloading] = useState(false);

    const login = useCallback(
        (id: string) => {
            setloading(true);

            axios
            .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
            if (res.data) {
                const isAdim = res.data.id === 10 ? ture : false;
                setLoginUser({...res.data, isAdim });
                showMessage({ title: "ログインしました", status: "success"});
                history.push("/home");
            } else {
                showMessage({ title: "ユーザーが見つかりません", status: "error"});
            }
        }).catch(() => showMessage({ title: "ログインできません", status: "error"})).finally(() => setloading(false));
    },[history, showMessage, setLoginUser]);
    return { login }
}
