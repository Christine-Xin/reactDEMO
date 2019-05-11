import React from 'react'
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Icon,Upload, Divider,InputNumber}from 'antd';
import moment from 'moment'
const {Option} =Select
const FormItem=Form.Item
const RadioGroup=Radio.Group
const dateFormat = 'YYYY-MM-DD';
const { TextArea } = Input;


class FormRegister extends React.Component{
    state={
       
    }
    getBase64=(img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
          }));
        }
      }
    handleSubmit=() =>{
        let userInfo=this.props.form.getFieldsValue();
        console.log(userInfo)
    }
    render(){
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: { 
                xs:24,
                sm:4
            },
            wrapperCol: { 
                xs:24,
                sm:20
             },
          };
          const offsetLayout={
              wrapperCol:{
                  xs:24,
                  sm:{
                      span:12,
                      offset:4
                  }
              }
          }
        return (
            <div>
                <Card title="注册表">
                    <Form {...formItemLayout} style={{width:500,marginLeft:"50px"}}>
                        <FormItem label="用户名">
                            {
                                getFieldDecorator('userName',{
                                    rules:[
                                        {
                                            required:true,
                                            message:'请输入用户名'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem label="密码">
                            {
                                getFieldDecorator('pwd',{
                                    rules:[
                                        {
                                            required:true,
                                            message:'请输入密码'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入密码"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem label="性别">
                            {
                                getFieldDecorator('sex',{
                                    initialValue:'1'
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄">
                            {
                                getFieldDecorator('old',{
                                    initialValue:18,
                                })(
                                    <InputNumber></InputNumber>
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态">
                            {
                                getFieldDecorator('now',{
                                    rules:[
                                        {
                                            required:true,
                                           
                                        }
                                    ]
                                })(
                                    <Select defaultValue="咸鱼一条">
                                        <Option value="咸鱼一条">咸鱼一条</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好">
                            {
                                getFieldDecorator('love',{
                                    initialValue:["1"],
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">游泳</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚">
                            {
                                getFieldDecorator('married',{
                                   
                                })(
                                    <Switch defaultChecked></Switch>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日">
                            {
                                getFieldDecorator('bir',{
                                   initialValue:moment('2018-08-08')
                                })(
                                    <DatePicker showTime format="YYYY-MM-DD"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址">
                            {
                                getFieldDecorator('adress')(
                                    <TextArea placeholder="北京市" autosize={{ minRows: 4} }  />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间">
                            {
                                getFieldDecorator('time',{
                                    rules:[
                                        {
                                            required:true,
                                           
                                        }
                                    ]
                                })(
                                    <TimePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像">
                            {
                                getFieldDecorator('userImg',{
                                    rules:[
                                        {
                                            required:true,
                                           
                                        }
                                    ]
                                })(
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        onChange={this.handleChange}
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                    
                                    >
                                        {this.state.userImg?<img src={this.state.userImg}></img>:<Icon type="plus"></Icon>}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                        {
                                getFieldDecorator('read')(
                                    <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                                )
                            }  
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('btn')(
                                    <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                                )
                            }
                        </FormItem>
                        
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormRegister)
