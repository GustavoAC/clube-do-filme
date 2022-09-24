import { Movie } from "../views/MovieView/MovieView";

import entreAbelhasImg from './imgs/entre-abelhas.jpeg';
import timelapseImg from './imgs/lapso-de-tempo.jpeg';

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

const entreAbelhas: Movie = {
    className: 'entreAbelhas',
    mainImage: entreAbelhasImg,
    position: 1,
    score: 10,
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
    position: 1,
    score: 10,
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

const movies = {
    entreAbelhas,
    timelapse
};

export default movies;