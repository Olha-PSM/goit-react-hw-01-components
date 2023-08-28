import styled from 'styled-components';

export const ProfileCard = styled.div`
  border: 1px solid #e1ddde;
  border-radius: 5px;
  width: 430px;

  margin: 30px auto;
  padding: 80px 80px;

  background-color: #edeefb;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px;
  border-radius: 4px 4px 0px 0px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

  background-color: #f7f7f7;
  margin-bottom: 0;
`;
export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  margin-bottom: 30px;
  background-color: #e9e6e6;
  border: 1px solid #c0c0c0;
`;
export const Name = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Tag = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #808080;
`;
export const Location = styled.p`
  color: #808080;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 40px;
`;
export const Stats = styled.ul`
  display: flex;

  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-top: 2px solid #e1ddde;
  background-color: rgb(245, 245, 245);
  padding-top: 0px;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: calc(100% / 3);
  padding: 15px 0;
  background-color: #e6e8fd;

  border-top: 1px solid #d3d3d3;
  &:not(:last-child) {
    border-right: 2px solid #d3d3d3;
  }
`;
export const Label = styled.span`
  margin-bottom: 5 px;
  color: #808080;
  font-size: 20px;
  font-weight: 500;
`;
export const Quantity = styled.span`
  color: #000;
  font-weight: 700;
  font-size: 20px;
`;
