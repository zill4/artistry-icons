import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import Icon from './Icon';
export default class FontAwesomeIcon extends Icon {
    name: string;
    definition: IconDefinition;
    constructor(definition: IconDefinition);
    render<T extends SVGElement>(): T;
}
