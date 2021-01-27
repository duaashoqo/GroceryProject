import '../Style.css';

function Input(props) {
    const { className,type,placeholder,onChange}=props;
  return (
    
    <>
    
       
       <input className={className} type={type} placeholder={placeholder} onChange={onChange}></input>
      
       
    
    
</>

  );
}

export default Input;
