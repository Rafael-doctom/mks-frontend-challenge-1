import { TypedUseSelectorHook, useSelector } from 'react-redux'

// utilities
import { RootState } from '../store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
