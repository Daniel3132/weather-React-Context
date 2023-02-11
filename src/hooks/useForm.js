import { useState } from "react";

// Custom hook to manage form state
export const useForm = (initialState = {}) => {
    // State to store the form values
    const [values, setValues] = useState(initialState);

    // Reset the form to its initial state
    const reset = () => {
        setValues(initialState);
    };

    // Handle changes in form input fields
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    // Return the form values, change handler, reset function, and setValues function
    return [values, handleInputChange, reset, setValues];
};