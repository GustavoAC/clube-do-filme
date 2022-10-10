import React from 'react'

import './KindestView.css';

const jurados = {
  Gustavo: 7.7,
  Vanessa: 8.66,
  Yuri: 7.66,
  Gabriel: 7.5,
  Sebastian: 8.66,
  Esther: 7.7,
  Lucas: 8.42,
  Marcia: 8.125,
  Pedro: 7.85
};

const KindestView = () => {
  const juradosObjs = Object.keys(jurados).map(jurado => ({ jurado, nota: (jurados as any)[jurado] as number }));
  const sortedJurados = juradosObjs.sort((a, b) => b.nota - a.nota);

  return (
    <div className='kindestView'>
      <span className='header'>
        Nossos Jurados Mais e Menos Generosos
      </span>
      <table>
        <tr>
          <th>Jurado</th>
          <th>Média</th>
        </tr>
        {sortedJurados.map(jur => (
          <tr key={jur.jurado}>
            <td>{jur.jurado}</td>
            <td>{jur.nota}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default KindestView