import React from 'react';
import SvgSymbols from '../assets/images/svg-symbols.svg';

const Icon = ({ className, name }) => (
	<svg className={className ? className : 'icon'} role="img"><use xlinkHref={`${SvgSymbols}#${name}`} /></svg>
)

export default Icon;
