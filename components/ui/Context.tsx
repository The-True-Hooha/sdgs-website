import React, { createContext, useCallback, useMemo, useReducer } from 'react'

type stateT = {
  displaySidebar: boolean
  displayDropdown: boolean
}

type ActionT =
  | {
      type: 'OPEN_SIDEBAR'
    }
  | {
      type: 'CLOSE_SIDEBAR'
    }

function uiReducer(state: stateT, action: ActionT) {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        displaySidebar: true,
      }
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        displaySidebar: false,
      }
    }
  }
}

const initialState: stateT = {
  displaySidebar: false,
  displayDropdown: false,
}

const UIContext = createContext<stateT | null>(initialState)

const UiContextProvider: React.FunctionComponent<any> = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const openSidebar = useCallback(
    () => dispatch({ type: 'OPEN_SIDEBAR' }),
    [dispatch]
  )
  const closeSidebar = useCallback(
    () => dispatch({ type: 'CLOSE_SIDEBAR' }),
    [dispatch]
  )
  const toggleSidebar = useCallback(
    () =>
      state.displaySidebar
        ? dispatch({ type: 'CLOSE_SIDEBAR' })
        : dispatch({ type: 'OPEN_SIDEBAR' }),
    [dispatch, state.displaySidebar]
  )

  const value = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
    }),
    [closeSidebar, openSidebar, state, toggleSidebar]
  )

  return <UIContext.Provider value={value} {...props} />
}

export const useUIContext = (): any => {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManageUiContext: React.FunctionComponent<{
  children: React.ReactNode
}> = ({ children }): JSX.Element => {
  return <UiContextProvider> {children}</UiContextProvider>
}
