import PropTypes from "prop-types";

export const ButtonWithIcon = ({
  text,
  icon: Icon,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#4F9CF9] px-6 py-4 text-lg font-medium rounded hover:bg-blue-600 transition flex gap-2 items-center ${className}`}
      {...props}
    >
      {text}
      {Icon && <Icon style={{ height: "20px", width: "20px" }} />}
    </button>
  );
};

ButtonWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
