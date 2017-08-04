import { SVG_NS } from '../settings';

export default class Score {

  constructor(size, x, y) {
    this.size = size;
    this.x = x;
    this.y = y;
  }

  render(svg, score) {

    let text = document.createElementNS(SVG_NS, 'text')
    text.setAttributeNS(null, 'font-size', this.size)
    text.setAttributeNS(null, 'x', this.x)
    text.setAttributeNS(null, 'y', this.y)
    text.setAttributeNS(null, 'font-family', 'Roboto, open-sans')
    text.setAttributeNS(null, 'fill', 'whitesmoke')
    text.textContent = score;

    svg.appendChild(text);
  }
}