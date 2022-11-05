import './UserList.css'
import UserListItem from './UserListItem';

const UserList = (props) => {
    return (
        <div className='userlist'>
            <ul>
                {
                    props.userListItems.map((user) => (
                        <UserListItem username={user.username} age={user.age} key={user.username + Math.random()} />
                    ))
                }
            </ul>
        </div>
    );
}

export default UserList;