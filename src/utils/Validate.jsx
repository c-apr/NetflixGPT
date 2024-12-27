
export const checkValidData = (name,email,password) => {

    if (name !== null) {
        const isNameValid = /^[A-Za-z\s'-]+$/.test(name);
        if (!isNameValid) {
            return "Invalid name. Please use only letters and spaces.";
        }
    }
    const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if(!isEmailValid){
        return "Please enter a valid email address";
    }

    if(!isPasswordValid){
        return "Password must contain atleast 8 characters, one uppercase, one lowercase,one special character and one number";
    }


    return null;
};