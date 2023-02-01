import React from "react";
import {
    Card,
    CardBody,
    Text,
    Heading,
    Input
} from "@chakra-ui/react";


const LandingPage = () => {

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <Card>
                    <CardBody>
                        <div className="row">
                            <div className="col-7 w-100">
                                <Text className="d-flex justify-content-start pb-0">
                                    Welcome To
                                </Text>


                                <Heading className="pt-0">
                                    E-Order
                                </Heading>

                                <Text>
                                    Easy-Order
                                </Text>
                            </div>
                            <div className="col-5">
                                <div>
                                    <Text>
                                        
                                    </Text>

                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )


}

export default LandingPage;