# 脷ltima Milla

## Para ejecutar el archivo es necesario hacer uso de un servidor, en este caso se utilz贸 live server de VS 馃憠 `no es necesario descargar para su implementaci贸n`


## Variables para capturar datos del usuario desde el dominio del cliente
> Las variables utilizadas no deben definirse con valores vacios, por el contrario; se debe garantizar que los valores por defecto sea muestren como N/A, No aplica, etc.
```js
const userName = "Juan";
const userNit = "123123123";
const userPhone = "1233242342";
const guideNumber = "NO APLICA";
const user_type = "No registrado";
```
# Funci贸n para definir atributos del usuario
> Genesys Cloud cuenta con el m茅todo `Genesys` para enviar informaci贸n a los flujos de IVR y posteriormente ser gestionados por medio de un  `Get Participant Data`. 
```js
const sendValues_toGenesys = () => {
  Genesys("command", "Database.set", {
    messaging: {
      customAttributes: {
        user: userName,
        nit: userNit,
        phone: userPhone,
        guide: guideNumber,
        type: user_type,
      },
    },
  });
};
```
# Evento asociado al bot贸n de novedades en el env铆o
> Por medio de esta funci贸n se invoca un m茅todo para abrir y cerrar el contenedor del chat, adicionalmente; se llama a la funci贸n `sendValues_toGenesys` para posteriormente enviar los atributos del usuario a Genesys Cloud.

```js
function toggleMessenger() {
  Genesys(
    "command",
    "Messenger.open",
    {},

    function (o) {}, // if resolved
    function (o) {
      // if rejected
      Genesys("command", "Messenger.close");
    }
  );
}
```
