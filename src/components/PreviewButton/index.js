import React from "react";
import { Link } from "react-router-dom";

import { LinkStyled } from "./style";

const PreviewButton = ({ route }) => <LinkStyled to={route}>View</LinkStyled>;

export default PreviewButton;
