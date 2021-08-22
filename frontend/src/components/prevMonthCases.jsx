import React, { useEffect } from 'react'

function PrevMonthCase(props) {

    //differentiating the case status
    let x = "recovered";
    let totalX=0
    let y = "active";
    let totalY=0;
    let z = "dead";
    let totalZ=0;
    function calcCaseStatus() {
        switch (props.item['Current Status']) {
            case "Recovered":
                totalX++;
                return x;
            case "Hospitalized":
                totalY++;
                return y;
            case "Deceased":
                totalZ++;
                return z;
            default:
                return;
        }
    }
    var ans = calcCaseStatus()

    useEffect(() => {
        calcCaseStatus();
        //eslint-disable-next-line
    }, [])

    return (
        <React.Fragment>
            prev month
            <ul>
                <li>{ans}</li>
            </ul>
        </React.Fragment>
    )
}

export default PrevMonthCase
