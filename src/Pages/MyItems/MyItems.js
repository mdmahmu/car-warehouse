import React, { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import EachItem from "../Inventory/EachItem/EachItem";

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const emailOrUid = user.email || user.providerData[0].uid;
        fetch(`http://localhost:5000/my_items?emailOrUid=${emailOrUid}`)
            .then(res => res.json())
            .then(data => setMyItems(data));

    }, [myItems]);

    return (
        <div>
            <h1 className="text-center">MY ITEMS : {myItems.length}</h1>

            {
                !myItems ?
                    <div className="text-center my-5" >
                        <Spinner animation="border" variant="warning" />
                    </div> :
                    myItems.map(car => <EachItem key={car._id} car={car}></EachItem>)

            }
        </div>
    );
};
export default MyItems;