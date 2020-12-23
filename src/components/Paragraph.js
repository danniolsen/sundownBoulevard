import { Primary, Secondary } from "./Colors";
import PropTypes from "prop-types";
const Paragraph = (props) => {
  const { children, secondary, bold, uppercase, size } = props;

  const textColor = secondary ? Secondary : Primary;
  const boldText = bold ? "bold" : null;
  const transform = uppercase ? "uppercase" : "";

  return (
    <p
      style={{
        color: textColor,
        fontWeight: boldText,
        textTransform: transform,
        fontSize: size,
      }}
    >
      {children}
    </p>
  );
};

Paragraph.defaultProps = {
  children: "",
  secondary: false,
  bold: false,
  uppercase: false,
  size: 16,
};
Paragraph.propTypes = {
  secondary: PropTypes.bool,
  bold: PropTypes.bool,
  uppercase: PropTypes.bool,
  size: PropTypes.number,
};

export default Paragraph;
