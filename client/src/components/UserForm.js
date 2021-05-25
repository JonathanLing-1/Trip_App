import React from 'react'

const UserForm = props => {

    const { submitHandler, changeHandler, errors, user, action} = props;

    return (
        <form onSubmit={ submitHandler }>
            <p>
                {/* {errors.username ?
                    <span>{errors.username}<br></br></span>
                    :
                    ""
                } */}
                <label htmlFor="userName">Username</label>
                <input type="text" name="userName" id="" onChange = {changeHandler}/>
            </p>
            <p>
                {/* {errors.firstName ?
                    <span>{errors.firstName}<br></br></span>
                    :
                    ""
                } */}
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="" onChange = {changeHandler}/>
            </p>
            <p>
                {/* {errors.lastName ?
                <span>{errors.lastName}<br></br></span>
                :
                ""
                } */}
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="" onChange = {changeHandler}/>
            </p>
            <p>
                {/* {errors.email ?
                    <span>{errors.email}<br></br></span>
                    :
                    ""
                } */}
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="" onChange = {changeHandler}/>
            </p>
            <p>
                {/* {errors.password ?
                    <span>{errors.password}<br></br></span>
                    :
                    ""
                } */}
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="" onChange = {changeHandler}/>
            </p>
            <p>
                {/* {errors.confirmPassword ?
                    <span>{errors.confirmPassword}<br></br></span>
                    :
                    ""
                } */}
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="text" name="confirmPassword" id="" onChange = {changeHandler}/>
            </p>
            <input type="submit" value={ action } />
        </form>
    )
}

export default UserForm
