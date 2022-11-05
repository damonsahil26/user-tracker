import { useState } from 'react';
import Card from '../UI/Card';
import './User.css';
import UserForm from './UsersForm/UserForm';
import UserList from './UsersList/UserList';
import InvalidModal from '../UI/InvalidModal';

const User = () => {
    const [usersList, updateUsersList] = useState([]);
    const [validState, updateValidState] = useState(true);
    const [validStateMesage, updateValidStateMessage] = useState('');
    const getEnteredUserData = (userData) => {
        updateUsersList((prevState) => {
            return [userData, ...prevState];
        });
    }

    const getInvalidInputModalClickEvent = (isOkayClicked) => {
        if (isOkayClicked === true) {
            updateValidState(true);
        }
    }

    const getFormSateData = (formState) => {
        updateValidState(formState.isValid);
        updateValidStateMessage(formState.message);
    }

    return (
        <div>
            <Card class='users'>
                <UserForm userDataList={getEnteredUserData} formValidationState={getFormSateData} />
            </Card>
            <Card class='added-users'>
            {!validState ? <InvalidModal message={validStateMesage} isOkayClicked={getInvalidInputModalClickEvent} /> : <UserList userListItems={usersList} />}
            </Card>
        </div>
    )
}

export default User;