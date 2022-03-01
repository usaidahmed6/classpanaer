import { Form, Input, Button, Checkbox } from 'antd';
import { auth, provider, signInWithEmailAndPassword , signInWithPopup} from './firebase';
import React from 'react';
import { Link } from "react-router-dom";
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);

        signInWithEmailAndPassword(auth, values.email, values.password)

            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...

                console.log('hogaya');
            })
            .catch((error) => {
                console.log('error');

                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const google = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (

        <div className="container text-center mx-4 my-4">
            <h2>Login</h2>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>






                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Link to={'/register'}>
                        <button className='btn btn-primary'>
                            register
                        </button>
                    </ Link >

                    <button className='btn mx-4' onClick={google}>
                        google sign in
                    </button>
                    <Button type="primary" htmlType="submit" className='mx-4'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default Login