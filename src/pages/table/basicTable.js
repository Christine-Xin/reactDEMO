import React from 'react'
import {Card,Table} from 'antd'

export default class BasicTable extends React.Component{
    state={
        dataSource:[]
    }
    render(){
        return(
            <div>
                <Card title="动态数据渲染">
                    <Table
                       dataSource={this.state.dataSource}
                       
                    >

                    </Table>
                </Card>
            </div>
        )
    }
}