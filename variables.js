import {
    navegacion,
    sobreMi,
    TipoArchivo,
    archivos,
    redes
} from "./js/data";

const handlerBarsContext = {
    "/index.html": {
        title: "Inicio",
        logo: "/img/libro_abierto.webp",
        navegacion: navegacion,
        sobreMi: sobreMi,
        TipoArchivo: TipoArchivo,
        archivos: archivos,
        redes: redes,
    },
	// "/page/donaciones.html": {
	// 	title: "Donaciones",
	// 	logo: "https://acoes.org/wp-content/uploads/2023/10/LG-FUNDACION-BN-2-2.png",
	// 	navegacion: navegacion,
	// 	btnApadrina: btnApadrina,
	// 	card: card,
	// 	phones: phones,
	// 	footerNavegacion: footerNavegacion,
	// 	redes: redes,
	// },
};

const pageContext = (page) => {
	const context = { ...handlerBarsContext[page] };
	return context;
};
export default pageContext;
