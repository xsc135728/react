import React,{Component} from 'react';

import UcSwiper from "../components/uc-swiper";
import Cell from "../components/cell";
import {UcButton} from "../components/uc-button";


export default class Home extends Component{

  state={
    banner:[],
    home:[]
  };

  componentDidMount(){

    //读取数据
    React.axios.all([
      React.axios({url:'/api/goods/banner',params:{_page:1,_limit:3}}),
      React.axios({url:'/api/goods/home',params:{_page:1,_limit:10}})
    ]).then(React.axios.spread((banner, home)=>{//banner|home ~~ res
      banner.data.data.map(item => item.banner=this.baseUrl + '/' + item.banner );
      this.setState({
        banner:banner.data.data,
        home:home.data.data
      })
    }));

  }

  render(){
    let {banner,home}=this.state;
    return (
      <div className="Home">

        <UcSwiper
          data={banner}
          to={{pathname:'/detail',apiname:'banner'}}
        />

        {
          home.map((item,index)=>(
            <Cell
              key={item._id}
              index={index}
              data={item}
              to={{pathname:'/detail',apiname:'home'}}
            >
              <UcButton style={{float:'right'}} size="mini">+</UcButton>
            </Cell>
          ))
        }


      </div>
    )
  }

}