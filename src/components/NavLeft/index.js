import React from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu} from 'antd';
import {NavLink,HashRouter} from 'react-router-dom'
import './index.less'

const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component{
    componentWillMount(){
        const menuTreeNode=this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }

    renderMenu= (data)=>{
        return data.map( (item) =>{
            if(item.children){
                // this.renderMenu(item.children)
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                      <NavLink to={item.key}>{item.title}</NavLink>
                      {/* {item.title} */}
                   </Menu.Item>
        })

    }
    render(){
        return(
           <div>
               <div className="logo"><img src="/assets/3.png" alt="" /><h1>Imooc MS123</h1></div>
               <HashRouter>
                <div>
                    <Menu theme="dark">
                        {this.state.menuTreeNode}
                    </Menu>
                </div>
               </HashRouter>
           </div>
        )
    }
} 