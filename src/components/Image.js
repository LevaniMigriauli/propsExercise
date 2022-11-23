const Image = (props) => {
  return (
    <div>
      <img src={props.link} width={props.width} height={props.height} />
    </div>
  );
};

export default Image;
