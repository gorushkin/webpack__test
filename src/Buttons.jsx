// @ts-check
/* eslint no-param-reassign: ["error", { "props": false }] */

import React from 'react';
// import { useImmer } from 'use-immer';
import cn from 'classnames';

// NOTE use web hooks with https://github.com/immerjs/use-immer

// BEGIN (write your solution here)
const renderBtn = (count, id, lastBtn, clickHandler) => {
  const isLast = id === lastBtn;
  const btnClass = cn('btn m-1', {
    'btn-primary': !isLast,
    'btn-success': isLast,
  });
  return (
    <button onClick={clickHandler(id)} key={id} className={btnClass} type="button">
      {count}
    </button>
  );
};

export default class Buttons extends React.Component {
  static defaultProps = {
    count: 3,
  };

  constructor(props) {
    super(props);
    const { count } = this.props;
    this.state = { counts: new Array(count).fill(0), lastBtn: undefined };
  }

  clickHandler = (index) => () => {
    const { counts } = this.state;
    counts[index] += 1;
    this.setState({ counts, lastBtn: index });
  };

  render() {
    const { counts, lastBtn } = this.state;
    return counts.map((itemCount, index) =>
      renderBtn(itemCount, index, lastBtn, this.clickHandler)
    );
  }
}
// END
