//Funciones para preguntar por permisos, pedirlo si no lo tiene y que devuelven un booleano

//Lectura y escritura de memoria
async function hasReadWritePermission() {
  const { Permissions } = Expo
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  return (status === 'granted')
}

export default hasReadWritePermission
