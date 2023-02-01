import React from "react";
import {
    Text,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Button,


} from "@chakra-ui/react";

import {
    AiOutlineEye,
    AiOutlineEyeInvisible
} from 'react-icons/ai'

const LoginPage = () => {

    const [userID, setUserID] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [visible, setVisible] = React.useState('password')

    const onVisibility = () => {
        if (visible == "password") {
            setVisible("text")

        } else if (visible == "text") {
            setVisible("password")
        }
    }

    console.log(`from UserID:${userID}`);
    console.log(`from Password:${password}`);

    return (

        <div className="container p-3 p-sm-5">
            <div className="card shadow border-danger ">
                <div className="card-body ">
                    <div className="row" >
                        <div className="col-12 col-sm-6 m-auto p-5 ">

                            <Text className="d-flex text-muted fw-bold"
                                fontSize="xl">
                                Welcome To
                            </Text>

                            <div className="">
                                <Text as='i'
                                    className="d-flex text-primary fw-bold"
                                    fontSize="3xl"
                                >
                                    Indofood
                                    <span>
                                        <Text
                                            as='i'
                                            className="d-flex text-danger fw-bold "
                                        >
                                            CBP
                                        </Text>
                                    </span>
                                </Text>
                            </div>


                            <Heading
                                fontSize="6xl"
                                className="d-flex"
                            >
                                E-Order
                            </Heading>
                            <Text
                                fontSize='xl'
                                className="d-flex text-muted"
                            >
                                Easy-Order
                            </Text>
                        </div>

                        <div className="col-12  col-sm-5 m-sm-3">
                            <div className="card form-login bg-white border border-danger w-100 p-3 m-auto shadow">

                                <div className="mt-3 mb-4">
                                    <label className=" form-label fw-bold text-muted d-flex" >
                                        UserID
                                    </label>
                                    <input type='text shadow'
                                        className="border border-danger form-control p-3"
                                        placeholder="firstname.lastname"
                                        onChange={(e) => setUserID(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4 ">
                                    <label className=" form-label fw-bold text-muted d-flex" >
                                        Password
                                    </label>
                                    <div className="input-group border border-danger rounded d-flex">
                                        <input type={visible}
                                            className="text-start 
                                            form-control 
                                            p-3
                                            border-0
                                            h-100"
                                            placeholder="your password"
                                            onChange={((e) => setPassword(e.target.value))}
                                        />
                                        <span
                                            onClick={onVisibility}
                                            className="input-group-text 
                                            bg-light 
                                            border-0  
                                            px-2"
                                            id="basicaddon2">
                                            {
                                                visible == "password"
                                                    ?
                                                    <AiOutlineEye size={26} />
                                                    :
                                                    <AiOutlineEyeInvisible size={26} />
                                            }
                                        </span>
                                    </div>

                                </div>

                                <button
                                    className="btn btn-danger py-3 shadow mt-5 "
                                    type="button"
                                // onClick={onLogin()}
                                >
                                    Sign In
                                </button>
                                
                                <div className="pt-5">
                                    <Text
                                        fontSize="sm"
                                        className="text-muted"
                                    >
                                        Forgot password?
                                    </Text>

                                    <Text
                                        fontSize='sm'
                                        className="text-muted btn btn-link"
                                    // onClick={{#}}
                                    >
                                        click here!
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default LoginPage;