import PropTypes from 'prop-types';
import {StatBox, Title, StatList, ListLabel, ListPercent} from './Statistics.styled';

  export default function Statistics({ title, stats }) {
    return (
      <StatBox>
        {title && <Title>{title}</Title>}
  
        <StatList>
          {stats.map(el => (
            <li
              key={el.id}
               style={{ backgroundColor: getRandomHexColor() }}
            >
              <ListLabel>{el.label}</ListLabel>
              <ListPercent>{el.percentage}%</ListPercent>
            </li>
          ))}
        </StatList>
      </StatBox>
    );
  }
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };

function getRandomHexColor() {
    let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return bgColor;
  }  