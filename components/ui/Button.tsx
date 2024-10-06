interface Props{
    name:string,
    containerClass:string
    isBeam:boolean
}


const Button = ({ name, isBeam = false, containerClass }:Props) => {
    return (
      <button className={`btn ${containerClass}`}>
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>
        )}
        {name}
      </button>
    );
  };
  
  export default Button;