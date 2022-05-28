import { signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import EachItem from "../Inventory/EachItem/EachItem";

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const emailOrUid = user?.email || user?.providerData[0]?.uid;

    useEffect(() => {

        const findingMyItems = async () => {

            try {
                const url = `https://shielded-scrubland-30055.herokuapp.com/my_items?emailOrUid=${emailOrUid}`;

                const res = await fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                if (res.status == 200) {
                    const data = await res.json();
                    setMyItems(data);
                }
                else {
                    signOut(auth);
                    navigate("/login");
                }
            }
            catch (error) {
                console.log(error.message);
            }
        };
        findingMyItems();
    }, [emailOrUid, myItems]);

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