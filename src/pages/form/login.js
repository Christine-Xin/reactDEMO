import React from 'react'
import {Input,Button,Card,Form,message,Icon, Checkbox} from 'antd'
const FormItem= Form.Item

 class FormLogin extends React.Component{
    handleSubmit=() =>{
        let userInfo=this.props.form.getFieldsValue()
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.username}恭喜你，您通过验证`)
            }
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            {
                                getFieldDecorator('username',{
                                    initialValue :'jack',
                                    rules:[
                                        {
                                            required:true,
                                            message:'不能为空',

                                        },
                                        {
                                            min:5,max:10,
                                            message:'长度不在范围内'
                                        },
                                        {
                                            pattern:/^\w+$/g,
                                            message:'用户名必须为英文'
                                        }
                                    ]
                                })(<Input prefix={<Icon type="user"/>} placeholder="用户名"/>)
                            }
                            
                        </FormItem>
                        <FormItem>
                        {
                                getFieldDecorator('password',{
                                    initialValue :'123456',
                                    rules:[]
                                })(<Input placeholder="密码"/>)
                            }
                            
                            
                        </FormItem>
                        <FormItem>
                        {
                                getFieldDecorator('remember',{
                                    // valueProName:'checked',
                                    
                                    rules:[]
                                })(<Checkbox defaultChecked>记住密码</Checkbox>)
                        }
                            
                            <a href="#">忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{marginTop:10}}>
                    <Form style={{width:300}}>
                    <FormItem>
                            <Input placeholder="用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }

}
export default Form.create()(FormLogin)