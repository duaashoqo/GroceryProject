import '../Style.css';

function Button(props) {
    const { className, text,type}=props;
  return (
    
    <>
           <button className={className} type={type} >{text}</button>
      
       
    
    
</>

  );
}

export default Button;
