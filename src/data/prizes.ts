import { Prize } from "../views/PrizeView/PrizeView";
import movies from './movies';

import trauma1 from './gifs/trauma/trauma1.gif';
import trauma2 from './gifs/trauma/trauma2.gif';

import friends1 from './gifs/friend/friend1.gif';
import friends2 from './gifs/friend/teamo.gif';

import twist1 from './gifs/twist/engracado73.gif';

import sex1 from './gifs/sex/download.gif';
import sex2 from './gifs/sex/sexflame.gif';

import toot from './gifs/26.gif';
import eye from './gifs/31.gif';
import drag from './gifs/crystldr.gif';
import cube from './gifs/cube.gif';
import dog from './gifs/nextdog2.gif';

import ar from './imgs/ar.jpg';
import nada from './imgs/nadaaesconder.jpg';
import rocky from './imgs/rocky.jpg';

const maisDiscutido: Prize = {
    className: 'maisDiscutido',
    title: 'Prêmio "Traição é Justificável?"',
    subtitle: 'Para Filme Mais Discutido',
    first: movies.voyeurs,
    second: movies.tomNaFazenda,
    third: movies.sorryToBotherYou,
    gifs: [
        { url: dog, posLeft: '8', posTop: '40' },
    ],
}

const maisDepressivo: Prize = {
    className: 'maisDepressivo',
    title: 'Prêmio Passe Livre Para Terapia',
    subtitle: 'Para Filme Mais Depressivo',
    first: movies.requiem,
    second: movies.entreAbelhas,
    third: movies.tomNaFazenda,
    gifs: [
        { url: trauma1, posLeft: '8', posTop: '40' },
        { url: trauma2, posLeft: '82', posTop: '60' }
    ],
}

const maisDivertido: Prize = {
    className: 'maisDivertido',
    title: 'Prêmio Vizinhos Incomodados',
    subtitle: 'Para Filme Mais Divertido',
    first: movies.lisbelaEOPrisioneiro,
    second: movies.rrr,
    third: movies.sorryToBotherYou,
    gifs: [
        { url: drag, posLeft: '78', posTop: '20' }
    ],
}

const melhorComAmigos: Prize = {
    className: 'melhorComAmigos',
    title: 'Prêmio "O Clube Vai Gostar Desse"',
    subtitle: 'Para Melhor de Se Ver Com Amigos',
    first: movies.voyeurs,
    second: movies.rrr,
    third: movies.lisbelaEOPrisioneiro,
    gifs: [
        { url: friends1, posLeft: '8', posTop: '50' },
        { url: friends2, posLeft: '82', posTop: '20' }
    ],
}

const melhorTwist: Prize = {
    className: 'melhorTwist',
    title: 'Prêmio M. Night Shamalala',
    subtitle: 'Para Melhor Plot Twist',
    first: movies.voyeurs,
    second: movies.sorryToBotherYou,
    third: movies.timelapse,
    gifs: [
        { url: twist1, posLeft: '32', posTop: '15' },
        { url: eye, posLeft: '78', posTop: '40' },
    ],
}

const nuncaAcaba: Prize = {
    className: 'nuncaAcaba',
    title: 'Prêmio "O Ar-Condicionado da Nossa Geração"',
    subtitle: 'Para Filme que Nunca Acaba',
    first: movies.mononoke,
    second: movies.rrr,
    third: movies.mulhollandDrive,
    gifs: [],
}

const melhorSexo: Prize = {
    className: 'melhorSexo',
    title: 'Prêmio "EITA BIXO KKKKKKKKKKKKKKKK"',
    subtitle: 'Para Melhor Cena de Sexo',
    first: movies.voyeurs,
    second: movies.mulhollandDrive,
    third: movies.timelapse,
    gifs: [
        { url: sex1, posLeft: '4', posTop: '50' },
        { url: sex2, posLeft: '72', posTop: '20' }
    ],
}

const melhorTrilha: Prize = {
    className: 'melhorTrilha',
    title: 'Prêmio "Para de Assoviar, pô"',
    subtitle: 'Para Melhor Trilha Sonora',
    first: movies.lisbelaEOPrisioneiro,
    second: movies.rrr,
    third: movies.requiem,
    gifs: [
        { url: toot, posLeft: '68', posTop: '10' },
    ],
}

const revisaoS1: Prize = {
    className: 'revisaoS1',
    title: 'Prêmio Revisionismo Histórico',
    subtitle: 'Para Filme Da S1 Que Envelheceu Melhor',
    first: {
        title: 'Ar Condicionado',
        mainImage: ar,
        className: '',
        gifs: [],
        position: 0,
        scores: [],
        submitter: '',
    },
    second: {
        title: 'Nada a Esconder',
        mainImage: nada,
        className: '',
        gifs: [],
        position: 0,
        scores: [],
        submitter: '',
    },
    third: {
        title: 'Rocky Horror Picture Show',
        mainImage: rocky,
        className: '',
        gifs: [],
        position: 0,
        scores: [],
        submitter: '',
    },
    gifs: [
        { url: cube, posLeft: '8', posTop: '10' },
    ],
}

const prizes = [
    maisDiscutido,
    maisDepressivo,
    maisDivertido,
    melhorComAmigos,
    melhorTwist,
    nuncaAcaba,
    melhorTrilha,
    melhorSexo,
    revisaoS1
];

export default prizes;