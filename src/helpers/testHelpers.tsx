import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'

// utilities
import ModalReducer from '../slices/modalSlice'
import { RootState } from '../store/index'

export const renderWithRedux = (
  component: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        modal:ModalReducer
      },
      preloadedState
    }),
    ...renderOptions
  }: {
    preloadedState: RootState
    store?: any
  }
) => {
  const Wrapper = ({ children }: { children: React.ReactElement }) => {
    return (

        <Provider store={store}>{children}</Provider>
    )
  }

  return render(component, { wrapper: Wrapper, ...renderOptions })
}