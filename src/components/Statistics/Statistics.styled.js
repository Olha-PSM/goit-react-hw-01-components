import styled from 'styled-components';

export const StatWrapper = styled.section`
  border: 1px solid #e1ddde;
  border-radius: 5px;
  margin: 0px auto;
  background-color: #edeefb;
`;
export const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  background-color: #f7f7f7;
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const StatList = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 0px;
  border-top: 2px solid #e1ddde;
  background-color: rgb(245, 245, 245);
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
`;
export const Label = styled.span`
  padding: 5px;
  font-size: 15px;
  font-weight: 500;
  color: #303030;
`;
export const Percentage = styled.span`
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
`;
