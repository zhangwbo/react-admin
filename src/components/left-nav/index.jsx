import React,{Component} from 'react';
import {Menu,Icon} from 'antd';
import {NavLink,withRouter} from 'react-router-dom';



import './index.less';
import logo from '../../assets/images/logo.png';
import menuConfig from '../../confing/menuConfig';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

class LeftNav extends React.Component{

  componentWillMount(){
    this.menu = this.createMenu(menuConfig)
  };

  createMenu = (mune)=>{

    return mune.map( item =>{
      if(item.children){
        const {pathname} = this.props.location;
        const result = item.children.find(item=>item.key === pathname);
        if(result){
          this.openKey = item.key;
        }

        return <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                {
                  this.createMenu(item.children)
                }
              </SubMenu>
      }else{
        return <Item key={item.key}>
                <NavLink to={item.key}>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </NavLink>
              </Item>
      }
    })
  };

  render(){
    const {pathname} = this.props.location;
    return (
      <div className="left-nav">
        <header className="left-nav-header">
          <NavLink to="/home" className="left-nav-header">
            <img src={logo} alt="logo"/>
            <h2>硅谷后台</h2>
          </NavLink>
        </header>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[pathname]}
          defaultOpenKeys={[this.openKey]}
        >
          {
            this.menu
          }
        </Menu>
      </div>
    )
  }
};

export default withRouter(LeftNav);