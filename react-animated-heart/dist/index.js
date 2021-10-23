import React from "react";
import { setup, styled } from "goober";
setup(React.createElement);
const HeartUI = styled('div')(({
  isClick,
  styles
}) => [{
  width: '50px',
  height: '50px',
  background: 'url("https://i.imgur.com/OJHhmH9.png")',
  cursor: 'pointer',
  display: 'inline-block'
}, isClick && {
  backgroundPosition: '-1399.5px',
  transition: 'background 1s steps(28)'
}, styles]);
export default function Heart({
  isClick,
  onClick,
  styles
}) {
  return /*#__PURE__*/React.createElement(HeartUI, {
    isClick: isClick,
    onClick: onClick,
    styles: styles
  });
}