import { useState } from 'react';

// Define the hook `useTemperatureUnitToggle`
export const useTemperatureUnitToggle = initialUnit => {
    // Use the `useState` hook to store the current temperature unit and its value.
    // The initial unit and value are passed in as arguments.
    const [unit, setUnit] = useState({ value: initialUnit.value, type: initialUnit.type });

    // Use the `useState` hook to store the state of the temperature unit toggles.
    // Initially, `celsius` is set to `true` and the others to `false`.
    const [state, setState] = useState({
        kelvin: false,
        celsius: true,
        farenheit: false
    });

    // Define the function `toggleTemperatureUnit` to toggle the temperature unit.
    const toggleTemperatureUnit = unitType => {
        // Get the new unit based on the passed in `unitType` argument.
        // The `newUnit` object maps the `unitType` to the corresponding temperature unit value and type.
        const newUnit = {
            K: { value: initialUnit.kelvin, type: 'K' },
            C: { value: initialUnit.celsius, type: 'C' },
            F: { value: initialUnit.farenheit, type: 'F' },
        }[unitType];

        // Update the current temperature unit using `setUnit`.
        setUnit(newUnit);

        // Update the temperature unit toggle state using `setState`.
        // It first spreads the previous state and then sets the state for the passed in `unitType`.
        setState(prevState => ({
            ...prevState,
            [unitType.toLowerCase()]: true,
            kelvin: unitType === 'K',
            celsius: unitType === 'C',
            farenheit: unitType === 'F',
        }));
    };

    // Return the current temperature unit, toggle state, and `toggleTemperatureUnit` function.
    return [unit, state, toggleTemperatureUnit];
};