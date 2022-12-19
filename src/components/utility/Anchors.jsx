import "../../styles/utilityStyles/homeAnchor.scss";

const Anchor = (props) => {
  return (
    <a href={props.link} className="homeAnchor" target="_blank">
      {props.content}
    </a>
  );
};

export default Anchor;
