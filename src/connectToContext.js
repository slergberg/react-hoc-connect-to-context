import React, { useContext } from 'react'

import ContextConnectedComponent from './ContextConnectedComponent'

export default function connectToContext(
  Context,
  mapContextToProps = (c) => c,
) {
  return function contextConnector(Component) {
    return function ContextConnection(props) {
      const contextValues = useContext(Context)
      const contextProps = mapContextToProps(contextValues, props)

      /* eslint-disable react/jsx-props-no-spreading */
      return (
        <ContextConnectedComponent
          Component={Component}
          {...contextProps}
          {...props}
        />
      )
      /* eslint-enable react/jsx-props-no-spreading */
    }
  }
}
