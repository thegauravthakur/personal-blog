import { MDXComponents } from 'mdx/types';

import {
    AnchorElement,
    CodeElement,
    H2Element,
    H3Element,
    H4Element,
    ImageElement,
    PreElement,
} from '../../../../components/ModifiedHTMLElements';

export const elementComponentMapping: MDXComponents = {
    pre: PreElement,
    code: CodeElement,
    h2: H2Element,
    h3: H3Element,
    h4: H4Element,
    img: ImageElement,
    a: AnchorElement,
};
