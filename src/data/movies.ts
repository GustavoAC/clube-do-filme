import { Movie } from "../views/MovieView/MovieView";

import entreAbelhasImg from './imgs/entre-abelhas.jpeg';
import timelapseImg from './imgs/lapso-de-tempo.jpeg';
import sorryImg from './imgs/sorry.jpeg';
import requiemImg from './imgs/requien.jpg';
import mulhollandImg from './imgs/mulholland.jpeg';
import rrrImg from './imgs/rrr.jpg';
import lisbelaImg from './imgs/lisbela.jpg';
import mononokeImg from './imgs/mononoke.webp';
import tomImg from './imgs/tom.jpg';
import voyeursImg from './imgs/voyeurs.jpg';

import abelhaGif1 from './gifs/entreabelhas/abelha.gif';
import abelhaGif2 from './gifs/entreabelhas/backdoor.gif';
import abelhaGif3 from './gifs/entreabelhas/bbrazil.gif';
import abelhaGif4 from './gifs/entreabelhas/bee.gif';
import abelhaGif5 from './gifs/entreabelhas/beeandflowers.gif';
import abelhaGif6 from './gifs/entreabelhas/drama1.gif';
import abelhaGif7 from './gifs/entreabelhas/invisible.gif';

import timelapseGif1 from './gifs/timelapse/12.gif';
import timelapseGif2 from './gifs/timelapse/image012.gif';
import timelapseGif3 from './gifs/timelapse/photografo.gif';
import timelapseGif4 from './gifs/timelapse/pintor.gif';
import timelapseGif5 from './gifs/timelapse/profissao076.gif';
import timelapseGif6 from './gifs/timelapse/timebanner.gif';

import sorryGif1 from './gifs/sorry to bother/7.gif';
import sorryGif2 from './gifs/sorry to bother/Banner32.gif';
import sorryGif3 from './gifs/sorry to bother/can.gif';
import sorryGif4 from './gifs/sorry to bother/horse.gif';
import sorryGif5 from './gifs/sorry to bother/minotauro_01.gif';
import sorryGif6 from './gifs/sorry to bother/money.gif';
import sorryGif7 from './gifs/sorry to bother/phone.gif';

import mulhollandGif1 from './gifs/mulholland/camera.gif';
import mulhollandGif2 from './gifs/mulholland/camera2.gif';
import mulhollandGif3 from './gifs/mulholland/cameraoy.gif';
import mulhollandGif4 from './gifs/mulholland/CINEDIRECTOR.gif';
import mulhollandGif5 from './gifs/mulholland/giphy.gif';
import mulhollandGif6 from './gifs/mulholland/key.gif';
import mulhollandGif7 from './gifs/mulholland/sleeping.gif';
import mulhollandGif8 from './gifs/mulholland/sweetdream.gif';

import requiemGif1 from './gifs/requiem/21.gif';
import requiemGif2 from './gifs/requiem/needle11a.gif';
import requiemGif3 from './gifs/requiem/noDrugs.gif';
import requiemGif4 from './gifs/requiem/pills.gif';
import requiemGif5 from './gifs/requiem/pills2.gif';
import requiemGif6 from './gifs/requiem/Superpsychologo.gif';

import rrrGif1 from './gifs/rrr/51.gif';
import rrrGif2 from './gifs/rrr/52.gif';
import rrrGif3 from './gifs/rrr/Explosion.gif';
import rrrGif4 from './gifs/rrr/flagindia.gif';
import rrrGif5 from './gifs/rrr/FRENZHUG.gif';
import rrrGif6 from './gifs/rrr/pessoa26.gif';
import rrrGif7 from './gifs/rrr/tiger6.gif';

import lisbelaGif1 from './gifs/lisbela/amooor.gif';
import lisbelaGif2 from './gifs/lisbela/br.gif';
import lisbelaGif3 from './gifs/lisbela/cowboy.gif';
import lisbelaGif4 from './gifs/lisbela/married.gif';
import lisbelaGif5 from './gifs/lisbela/musica87.gif';
import lisbelaGif6 from './gifs/lisbela/zeppelin1.gif';

import mononokeGif1 from './gifs/mononoke/action.gif';
import mononokeGif2 from './gifs/mononoke/archer.gif';
import mononokeGif3 from './gifs/mononoke/jjsb001.gif';
import mononokeGif4 from './gifs/mononoke/kodamani.gif';
import mononokeGif5 from './gifs/mononoke/mononoke.gif';
import mononokeGif6 from './gifs/mononoke/pig1.gif';
import mononokeGif7 from './gifs/mononoke/zelda2.gif';

import tomnafazendaGif1 from './gifs/tomnafazenda/bigcry.gif';
import tomnafazendaGif2 from './gifs/tomnafazenda/canada.gif';
import tomnafazendaGif3 from './gifs/tomnafazenda/cow-dancing.gif';
import tomnafazendaGif4 from './gifs/tomnafazenda/farmer.gif';
import tomnafazendaGif5 from './gifs/tomnafazenda/lovers.gif';
import tomnafazendaGif6 from './gifs/tomnafazenda/profissao095.gif';

import voyeursGif1 from './gifs/voyeurs/blinkeye.gif';
import voyeursGif2 from './gifs/voyeurs/egg.gif';
import voyeursGif3 from './gifs/voyeurs/laserani3.gif';
import voyeursGif4 from './gifs/voyeurs/thief.webp';
import voyeursGif5 from './gifs/voyeurs/voyeur.gif';
import voyeursGif6 from './gifs/voyeurs/voyeurcam.gif';

const entreAbelhas: Movie = {
    className: 'entreAbelhas',
    mainImage: entreAbelhasImg,
    position: 0,
    scores: [6, 7, 8, 8, 8, 8, 9],
    submitter: "Yuri Alessandro",
    title: "Entre Abelhas",
    gifs: [
        { url: abelhaGif1, posTop: '20', posLeft: '10', height: '6' },
        { url: abelhaGif2, posTop: '40', posLeft: '5', height: '12' },
        { url: abelhaGif3, posTop: '60', posLeft: '10', height: '10' },
        { url: abelhaGif4, posTop: '60', posLeft: '90' },
        { url: abelhaGif5, posTop: '70', posLeft: '20' },
        { url: abelhaGif6, posTop: '45', posLeft: '83' },
        { url: abelhaGif7, posTop: '20', posLeft: '87' },
    ]
}

const timelapse: Movie = {
    className: 'timelapse',
    mainImage: timelapseImg,
    position: 0,
    scores: [6, 6, 7, 7, 7, 8, 8, 8, 8],
    submitter: "Lucas Limeira",
    title: "Lapso Temporal",
    gifs: [
        { url: timelapseGif1, posTop: '20', posLeft: '10', height: '10' },
        { url: timelapseGif2, posTop: '60', posLeft: '5' },
        { url: timelapseGif3, posTop: '40', posLeft: '10', height: '12' },
        { url: timelapseGif4, posTop: '18', posLeft: '82' },
        { url: timelapseGif5, posTop: '55', posLeft: '82' },
        { url: timelapseGif6, posTop: '35', posLeft: '73' },
    ]
}

const sorryToBotherYou: Movie = {
    className: 'sorryToBotherYou',
    mainImage: sorryImg,
    position: 0,
    scores: [6, 7, 8, 9, 10, 10, 10],
    submitter: "Gabriel Azevedo",
    title: "Desculpe te Incomodar",
    gifs: [
        { url: sorryGif1, posTop: '20', posLeft: '10', height: '10' },
        { url: sorryGif2, posTop: '60', posLeft: '5' },
        { url: sorryGif3, posTop: '23', posLeft: '30', height: '12' },
        { url: sorryGif4, posTop: '18', posLeft: '82' },
        { url: sorryGif5, posTop: '40', posLeft: '12' },
        { url: sorryGif6, posTop: '40', posLeft: '83' },
        { url: sorryGif7, posTop: '62', posLeft: '80' },
    ]
}

const mulhollandDrive: Movie = {
    className: 'mulhollandDrive',
    mainImage: mulhollandImg,
    position: 0,
    scores: [3, 6, 6, 7, 8, 9],
    submitter: "Thiago César",
    title: "Mulholland Drive",
    gifs: [
        { url: mulhollandGif1, posTop: '20', posLeft: '80', height: '12' },
        { url: mulhollandGif2, posTop: '60', posLeft: '5' },
        { url: mulhollandGif3, posTop: '40', posLeft: '10', height: '12' },
        { url: mulhollandGif4, posTop: '18', posLeft: '10' },
        { url: mulhollandGif5, posTop: '50', posLeft: '45', height: '12' },
        { url: mulhollandGif6, posTop: '35', posLeft: '73' },
        { url: mulhollandGif7, posTop: '65', posLeft: '50' },
        { url: mulhollandGif8, posTop: '62', posLeft: '80' },
    ]
}

const requiem: Movie = {
    className: 'requiem',
    mainImage: requiemImg,
    position: 0,
    scores: [7, 8, 8, 9, 9, 9, 10],
    submitter: "Vanessa",
    title: "Requiem para um sonho",
    gifs: [
        { url: requiemGif1, posTop: '20', posLeft: '10', height: '10' },
        { url: requiemGif2, posTop: '60', posLeft: '5' },
        { url: requiemGif3, posTop: '40', posLeft: '10', height: '12' },
        { url: requiemGif4, posTop: '18', posLeft: '82' },
        { url: requiemGif5, posTop: '55', posLeft: '62' },
        { url: requiemGif6, posTop: '35', posLeft: '73' },
    ]
}

const rrr: Movie = {
    className: 'rrr',
    mainImage: rrrImg,
    position: 0,
    scores: [6, 7, 7, 7, 8, 9, 10, 10],
    submitter: "Gustavo",
    title: "RRR",
    gifs: [
        { url: rrrGif1, posTop: '20', posLeft: '10', height: '10' },
        { url: rrrGif2, posTop: '60', posLeft: '5' },
        { url: rrrGif3, posTop: '40', posLeft: '10', height: '12' },
        { url: rrrGif4, posTop: '18', posLeft: '72' },
        { url: rrrGif5, posTop: '55', posLeft: '82' },
        { url: rrrGif6, posTop: '35', posLeft: '73' },
        { url: rrrGif7, posTop: '44', posLeft: '45' },
    ]
}

const lisbelaEOPrisioneiro: Movie = {
    className: 'lisbelaEOPrisioneiro',
    mainImage: lisbelaImg,
    position: 0,
    scores: [8, 8, 9, 10, 10, 10, 10, 10, 10],
    submitter: "Esther",
    title: "Lisbela e o Prisioneiro",
    gifs: [
        { url: lisbelaGif1, posTop: '20', posLeft: '10', height: '10' },
        { url: lisbelaGif2, posTop: '60', posLeft: '5' },
        { url: lisbelaGif3, posTop: '40', posLeft: '10', height: '12' },
        { url: lisbelaGif4, posTop: '18', posLeft: '82' },
        { url: lisbelaGif5, posTop: '55', posLeft: '82' },
        { url: lisbelaGif6, posTop: '35', posLeft: '73' },
    ]
}

const mononoke: Movie = {
    className: 'mononoke',
    mainImage: mononokeImg,
    position: 0,
    scores: [5, 6, 7, 7, 8, 8, 8, 9, 10],
    submitter: "Pedro Arthur",
    title: "Princesa Mononoke",
    gifs: [
        { url: mononokeGif1, posTop: '20', posLeft: '2' },
        { url: mononokeGif2, posTop: '60', posLeft: '80', height: '20' },
        { url: mononokeGif3, posTop: '70', posLeft: '30' },
        { url: mononokeGif4, posTop: '28', posLeft: '82', height: '10' },
        { url: mononokeGif5, posTop: '30', posLeft: '6', height: '15' },
        { url: mononokeGif6, posTop: '45', posLeft: '79', height: '8' },
        { url: mononokeGif7, posTop: '64', posLeft: '12' },
    ]
}

const tomNaFazenda: Movie = {
    className: 'tomNaFazenda',
    mainImage: tomImg,
    position: 0,
    scores: [7, 7, 7, 8, 8, 9],
    submitter: "Gabriel Sebastian",
    title: "Tom na Fazenda",
    gifs: [
        { url: tomnafazendaGif1, posTop: '60', posLeft: '82', height: '10' },
        { url: tomnafazendaGif2, posTop: '50', posLeft: '5' },
        { url: tomnafazendaGif3, posTop: '30', posLeft: '10', height: '12' },
        { url: tomnafazendaGif4, posTop: '18', posLeft: '82' },
        { url: tomnafazendaGif5, posTop: '20', posLeft: '20' },
        { url: tomnafazendaGif6, posTop: '35', posLeft: '83' },
    ]
}

const voyeurs: Movie = {
    className: 'voyeurs',
    mainImage: voyeursImg,
    position: 0,
    scores: [7, 7, 8, 8, 8, 9, 9, 10],
    submitter: "Márcia",
    title: "The Voyeurs",
    gifs: [
        { url: voyeursGif1, posTop: '20', posLeft: '12' },
        { url: voyeursGif2, posTop: '60', posLeft: '82', height: '18' },
        { url: voyeursGif3, posTop: '70', posLeft: '30' },
        { url: voyeursGif4, posTop: '28', posLeft: '82', height: '10' },
        { url: voyeursGif5, posTop: '35', posLeft: '10', height: '15' },
        { url: voyeursGif6, posTop: '45', posLeft: '79', height: '15' },
    ]
}

const movies = {
    entreAbelhas,
    timelapse,
    sorryToBotherYou,
    mulhollandDrive,
    requiem,
    rrr,
    lisbelaEOPrisioneiro,
    mononoke,
    tomNaFazenda,
    voyeurs
};

export default movies;