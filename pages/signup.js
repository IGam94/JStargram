import React, {useCallback, useState} from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import AppLayout from '../components/AppLayout';
import useInput from '../components/hooks/useInput';
import Password from 'antd/lib/input/Password';

const signup = () => {
    
    const [id,onChangeId] = useInput('');
    const [password,onChangePassword] = useInput('');
    const [nickname, onChangeNickname] = useInput('');

    const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback(
      (e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
      },
      [password],
    )

    const [term, setTerm] = useState('');
    const [termError,setTermError] = useState(false);
    const onChangeTerm = useCallback(
      (e) => {
        setTerm(e.target.checked);
        setTermError(false);
      },
      [],
    )
  
  const onSubmit = useCallback(() => {
      if(password !== passwordCheck){
        return setPasswordError(true);
      }
      if(!term){
        return setTermError(true);
      }
      console.log(id,nickname,password)
    },[password,passwordCheck,term],);

  return (
    <AppLayout>
      <Head>
          <title>회원가입 | JS</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br/>
          <Input 
          name="user-id" 
          value={id} 
          required 
          onChange={onChangeId}/>
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br/>
          <Input 
          name="user-nick" 
          value={nickname} 
          required 
          onChange={onChangeNickname}/>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br/>
          <Input 
          name="user-password"
          type="password" 
          value={password} 
          required 
          onChange={onChangePassword}/>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호체크</label>
          <br/>
          <Input 
          name="user-password" 
          value={passwordCheck}
          type="password"  
          required 
          onChange={onChangePasswordCheck}/>
          {passwordError && <div style={{color:"red"}}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관은 아직 없지만 동의하겠습니까?</Checkbox>
          {termError && <div style={{color:"red"}}>약관은 없지만 동의하셔야 합니다.</div>}
        </div>
        <div style={{marginTop:10}}>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default signup;