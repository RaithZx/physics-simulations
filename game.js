import Canvas from "./classes/Canvas.js";

export default class Game {
    canvas;
    constructor(width, height) {
        this.canvas = new Canvas(600, 400);
    }


    draw = () => {
        context.fillStyle = 'rgb(200, 0, 0)';
        context.fillRect(10, 10, 50, 50);
    }

}
