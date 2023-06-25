import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/action-creators/user';
import { useActions } from '../hooks/useActions';

const UserLists: FC = () => {
    const { users, loading, error } = useTypedSelector(state => state.user)
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        <h1>Идет загрузка...</h1>
    }

    if (error) {
        <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    )
}

export default UserLists;