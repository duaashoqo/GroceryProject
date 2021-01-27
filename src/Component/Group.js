
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../Style.css';

const useStyles = makeStyles((theme) => ({
    G1:{
        
        width: 250,
        height: 100,
        marginRight:10,
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        background: '#fabdc5',
        border:'none',
        borderRadius: 18,
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 13,
    },
    G2:{
        
        width: 250,
        height: 100,
        marginRight:10,
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        background: 'rgb(188, 188, 219)',
        border:'none',
        borderRadius: 18,
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 13,
    },
    G3:{
        
        width: 250,
        height: 100,
        marginRight:10,
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        background: 'rgb(163, 212, 163)',
        border:'none',
        borderRadius: 18,
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 13,
    },
    G4:{
        
        width: 250,
        height: 100,
        marginRight:10,
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        background: 'rgb(240, 209, 152)',
        border:'none',
        borderRadius: 18,
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 13,
    }
    ,G5:{
      
        width: 250,
        height: 100,
        marginRight:10,
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        background: 'rgb(185, 101, 118)',
        border:'none',
        borderRadius: 18,
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 13,
    }
    ,G6:{
        
      width: 250,
      height: 100,
      marginRight:10,
      marginTop:10,
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-start',
      background: 'rgb(157, 206, 108)',
      border:'none',
      borderRadius: 18,
      fontFamily: 'Gilroy',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 13,
  }
  ,G7:{
        
    width: 250,
    height: 100,
    marginRight:10,
    marginTop:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    background: 'rgb(241, 153, 121)',
    border:'none',
    borderRadius: 18,
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 13,
  }
  ,G8:{
        
    width: 250,
    height: 100,
    marginRight:10,
    marginTop:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    background: 'rgb(98, 178, 180)',
    border:'none',
    borderRadius: 18,
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 13,
  }
  ,G9:{
        
    width: 250,
    height: 100,
    marginRight:10,
    marginTop:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    background: 'rgb(98, 178, 180)',
    border:'none',
    borderRadius: 18,
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 13,
  }
      }));

export default function Group(props) {
    const{GroupName,GroupImg,className,setGroupClicked,setCat}=props;
    let x;
    const classes = useStyles();
    if(className==='G1')
    { x=classes.G1;}
    else if(className==='G2')
    { x=classes.G2;}
    else if(className==='G3')
    { x=classes.G3;}
    else if(className==='G4')
    { x=classes.G4;}
    else if(className==='G5')
    { x=classes.G5;}
    else if(className==='G6')
    { x=classes.G6;}
    else if(className==='G7')
    { x=classes.G7;}
    else if(className==='G8')
    { x=classes.G8;}
    else if(className==='G9')
    { x=classes.G9;}
    else if(className==='G10')
    { x=classes.G10;}



function setValue(){
    setGroupClicked(true)
    setCat(GroupName);

}
    return (
        <div>
   <Grid item >
   <button className={x} onClick={setValue}>
      <div style={{marginTop:4}}><img src={GroupImg} className='imgG' alt="ddd"/></div>
       <div style={{marginTop:35}}><label>{GroupName}</label></div>
       </button>
   </Grid>
        </div>
    )
}
