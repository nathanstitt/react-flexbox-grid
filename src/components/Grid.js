import React, { PropTypes } from 'react';
import createProps from '../createProps';
import style from 'flexboxgrid';

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

export default function Grid(props) {
  const containerClass = style[props.fluid ? 'container-fluid' : 'container'];
  const classNames = [props.className, containerClass];

  return React.createElement(props.tagName || 'div', createProps(propTypes, props, classNames));
}

Grid.propTypes = propTypes;
