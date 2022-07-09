import React from 'react';
import { InputText, InputCheckbox, InputItem } from './style';
import Emoji from 'components/Emoji';

export default function InputComponent({ props }) {
  return (
    <InputItem>
      {props.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.type === 'checkbox' && (
            <InputCheckbox type={item.type} id={item.name} />
          )}
          {(item.type === 'text' || item.type === 'password') && (
            <InputText
              name={item.name}
              type={item.type}
              id={item.name}
              placeholder={item.placeholder}
            />
          )}
        </React.Fragment>
      ))}
    </InputItem>
  );
}
