import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Carrito from '../../Screens/CartScreens/Carrito';
import { Colors } from '../../Styles/Colors';
import FinalizarCompra from '../../Screens/CartScreens/FinalizarCompra';

const CartNavigator = () => {
  const Stack = createNativeStackNavigator(); {/**Es la ruta inicial */ }

  return (
    <Stack.Navigator
      initialRouteName="Carrito"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTintColor: Colors.primaryTextHintColor
      }}
    >
      <Stack.Screen name="Carrito" component={Carrito} options={{ title: "Carrito", headerShown: true }} />{/** aunque se llame component, lo ubicamos en la carpeta de Screen. */}
      <Stack.Screen name="FinalizarCompra" component={FinalizarCompra} options={{ title: "Finalizar compra", headerShown: true }} />{/** aunque se llame component, lo ubicamos en la carpeta de Screen. */}
    </Stack.Navigator>
  )
}

export default CartNavigator