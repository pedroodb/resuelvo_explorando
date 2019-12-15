//Funciones para preguntar por permisos, pedirlo si no lo tiene y que devuelven un booleano
import * as Permissions from 'expo-permissions'

//Lectura y escritura de memoria
async function hasReadWritePermission() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  return (status === 'granted')
}

//Acceso a la camara
async function hasCameraPermission() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA)
  return (status === 'granted')
}

export const hasReadWritePermissionFunction = hasReadWritePermission
export const hasCameraPermissionFunction = hasCameraPermission

export default { hasReadWritePermission, hasCameraPermission }
