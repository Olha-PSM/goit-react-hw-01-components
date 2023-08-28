import {
  StatWrapper,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({ title, stats }) => {
  return (
    <StatWrapper>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => {
          return (
            <Item key={item.id} style={{ backgroundColor: randomHexColor() }}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatWrapper>
  );
};
