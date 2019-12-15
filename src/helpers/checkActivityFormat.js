//Funcion que devuelve un booleano en funcion de si una actividad responde al formato correspondiente
function checkActivityFormat(activity) {
  return (
    activity.hasOwnProperty('title') &&
    activity.hasOwnProperty('description'))
}

export default checkActivityFormat