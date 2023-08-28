import styled from 'styled-components';

const getStatusColor = props => {
  switch (props.status) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return null;
  }
};

export const ItemListFriends = styled.li`
  gap: 20px;

  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 3px 5px 2px 5px rgba(140, 140, 143, 0.2);
`;

export const StatusItem = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${getStatusColor};
`;
