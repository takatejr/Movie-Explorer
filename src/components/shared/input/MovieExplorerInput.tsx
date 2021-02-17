import React, { FormEventHandler, memo } from "react";
import { InputContainer } from './Input.styles';

type InputProps = {
  readonly handleChange: FormEventHandler<HTMLInputElement>;
  readonly title: string;
  readonly text: string;
};

export const MovieExplorerInput = memo<InputProps>(
  ({ handleChange, title, text }) => {
    return (
      <InputContainer>
        <label htmlFor="MovieTitle">Movie Explorer</label>
        <input
          type="text"
          defaultValue={title}
          onChange={handleChange}
          placeholder={text}
          aria-label={text}
          required
        />
      </InputContainer>
    );
  },
);

MovieExplorerInput.displayName = "MovieExplorerInput";
