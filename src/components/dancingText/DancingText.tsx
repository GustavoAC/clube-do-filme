import React from 'react'

import a from './img/a.gif';
import b from './img/b.gif';
import c from './img/c.gif';
import d from './img/d.gif';
import e from './img/e.gif';
import f from './img/f.gif';
import g from './img/g.gif';
import h from './img/h.gif';
import i from './img/i.gif';
import j from './img/j.gif';
import k from './img/k.gif';
import l from './img/l.gif';
import m from './img/m.gif';
import n from './img/n.gif';
import o from './img/o.gif';
import p from './img/p.gif';
import q from './img/q.gif';
import r from './img/r.gif';
import s from './img/s.gif';
import t from './img/t.gif';
import u from './img/u.gif';
import v from './img/v.gif';
import w from './img/w.gif';
import x from './img/x.gif';
import y from './img/y.gif';
import z from './img/z.gif';

const dict = {
  a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
};

type Props = {
  text: string;
}

const DancingText: React.FC<Props> = ({ text }) => {
  const imgs: JSX.Element[] = [];
  text.toLowerCase().split('').forEach(letter => {
    if ("abcdefghijklmnopqrstuvwxyz0123456789!?@$&".includes(letter)) {
      if (letter === "?") { letter = "qm" }
      const src = (dict as any)[letter.toLowerCase()];
      imgs.push(<img src={src} alt={letter}/>);
    }
  });

  return (
    <div>{imgs}</div>
  )
}

export default React.memo(DancingText);