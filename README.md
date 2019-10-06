## Challenge 8 del curso de Desarrollo Móvil de Coderhouse

Para poder resolver este challenge seguir los siguientes pasos

1. Hacer un **fork** este repositorio
1. Una vez hecho el **fork**, hacer un clon copiando la URL (en el botón verde) y corriendo `git clone <URL>` en la consola
1. Una vez clonado, moverse dentro de la carpeta del proyecto y correr `npm install` (o `yarn`) para instalar las dependencias necesarias
1. Hacer un **nuevo branch** con tu nombre y apellido para identificarte (ej. `git checkout -b gonzalo-aguirre`)
1. Correr el proyecto usando `expo start`
1. Resolver el enunciado, **haciendo un nuevo commit al resolver cada parte**
1. Hacer un **push** del nuevo branch
1. Desde **github.com** crear un nuevo **pull request** desde ese branch hacia master

### Enunciado

### Configuración Previa

1. Cambiar el `SPOTIFY_CLIENT_ID` con su `clientId`
1. Agregar la nueva `redirectUrl` en la configuración de Spotify 
> Debería ser `https://auth.expo.io/@<TU_USERNAME>/desarrollo-movil-challenge-8`, pero podés verificarlo haciendo un `console.warn('Mi url', redirectUrl)` debajo de la llamada a `AuthSession.getRedirectUrl()` en el archivo `spotify-api-client.js`

#### Integrando Redux
1. Instalar `redux` y `react-redux` 
    > `yarn add redux react-redux` o `npm install redux react-redux`
1. Crear un store (usando `createStore` de `redux`) e integrar ese store en la `App` (usando `Provider` de `react-redux`). Fijate que ya hay una carpeta de `reducers` con un `index.js` que podés usar como `rootReducer`.
    > https://redux.js.org/recipes/configuringyourstore#creating-the-store
1. Conectar el `HomeScreen` usando `connect` de `react-redux` para poder acceder al estado
    > https://redux.js.org/basics/usagewithreact#containers-filterlink-js es un ejemplo


#### Marcando un artista como favorito

1. Crear una nueva acción para marcar un artista como favorito, que sea de tipo `SET_ARTIST_AS_FAVORITE` y reciba el `artistId` en el `payload` de la acción
1. Crear un reducer que tome esa acción y marque como favorito el artista con ese id
    > TIP: podés modificar el objeto de artista que ya tenés en el store ;) 
1. Emitir esa acción al tocar el botón de favorito de cada artista

#### Bonus

1. Preguntar a el/la profe _¿Y por qué no guardo esa información directamente en el `state` del componente?_
1. Pedir que haga un ejemplo más real mostrando otro tab que comparta información con el ya existente