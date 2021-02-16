import { useCallback, useState } from 'react';

const useToggle = (boolean: boolean) => {
    const [isLoading, setState] = useState(boolean)
    const toggle = useCallback(() => setState(state => !state), [])

    return { isLoading, toggle }
}

export default useToggle