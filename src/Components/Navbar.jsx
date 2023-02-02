import React from "react";
import { Text } from "@chakra-ui/react";



const Navbar = () => {

    return (
        <div className="navbar navbar-expand-lg navbar-light  ">
            <div className="container ">
                <span className="navbar-brand btn ">

                    <Text as='i'
                        className="d-flex  text-primary fw-bold"
                        fontSize="3xl"
                    >
                        E
                        <span>
                            <Text
                                as='i'
                                className="d-flex  text-danger fw-bold "
                            >
                                Order
                            </Text>
                        </span>
                    </Text>

                </span>
                <button className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    href='#eshopNavbar'
                    aria-controls='eshopNavbar'
                    aria-expanded="false"
                // aria-label="Toggle navigation"
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav me-2">
                        <li>
                            <span>
                                SKU
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;