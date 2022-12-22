//VARIABLES PARA DEFINIR ATRIBUTOS DEL USUARIO
//NO PUEDEN ALMACENAR VALORES VACIOS || NULL || UNDEFINED
//POR DEFECTO DEBE DEFINIRSE COMO NO APLICA


//NOMBRE DEL CLIENTE
const userName = "Juan";

//NÚMERO DE DOCUMENTO DE IDENTIDAD
const userNit = "12214124";

//NÚMERO DE TELÉFONO
const userPhone = "3104878925";

//NÚMERO DE GUÍA
const guideNumber = "32324HJHFFSFSDF";

//TIPO DE USUARIO
const user_type = "registrado";

//CONEXIÓN CON GENESYS, SE DEBE SETEAR EN EL HTML O EL COMPONENTE PARA
//ESTABLECER LA CONEXIÓN CON EL SERVIDOR,  DEBE SER EJECUTADO UNA SOLA VEZ
//AL CARGAR EL DOM, VISTA O COMPONENTE

(function (g, e, n, es, ys) {
  g["_genesysJs"] = e;
  g[e] =
    g[e] ||
    function () {
      (g[e].q = g[e].q || []).push(arguments);
    };
  g[e].t = 1 * new Date();
  g[e].c = es;
  ys = document.createElement("script");
  ys.async = 1;
  ys.src = n;
  ys.charset = "utf-8";
  document.head.appendChild(ys);
})(
  window,
  "Genesys",
  "https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js",
  {
    environment: "use1",
    deploymentId: "9cc37355-435c-4069-9b6b-40a84a1cc5b6",
  }
);

/* FUNCIÓN PARA ENVIAR PARAMETROS A GENESYS 
DESDE CADA BOTÓN O EVENTO */
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

//SE DEBE INICIALIZAR LA FUNCIÓN POR DEFECTO
sendValues_toGenesys();

//EVENTO ASOCIADO A GENESYS PARA ABRIR LA BURBUJA DEL CHAT
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
