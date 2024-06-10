import "./Container.css";
// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return <div className="container-wrapper">{children}</div>;
};
export default Container;
