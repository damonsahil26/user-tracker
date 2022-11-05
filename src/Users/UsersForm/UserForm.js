import { useState } from 'react'
import './UserForm.css'

const UserForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const onAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const onUsernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let user = {
            username: enteredUsername,
            age: enteredAge
        }

        let formState = {
            isValid: true,
            message: 'No need for modal'
        }

        if (user.username.trim() === '' || user.age.toString().trim() === '') {
            formState.isValid = false;
            formState.message = 'Username or age can\'t be empty';
            props.formValidationState(formState);
            return;
        }

        if (user.age < 18) {
            formState.isValid = false;
            formState.message = 'Age can\'t be less than 18';
            props.formValidationState(formState);
            return;
        }

        if (user.age > 65) {
            formState.isValid = false;
            formState.message = 'Age can\'t be greater than 65';
            props.formValidationState(formState);
            return;
        }

        props.userDataList(user);
        resetForm();
    }

    const resetForm = () => {
        setEnteredAge('');
        setEnteredUsername('');
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='input'>
                <label>Username</label>
                <input value={enteredUsername} type='text' onChange={onUsernameChangeHandler} />
            </div>
            <div className='input'>
                <label>Age (in years)</label>
                <input value={enteredAge} type='number' onChange={onAgeChangeHandler} />
            </div>
            <div className='input'>
                <button type='submit'>Add User</button>
            </div>
        </form>
    )

}

export default UserForm;