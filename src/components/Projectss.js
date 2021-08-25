import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import web1 from "../images/web1.png";
import web2 from "../images/web2.png";
import web2_1 from "../images/web2_1.png";
import web2_2 from "../images/web2_2.png";
import web3 from "../images/web3.png";
import web4 from "../images/web4.png";
import web4_1 from "../images/web4_1.png";
import web4_2 from "../images/web4_2.png";
import web4_3 from "../images/web4_3.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div style={{backgroundColor:'black',margin:'10px',padding:'10px'}}>
    <center >
      <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            HTML and CSS Lab skills
          </Typography>
          <img src={web1} alt=""/>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="h2">
            Copy Web Lab
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            เป็นงานฝึกเขียน Html,css,js โดยอาจาร์ยให้สร้างเว็บขึ้นมาให้เหมือนกับเว็บไซต์ที่สนใจ
          </Typography>
          <img src={web2} alt=""/>
          <img src={web2_1} alt=""/>
          <img src={web2_2} alt=""/>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          RESPONSIVE Lab
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            อาจาร์ยให้เขียนเว็บที่มีความ RESPONSIVE สามารถเแิดได้ในทุกอุปกรณ์
          </Typography>
          <img src={web3} alt=""/>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Project Lab
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            เป็น Project รายวิชา การสร้างและออกแบบเว็บ 
          </Typography>
          <img src={web4} alt=""/>
          <img src={web4_1} alt=""/>
          <img src={web4_2} alt=""/>
          <img src={web4_3} alt=""/>
        </CardContent>
      </CardActionArea>
    </Card>
    </center>
    </div>
  );
}