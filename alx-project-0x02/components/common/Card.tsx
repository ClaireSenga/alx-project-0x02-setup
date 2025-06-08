import { FC } from 'react';
import { CardProps } from '../../interfaces';

const Card: FC<CardProps> = ({ title, content }) => (
  <div className="border rounded p-4 shadow">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p>{content}</p>
  </div>
);

export default Card;
