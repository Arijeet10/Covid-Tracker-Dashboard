import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setData } from "../redux/actions/reduxAction";
import ThisMonthCase from './monthToDate';
import PrevMonthCase from './prevMonthCases';
import styles from "./css/homepage.module.css";

function Home(props) {
    const user = props.userData[0]

    const data = useSelector((state) => state);
    // console.log(data.allData.data[0]['Status Change Date'])
    // let y = data.allData.data[0];
    // var recovered = 0;
    // var active = 0;
    // var dead = 0;
    // let x = data.allData
    // for (let i = 0; i < 3; i++) {
    // switch (x.data[i]['Current Status']) {
    //     case "Recovered":
    //         recovered++;
    //         break;
    //     case "Hospitalized":
    //         active++;
    //         break;
    //     case "Deceased":
    //         dead++;
    //         break;
    //     default:
    //         continue;
    // }
    // }
    // console.log("Recovered:" + recovered);
    // console.log("active:" + active);
    // console.log("dead:" + dead);


    // const d = new Date();
    // d.getFullYear("2020-03-10T00:00:00.000Z")
    // let z=data.allData.data[0]['Status Change Date']
    // let zi=new Date(z)
    // console.log(zi)
    // console.log(d)
    // if(d>zi){
    //     console.log("yasss")
    // }else{
    //     console.log("dead")
    // }

    //store the api data according to month
    let currentMonth=[];
    let previousMonth=[];
    function calculateCases() {
        let thisMonth = new Date();
        thisMonth.getFullYear("2020-03-01T00:00:00.000Z")
        let itemDate;
        let compareDate;
        return (data.allData.data.map((item, index) => {
            itemDate = item['Status Change Date'];
            compareDate = new Date(itemDate);
            if (thisMonth >= compareDate) {
                return (
                    <ThisMonthCase key={index} item={item} />
                )
            } else {
                return (
                    <PrevMonthCase key={index} item={item} />
                )
            }
        })
        )
    }

    //differentiating data in terms of date
    // function calculateCases() {
    //     let thisMonth = new Date();
    //     thisMonth.getFullYear("2020-03-01T00:00:00.000Z")
    //     let itemDate;
    //     let compareDate;
    //     return (data.allData.data.map((item, index) => {
    //         itemDate = item['Status Change Date'];
    //         compareDate = new Date(itemDate);
    //         if (thisMonth >= compareDate) {
    //             return (
    //                 <ThisMonthCase key={index} item={item} />
    //             )
    //         } else {
    //             return (
    //                 <PrevMonthCase key={index} item={item} />
    //             )
    //         }
    //     })
    //     )
    // }

    var func = calculateCases()

    useEffect(() => {
        calculateCases();
        // eslint-disable-next-line
    }, [])


    const dispatch = useDispatch()

    const fetchData = async () => {
        const response = await axios({
            method: 'get',
            url: `http://localhost:5000/data`,
            maxContentLength: 100000000,
            maxBodyLength: 1000000000
        })
        dispatch(setData(response.data));   //dispatch data in the reducer
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])

    function handleLogOut() {
        localStorage.clear();
    }


    return (
        <React.Fragment>
            {/*navigation bar*/}
            <div className={styles.nav}>
            <ul>
                <li>Welcome Mr {user['First Name']} {user['Last Name']}</li>
                <li style={{float:"right"}}>
                <Link to={"/register"}>
                            <button style={{
                                background:"#d50000",
                                color:"#fafafa",
                                outline: "none",
                                border: "none",
                                padding: "5px 15px",
                                fontSize: "1.3em",
                                fontWeight: "400",
                            }} type="submit" onClick={handleLogOut}>
                                Log out
                            </button>
                        </Link>
                </li>
            </ul>
            </div>
            {/*navbar ends*/}

            {func}
        </React.Fragment>
    )
}

export default Home;
