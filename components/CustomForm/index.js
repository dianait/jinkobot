/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

// COMPONENTS
import LineForm from 'components/form/LineForm';
import Title from 'components/form/Title';

// STYLES
import { Form, ButtonStyled } from './style';

const CustomForm = ({ props, handle }) => {
  const handleForm = (evt) => {
    evt.preventDefault();
    handle(evt);
  };

  return (
    <>
      <Form onSubmit={handleForm}>
        {props.title && (
          <Title
            text={props.title.text}
            emoji={props.title.label}
            label={props.title.labelEmoji}
            size={props.title.emojiSize}
          />
        )}

        <h2>Inicio de sesión</h2>

        {props.camps.map((line, idx) => (
          <LineForm key={idx} props={line} />
        ))}

        {props.button && (
          <ButtonStyled
            text={props.button.text}
            emoji={props.button.label}
            label={props.button.emojiLabel}
            size={props.button.emojiSize}>
            {props.button.text}
          </ButtonStyled>
        )}
      </Form>
    </>
  );
};

export default React.memo(CustomForm);
