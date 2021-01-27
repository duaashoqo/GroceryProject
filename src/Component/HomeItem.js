import '../Style.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 0,
      justifyContent:'center',
      marginTop:10,
      marginRight:15,

    },
    paper: {
      padding: theme.spacing(2),
      marginTop: 15,
      maxWidth: 200,
      marginBottom:10,
      borderRadius:18,


    },
    image: {
      width: 150,
      height: 128,
    },
    img: {
      display: 'block',
      maxWidth: '90%',
      maxHeight: '100%',
    },
    price:{
      marginTop:5,
    },
    btn:{
      background: 'rgba(83, 177, 117, 0.7)' ,
      borderRadius:17,
      width:10
    },
    icon:{ 
      color: 'white'
    }
  }));

function HomeItem(props) {
    const classes = useStyles();
    const history=useHistory();
    const {item,MyFav,MyItem,setDetailedItem}=props;


    function setValue(){
      let count=0;
      let InFAV=false;
      (MyItem.length>0)?MyItem.forEach(i=>(item.Key===i.Key)?count=i.Count:null):count=0;
      (MyFav.length>0)?MyFav.forEach(i=>(item.Key===i.Key)?InFAV=i.InFav:null):InFAV=false;
      setDetailedItem({Name:item.Name,Weight:item.Weight,Price:item.Price,Img:item.Img,Description:item.Description,N:item.N,Review:item.Review,Count:count,InFav:InFAV,Key:item.Key})
      history.push("/ProductDetail");
    }



  
   

 

  return (
    <>
   
   <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <ButtonBase className={classes.image} >
                <img className={classes.img} alt="complex" onClick={setValue} src={item.Img} />
            </ButtonBase>
          </Grid>
          <Grid item >
                <Typography gutterBottom variant="subtitle1">
                  {item.Name}
                </Typography>
                <Typography gutterBottom variant="subtitle2" className="d2">
                {item.Weight}
                </Typography>
            
              </Grid>
          <Grid item xs={12} sm container>
              <Grid item xs>
                <Typography className={classes.price} variant="subtitle2" >
                 {`$${item.Price}`}
                </Typography>
              </Grid>
             
            <Grid item>
              <Button className={classes.btn} variant="contained" onClick={setValue} key={item.Key}><AddIcon className={classes.icon} /></Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    
    
</>

  );
}

export default HomeItem;
