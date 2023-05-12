import "./header.css";

interface Props {
  children: String;
}

const index = ({ children }: Props) => {
  return <h1 className="heading">{children}</h1>;
};

export default index;
