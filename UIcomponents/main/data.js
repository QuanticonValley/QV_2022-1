import { prefix } from '../../utils/prefix.js';

const data = {
	pages : [
		{
			title: 'Principal',
			link: '/principal',
			src: `${prefix}/imgs/main/Icon_principal.svg`,
			dsc: 'Avance y Estado Actual del Juego',
		},
		{
			title: 'ETESC',
			link: '/etesc',
			src: `${prefix}/imgs/main/Icon_ETESC.svg`,
			dsc: 'Entregables y Retos para cada Semana',
		},
		{
			title: 'Zonas Comunes',
			link: '/zones',
			src: `${prefix}/imgs/main/Icon_zonas_comunes.svg`,
			dsc: 'Contenidos, Asesores, Webinars y mas...',
		},
		{
			title: 'Oficina',
			link: '/office',
			src: `${prefix}/imgs/main/Icon_Oficina.svg`,
			dsc: 'Informacion sobre cada uno de los Equipos',
		},
		{
			title: 'Tabla de posiciones',
			link: '/ranking',
			src: `${prefix}/imgs/main/Icon_tabla.png`,
			dsc: 'Puedes encontrar el avance del juego y la clasificatoria',
		},
		{
			title: 'Actores',
			link: '/actors',
			src: `${prefix}/imgs/main/Icon_actores.svg`,
			dsc: 'Informacion sobre los actores del juego',
		},
		{
			title: 'Perfil',
			link: '/profile',
			src: `${prefix}/imgs/main/Icon_perfil.svg`,
			dsc: 'Todo sobre ti',
		},
		{
			title: 'Acerca del juego',
			link: '/info/about',
			src: `${prefix}/imgs/main/Icon_Informacion.svg`,
			dsc: 'Para Conocer y Saber mas de Quanticon Valley',
		},
	]
}

export const getPages = () => data.pages
