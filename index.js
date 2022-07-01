import {app} from "./src/servidor.js";

app.listen(3333, () =>  
	console.log('Servidor iniciado na porta 3333')
);