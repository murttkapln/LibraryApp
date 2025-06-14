import { SvgIcon } from "./Icon.style";

const Icon = ({ path, icon, color }) => {
  return (
    <SvgIcon
      hoverColor={color}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className={`bi bi-${icon}`}
      viewBox="0 0 16 16"
    >
      <path d={path} />
    </SvgIcon>
  );
};
export default Icon;
