import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {  
    const [doRemoveUSer, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUSer(user);
    };


    // <> </> help us to copy paste the elements inside it without any extra elements si it will not lose its benefits of parent classnames which this thing wrapped in it
    const header = <>         
        <Button danger className='mr-3' loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
        </Button>
        {error && <div>Error deleting user</div>}
        {user.name}
    </>;

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
        );
}   

export default UsersListItem;