import { ItemListFriends, StatusItem } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemListFriends>
      <StatusItem status={isOnline}></StatusItem>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name} </p>
    </ItemListFriends>
  );
};
