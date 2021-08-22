import React, { useEffect } from 'react'

function ThisMonthCase(props) {

    //differentiating the case status
    let x="recovered";
    let y="active";
    let z="dead";
    function calcCaseStatus(){
        switch (props.item['Current Status']) {
            case "Recovered":
                return x;
            case "Hospitalized":
                return y;
            case "Deceased":
                return z;
            default:
                return;
        }
    }
    var ans=calcCaseStatus()

    useEffect(()=>{
        calcCaseStatus();
        //eslint-disable-next-line
    },[])


    return (
        <React.Fragment>
            <ul>
                {/* <li>{props.item['Current Status']}</li> */}
                {/* <li>Active Cases:{active}</li>
                <li>Recovered Cases:{recovered}</li>
                <li>Deceased Cases:{dead}</li> */}
                <li>{ans}</li>
            </ul>
        </React.Fragment>
    )
}

export default ThisMonthCase;
