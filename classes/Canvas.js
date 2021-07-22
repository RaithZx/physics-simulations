export default class Canvas {
    canvas;

    constructor(width, height) {
        this.canvas = this.getCanvas();

        this.setWidth(width);
        this.setHeight(height);
    }

    setWidth = (width) => {
        this.canvas.width = width;
    }
    setHeight = (height) => {
        this.canvas.height = height;
    }

    getCanvas = () => {
        let canvasElement =  document.getElementsByTagName("canvas")[0];
        console.log(canvasElement);
        return canvas;
    }
}