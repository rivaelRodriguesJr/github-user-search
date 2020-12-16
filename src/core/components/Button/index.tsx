import { type } from 'os';
import React from 'react';
import './styles.scss';

type Props = {
  content: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ content, onClick }: Props) => (
  <button onClick={onClick}>
    {content}
  </button>
);

export default Button;
