import { IconDefinition, IconPack } from '@fortawesome/fontawesome-common-types';
import Icon from './Icon';
export default class Icons {
    static icons: {
        [index: string]: Icon;
    };
    static registerIcon(iconConstructor: new () => Icon): void;
    static registerFontAwesomeIcon(definition: IconDefinition): void;
    static registerFontAwesome(definitions: IconPack): void;
    static renderSVG(name: string): SVGElement;
    static renderIconFull(name: string): HTMLElement;
    static renderIcon(name: string): HTMLElement;
    static renderJSX(name: string): any;
    static renderJSXFull(name: string): any;
    static createIconRoot(): SVGSVGElement;
    static defaultCreateElement<T extends Partial<U>, U extends SVGElement>(type: string, props?: T, ...children: Array<any>): U;
    static createElement: typeof Icons.defaultCreateElement;
    static setCreateElement(method: any): void;
}
