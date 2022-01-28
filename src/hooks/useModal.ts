import { useState } from 'react';

export const useModal = (state = false) => {
    const [visible, setVisible] = useState(state);
    function toggle() {
        setVisible(!visible);
    }
    return { toggle, visible };
};
