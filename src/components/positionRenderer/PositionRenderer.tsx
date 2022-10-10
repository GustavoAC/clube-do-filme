import React from 'react'

import number0 from './numbers/0.gif';
import number1 from './numbers/1.gif';
import number2 from './numbers/2.gif';
import number3 from './numbers/gifnumero3.gif';
import number4 from './numbers/4.gif';
import number5 from './numbers/5.gif';
import number6 from './numbers/6.gif';
import number7 from './numbers/7.gif';
import number8 from './numbers/8.gif';
import number9 from './numbers/9.gif';

type Props = {
    position: number;
}

function getPath(number: number) {
    if (number === 0) return number0;
    if (number === 1) return number1;
    if (number === 2) return number2;
    if (number === 3) return number3;
    if (number === 4) return number4;
    if (number === 5) return number5;
    if (number === 6) return number6;
    if (number === 7) return number7;
    if (number === 8) return number8;
    if (number === 9) return number9;
}

const PositionRenderer: React.FC<Props> = ({ position }) => {
    let currNum = position;
    let index = 0;
    
    const result: JSX.Element[] = [];
    while (currNum > 0) {
        const currentDigit = currNum % 10;
        const path = getPath(currentDigit);
        result.unshift(<img key={index} src={path} alt={path} />);

        currNum = Math.floor(currNum / 10);
        index += 1;
    }

    return <div>{result}</div>;
}

export default React.memo(PositionRenderer);