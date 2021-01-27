import '../Style.css';

function Header(props) {
    const { className1, className2,lb1,lb2}=props;
  return (
    
    <>
    
       
       <h1 className={className1}>{lb1}</h1>
       <h1 className={className2}>{lb2}</h1>
      
       
    
    
</>

  );
}

export default Header;
