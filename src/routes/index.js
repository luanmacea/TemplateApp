import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// import TabRoutes from "./tab.routes";
import DrawerRoutes from './drawer.routes'
// import StackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  )
}
