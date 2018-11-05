import {TimelineMax} from "gsap";
export default class Triangles {
  constructor() {
    this.canvas = document.querySelector("#triangles");
    this.context = this.canvas.getContext("2d");
    this.context.lineWidth = 1;
    this.context.strokeStyle = '#666666';
    this.context.fillStyle = 'rgba(123, 221, 211, 1)';
    this.tl = new TimelineMax();


    this.cssArray = [246.3,215.3,218.7,184.6,233.6,217.1,
      303.5,199.3,277.1,185.2,285.2,228.5,
      266.2,218.2,245.2,180.8,246.3,215.3,
      285.2,228.5,277.1,185.2,266.2,218.2,
      277.1,185.2,245.2,180.8,266.2,218.2,
      233.6,217.1,218.7,184.6,222.3,223,
      245.2,180.8,218.7,184.6,246.3,215.3,
      222.3,223,195.6,196.2,214.1,233.8,
      179.3,215.4,173.1,242.1,210.9,249.8,
      173.1,313.3,210.9,305.3,210.9,249.8,
      173.1,242.1,173.1,313.3,210.9,249.8,
      214.1,233.8,179.3,215.4,210.9,249.8,
      195.6,196.2,179.3,215.4,214.1,233.8,
      218.7,184.6,195.6,196.2,222.3,223,
      277.8,369.7,246.3,339.8,245.7,374.6,
      265.8,337.1,246.3,339.8,277.8,369.7,
      246.3,339.8,233.7,337.9,245.7,374.6,
      179.5,340.3,210.9,305.3,173.1,313.3,
      303.5,355.9,265.8,337.1,277.8,369.7,
      245.7,374.6,233.7,337.9,219.2,370.8,
      285.5,326.6,265.8,337.1,303.5,355.9,
      222.4,331.8,214.1,321.2,196,359.3,
      196,359.3,214.1,321.2,179.5,340.3,
      219.2,370.8,222.4,331.8,196,359.3,
      214.1,321.2,210.9,305.3,179.5,340.3,
      233.7,337.9,222.4,331.8,219.2,370.8,
      374.9,218.5,345.2,195.3,368,225.4,
      365.5,183.4,345.2,195.3,374.9,218.5,
      365.3,235.4,327.5,236.3,368.2,245.2,
      345.2,195.3,332.2,213.3,368,225.4,
      332.2,213.3,327.5,236.3,365.3,235.4,
      368.2,245.2,344.3,273.1,376.7,252.1,
      344.3,273.1,362.2,283.4,376.7,252.1,
      327.5,236.3,332.1,257.9,368.2,245.2,
      332.1,257.9,344.3,273.1,368.2,245.2,
      368,225.4,332.2,213.3,365.3,235.4,
      444.1,227.2,426.9,182.4,418.9,216.1,
      427.8,318,468.1,317.7,424.6,307.5,
      460.6,196.8,426.9,182.4,444.1,227.2,
      376.7,252.1,362.2,283.4,390.1,257.3,
      426.9,182.4,392.1,179.1,418.9,216.1,
      392.1,179.1,365.5,183.4,384.5,214.4,
      426,326.2,468.1,317.7,427.8,318,
      384.5,214.4,365.5,183.4,374.9,218.5,
      418.9,216.1,392.1,179.1,395.4,213.1,
      395.4,213.1,392.1,179.1,384.5,214.4,
      394.6,340.1,395.4,374.1,410.1,338.3,
      395.4,374.1,424.2,370.5,410.1,338.3,
      410.1,338.3,424.2,370.5,420.3,333.4,
      424.2,370.5,447.2,359.9,420.3,333.4,
      356.5,368.3,395.4,374.1,394.6,340.1,
      420.3,333.4,447.2,359.9,426,326.2,
      320.9,347.9,356.5,368.3,368,335,
      342.1,320.2,320.9,347.9,368,335,
      362.2,283.4,383.3,290.1,390.1,257.3,
      368,335,356.5,368.3,394.6,340.1,
      408,261.7,415.5,300.5,453.1,281.8,
      401.4,295.2,415.5,300.5,408,261.7,
      383.3,290.1,401.4,295.2,408,261.7,
      390.1,257.3,383.3,290.1,408,261.7,
      447.2,359.9,462.6,342.2,426,326.2,
      462.6,342.2,468.1,317.7,426,326.2,
      424.6,307.5,468.1,317.7,453.1,281.8,
      415.5,300.5,424.6,307.5,453.1,281.8,
      527.6,283.4,548.7,290.1,555.6,257.3,
      509.8,273.1,527.6,283.4,542.1,252.1,
      533.7,245.2,509.8,273.1,542.1,252.1,
      497.5,257.9,509.8,273.1,533.7,245.2,
      542.1,252.1,527.6,283.4,555.6,257.3,
      530.8,235.4,497.5,257.9,533.7,245.2,
      533.4,225.4,492.9,236.3,530.8,235.4,
      555.6,257.3,548.7,290.1,573.4,261.7,
      497.6,213.3,492.9,236.3,533.4,225.4,
      540.3,218.5,497.6,213.3,533.4,225.4,
      492.9,236.3,497.5,257.9,530.8,235.4,
      590,307.5,593.2,318,633.5,317.7,
      593.2,318,591.4,326.2,633.5,317.7,
      548.7,290.1,566.8,295.2,573.4,261.7,
      618.6,281.8,590,307.5,633.5,317.7,
      591.4,326.2,628,342.2,633.5,317.7,
      573.4,261.7,566.8,295.2,618.6,281.8,
      566.8,295.2,580.9,300.5,618.6,281.8,
      580.9,300.5,590,307.5,618.6,281.8,
      584.4,216.1,557.6,179.1,560.9,213.1,
      589.6,370.5,612.7,359.9,585.7,333.4,
      560.9,374.1,589.6,370.5,575.5,338.3,
      575.5,338.3,589.6,370.5,585.7,333.4,
      585.7,333.4,612.7,359.9,591.4,326.2,
      521.9,368.3,560.9,374.1,560.1,340.1,
      533.4,335,521.9,368.3,560.1,340.1,
      486.3,347.9,521.9,368.3,533.4,335,
      612.7,359.9,628,342.2,591.4,326.2,
      510.6,195.3,497.6,213.3,540.3,218.5,
      560.1,340.1,560.9,374.1,575.5,338.3,
      560.9,213.1,531,183.4,550,214.4,
      626.1,196.8,592.4,182.4,609.5,227.2,
      531,183.4,510.6,195.3,550,214.4,
      550,214.4,510.6,195.3,540.3,218.5,
      557.6,179.1,531,183.4,560.9,213.1,
      507.6,320.2,486.3,347.9,533.4,335,
      609.5,227.2,592.4,182.4,584.4,216.1,
      592.4,182.4,557.6,179.1,584.4,216.1];
    this.jsArray = [333.2,304.1,371,277.8,333.2,238.7,
      371,313.1,371,277.8,333.2,304.1,
      330.5,321.3,371,313.1,333.2,304.1,
      350.4,359,365.4,340,330.5,321.3,
      365.4,340,371,313.1,330.5,321.3,
      371,277.8,371,234.5,333.2,238.7,
      333.2,238.7,371,208.7,333.2,182.4,
      371,208.7,371,182.4,333.2,182.4,
      371,234.5,371,208.7,333.2,238.7,
      323.4,332.5,350.4,359,330.5,321.3,
      303.6,374.4,328.9,370.5,298.6,340.4,
      271.7,370.1,303.6,374.4,281.2,337.8,
      281.2,337.8,303.6,374.4,298.6,340.4,
      245.1,357.1,271.7,370.1,262.7,328,
      262.7,328,271.7,370.1,281.2,337.8,
      328.9,370.5,350.4,359,323.4,332.5,
      312.4,338.6,328.9,370.5,323.4,332.5,
      298.6,340.4,328.9,370.5,312.4,338.6,
      488.9,338.3,503,370.5,499.2,333.4,
      526.1,359.9,541.4,342.2,504.8,326.2,
      474.3,374.1,503,370.5,488.9,338.3,
      503,370.5,526.1,359.9,499.2,333.4,
      499.2,333.4,526.1,359.9,504.8,326.2,
      446.8,335,435.4,368.3,473.5,340.1,
      435.4,368.3,474.3,374.1,473.5,340.1,
      421,320.2,399.7,347.9,446.8,335,
      504.8,326.2,541.4,342.2,506.6,318,
      399.7,347.9,435.4,368.3,446.8,335,
      473.5,340.1,474.3,374.1,488.9,338.3,
      462.1,290.1,480.2,295.2,486.8,261.7,
      486.8,261.7,480.2,295.2,509.1,268.3,
      469,257.3,462.1,290.1,486.8,261.7,
      423.2,273.1,441,283.4,455.5,252.1,
      441,283.4,462.1,290.1,469,257.3,
      447.1,245.2,423.2,273.1,455.5,252.1,
      455.5,252.1,441,283.4,469,257.3,
      480.2,295.2,494.3,300.5,509.1,268.3,
      503.4,307.5,506.6,318,546.9,317.7,
      506.6,318,541.4,342.2,546.9,317.7,
      542.5,296,503.4,307.5,546.9,317.7,
      532,281.8,503.4,307.5,542.5,296,
      494.3,300.5,503.4,307.5,532,281.8,
      509.1,268.3,494.3,300.5,532,281.8,
      411,213.3,406.4,236.3,444.2,235.4,
      474.3,213.1,444.4,183.4,463.4,214.4,
      463.4,214.4,444.4,183.4,453.7,218.5,
      444.4,183.4,424,195.3,453.7,218.5,
      471,179.1,444.4,183.4,474.3,213.1,
      522.9,227.2,505.8,182.4,497.8,216.1,
      410.9,257.9,423.2,273.1,447.1,245.2,
      505.8,182.4,471,179.1,497.8,216.1,
      497.8,216.1,471,179.1,474.3,213.1,
      453.7,218.5,424,195.3,446.8,225.4,
      444.2,235.4,410.9,257.9,447.1,245.2,
      539.5,196.8,505.8,182.4,522.9,227.2,
      406.4,236.3,410.9,257.9,444.2,235.4,
      424,195.3,411,213.3,446.8,225.4,
      446.8,225.4,411,213.3,444.2,235.4];
    this.word = this.jsArray;
    this.currentWord = 'js';

    this.init();
  }
  init(){
    // this._render();
    this._equalization();
    this._draw(this.word);
    this._redraw();
  }

  _equalization(){
    function padArray(arr,len,fill) {
      //arr = array, len = length, fill = чем заполнить
      return arr.concat(Array(len).fill(fill)).slice(0,len);
    }

    this.cssArray = padArray(this.cssArray, this.cssArray.length, 400);
    this.jsArray = padArray(this.jsArray, this.cssArray.length, 400);
  }
  _render(triangle){
    let context = this.context;

    // the triangle
    context.beginPath();
    context.moveTo(triangle.a.x * 2, triangle.a.y * 2);
    context.lineTo(triangle.b.x * 2, triangle.b.y * 2);
    context.lineTo(triangle.c.x * 2, triangle.c.y * 2);
    context.closePath();

    // the outline

    context.stroke();

    // the fill color

    context.fill();
  }
  _draw(word){
    // clear
    this.context.clearRect(0, 0, 1600, 1200);
    for (let i = 0; i <= word.length; i = i + 6) {
      let triangle = {
        a: {
          x: word[i],
          y: word[i+1]
        },
        b: {
          x: word[i+2],
          y: word[i+3]
        },
        c: {
          x: word[i+4],
          y: word[i+5]
        }
      };
      this._render(triangle);
    }
  }

  _redraw(){
    $('body').on('click', ()=>{
      let self = this;
      let newWord;
      if (this.currentWord === 'css'){
        newWord = this.jsArray;
        this.currentWord = 'js';
      } else if (this.currentWord === 'js') {
        newWord = this.cssArray;
        this.currentWord = 'css';
      }
      newWord.onUpdate = function () {
        self._draw(self.word);
      };
      // this._draw(this.word);
      this.tl
        .to(this.word, .5, newWord);

    });
  }

}