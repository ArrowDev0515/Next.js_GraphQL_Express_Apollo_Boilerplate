/**
 * List Component
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import { UserCard } from './Card';

interface User {
  name: string;
  _id: string;
  email: string;
}

interface ListProps {
  data: [User];
  img: string;
}

const List: React.SFC<ListProps> = props => {
  return (
    <>
      {props.data.map((user: User) => (
        <UserCard key={user._id} user={user} img={props.img} />
      ))}
      <style jsx>
        {`
          .List:hover {
            transform: scale(1.1);
          }
          h2 {
            font-size: 1rem;
            text-align: right;
          }
          img {
            margin-right: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default List;
