import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          isOnline={isOnline}
          name={name}
          avatar={avatar}
          key={id}
        />
      ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline, id }) {
  const quantity = isOnline ? styles.online : styles.ofline;
  return (
    <li key={id} className={styles.list}>
      <span className={quantity}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

FriendList.propTypes = {
  friend: PropTypes.objectOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
    }),
  ),
};

export default FriendList;
