import etesc from './etesc.json'
import lobbydata from './zonesCont/lobby.json'
import asesordata from './zonesCont/asesor.json'
import noti from './noti.json'
import info from './info.json'
import office from './office.json'
import state from './state.json'
import actors from './actors.json'
import logos from './logos.json'

export const getstate = () => state
//statePiso
export const statePiso = () => state.piso
//statePisoActual
export const statePisoA = () => state.pisoMax

//Principal
export const getLogosExt = () => logos.logos
//Progress
export const getDataProg = () => state.prog

// ETESC
export const getEtesc = (grp, piso) => etesc[grp][piso]
export const getPisoTitle = (piso) => etesc["pisos"][piso]
export const getPisoData = (grp,piso) =>etesc[grp][piso]

//ACTORS
export const getMentores=()=>actors.mentores
// HALLFAME
export const getHFData = () => lobbydata.hallFame

// ASESOR
export const getAsesorSrc = (grp, piso) => asesordata.src[grp][piso]
export const getAsesorVir = () => asesordata.virtual
export const getAsesorFaq = () => asesordata.faqs


// NOTI
export const getNoti = () => noti

// INFO
export const getInfo = () => info
// CONOCE QV
export const getInfoKnow = () => info.conoce

// OFFICE
export const getOffice = () => office

