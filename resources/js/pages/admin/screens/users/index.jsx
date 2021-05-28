import React, { useState, useEffect } from "react";
import { Table, Button } from "element-react";

import useAxios from "axios-hooks";
import axios from "axios";
import { observer } from "mobx-react";
import UserStore from "../../../../store/UserStore";

function Index() {
    const [{ data, loading, error }, refetch] = useAxios({
        url: "/api/user",
        headers: { Authorization: `Bearer ${UserStore.me?.api_token || ""}` },
    });

    const [list, setlist] = useState([]);
    useEffect(() => {}, [data]);

    return <div className="screen-users">hello this is users page</div>;
}

export default observer(Index);
