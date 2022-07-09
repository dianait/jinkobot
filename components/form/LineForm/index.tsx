import React from 'react';
import { InputText, InputCheckbox, InputItem } from './style';
import Emoji from '../../Emoji';

const LineForm = ({ props }): JSX.Element => {
  return (
    <InputItem>
      {props.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.type === 'checkbox' && (
            <InputCheckbox type={item.type} id={item.name} name={item.name} />
          )}
          {(item.type === 'text' || item.type === 'password') && (
            <InputText
              name={item.name}
              type={item.type}
              id={item.name}
              placeholder=""
            />
          )}
        </React.Fragment>
      ))}
    </InputItem>
  );
};

export default LineForm;
