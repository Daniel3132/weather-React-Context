import { useState } from 'react';

export const useTemperatureUnitToggle = initialUnit => {
    const [unit, setUnit] = useState({ value: initialUnit.value, type: initialUnit.type });
    const [state, setState] = useState({
        kelvin: false,
        celsius: true,
        farenheit: false
    });

    const toggleTemperatureUnit = unitType => {
        switch (unitType) {
            case 'K':
                setUnit({ value: initialUnit.kelvin, type: 'K' });
                setState({ celsius: false, farenheit: false, kelvin: true });
                break;
            case 'C':
                setUnit({ value: initialUnit.celsius, type: 'C' });
                setState({ kelvin: false, farenheit: false, celsius: true });
                break;
            case 'F':
                setUnit({ value: initialUnit.farenheit, type: 'F' });
                setState({ kelvin: false, celsius: false, farenheit: true });
                break;
            default:
                break;
        }
    };

    return [unit, state, toggleTemperatureUnit];
};
