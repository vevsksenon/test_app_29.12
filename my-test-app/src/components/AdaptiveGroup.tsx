import React, {useState} from 'react';


const AdaptiveGroup: React.FC = (props) => {
  const [rowDirection, setRowDirection] = useState(true);
  const changeDirection = () => {
    setRowDirection(!rowDirection);
  };

  return (
    <>
      <div style={{cursor: 'pointer'}} onClick={changeDirection}>Нажми меня</div>
      <div style={{display: 'flex', width: '200', height: '150', flexDirection: 'column'}}>
      {props.users.map((element, key) =>
        <div key={key} style={{display: 'flex', backgroundColor: 'black', margin: 8, flexDirection: rowDirection ? 'column' : 'row'}}>
          <div style={{padding: 8}}>{element.name}</div>
          <div style={{padding: 8}}>{element.email}</div>
          <div style={{padding: 8}}>{element.phone}</div>
        </div>
      )}
      </div>
    </>);
};

export default AdaptiveGroup;