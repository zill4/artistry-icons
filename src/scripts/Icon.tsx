export default abstract class Icon {
    name: string;
    abstract render<T extends SVGElement>(): T;
}