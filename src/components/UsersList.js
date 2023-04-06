import { useEffect} from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser, removeUser } from "../store";
import Skeleton from "./Skeleton";
import Button from './Button';
import {useThunk} from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError ] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data } = useSelector((state) => {
        return state.users   //{data: [], isLoading: flase, error: null}
    }); 

    useEffect(() => {    //we make dispatch of fetchUsers happen one time once we render the component on the screen
        doFetchUsers();
        }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser()
    };

    let content;
    if(isLoadingUsers) {
        content =  <Skeleton times={6} className='h-10 w-full'/>;
    } else if(loadingUsersError) {
        content = <div>Error fetching data...</div>
    } else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user} />;
        });
    }

    return <div>
        <div className="flex flex-row items-center justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
                <Button success loading={isCreatingUser} onClick={handleUserAdd}>
                    + Add User
                </Button>

            {creatingUserError && 'error creating user'}
        </div>
        {content}
    </div>;
}

export default UsersList;