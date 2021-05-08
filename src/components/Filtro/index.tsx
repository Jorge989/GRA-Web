import React, { InputHTMLAttributes, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconBaseProps } from "react-icons";
import { Container } from "./styles";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  iconPosition?: "left" | "right";
  type?: string;
}

const Input: React.FC<InputProps> = ({
  name,

  icon: Icon,
  iconPosition = "rigth",
  ...rest
}) => {
  return (
    <Container>
      {Icon && iconPosition === "rigth" && <Icon size={18} />}
      <input id={name} name={name} {...rest} placeholder="Buscar..."></input>
    </Container>
  );
};

export default Input;
