import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Progress } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';

const propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  smallText: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  invert: PropTypes.bool,
};

const defaultProps = {
  header: 'container-name',
  mainText: 'image',
  smallText: 'created-date',
  // color: '',
  id: '',
  invert: false,
};

class WidgetContainer extends Component {
  render() {
    const { className, cssModule, header, mainText, smallText, color, id, children, invert, ...attributes } = this.props;

    // demo purposes only
    // const progress = { style: '', color: color, value: value };
    const card = { style: '', bgColor: '' };

    if (invert) {
      // progress.style = 'progress-white';
      // progress.color = '';
      card.style = 'text-white';
      card.bgColor = 'bg-' + color;
    }

    const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);
    // progress.style = classNames('progress-xs my-3', progress.style);

    return (
      <Card className={classes} {...attributes}>
        <CardBody>
          <div className="h4 m-0">{header}</div>
          <div>{mainText}</div>
          {/* <Progress className={progress.style} color={progress.color} value={progress.value} /> */}
          <small className="text-muted">{id}</small>
          <div>{children}</div>
        </CardBody>
      </Card>
    );
  }
}

WidgetContainer.propTypes = propTypes;
WidgetContainer.defaultProps = defaultProps;

export default WidgetContainer;
