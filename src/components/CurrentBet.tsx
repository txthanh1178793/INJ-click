import { usePredictStore } from "@/context/PredictContextProvider";
import React, { useEffect, useState } from "react";
import { useQuery } from 'react-query'


type Props = {};
const CurrentBet = (props: Props) => {
    const [inputValue, setInputValue] = useState("0");
    const [inputAddress, setInputAddress] = useState("0");
    const [inpuId, setInpuId] = useState("0");
    const [info, setInfo] = useState({
        id: '0',
        status: '0',
        totalUp: '0',
        totalDown: '0',
        startTime: '0',
        endTime: '0',
        startPrice: '0',
        upPosition: '0',
        downPosition: '0',
        binancePrice: '0'
    });
    const { data,
        queryBetInfo,
        queryReward,
        startBet,
        endBet,
        upBet,
        downBet,
        claimReward,
        fetchCurrentInfo
    } = usePredictStore();

    // https://data.binance.com/api/v3/ticker/price?symbol=INJUSDT

    useEffect(() => {
        setInfo(data);
    }, [data]);

    function handleStartBet() {
        startBet();
    }
    function handleEndBet() {
        endBet();
    }
    function handleUpBet() {
        upBet(inputValue);
    }
    function handleDownBet() {
        downBet(inputValue);
    }
    function handleClaimReward() {
        claimReward(inpuId);
    }
    function handleQueryBetInfo() {
        queryBetInfo(inpuId as string);
    }
    function handleQueryCurrentInfo() {
        fetchCurrentInfo();
    }
    function handleQueryReward() {
        queryReward(inputAddress as string, inpuId as string);
    }
    function handleChange(event: any) {
        let { value, min, max } = event.target;

        if (Number(value) > 1000) {
            value = 1000;
        }
        if (Number(value) < 0.001) {
            value = 0.001;
        }
        setInputValue(value);
    };
    // onMouseOver={handleQueryCurrentInfo} 
    return (
        <div className="--container-wrapper" >
            <div className="--container-inner">
                <p className="order">#{info.id}</p>
                <div className="line"></div>
                <div className="price-tag">
                    <p>INJ Price</p>
                    <p className={parseFloat(info.binancePrice) >= parseFloat(info.startPrice) ? "price-up" : "price-down"} >${info.binancePrice}</p>
                    <table className="info">
                        <tr>
                            <th className="price-start">Start Price</th>
                            <th>${info.startPrice}</th>
                        </tr>
                        <tr>
                            <td className="prize">Total Prize</td>
                            <td>{(BigInt(info.totalUp) + BigInt(info.totalDown)).toString()} $INJ</td>
                        </tr>
                        <tr>
                            <td className="prize">Up Postion</td>
                            <td>{(parseInt((BigInt(info.upPosition) / BigInt('100000000000000')).toString()) / 10000).toString()} $INJ</td>
                        </tr>
                        <tr>
                            <td className="prize">Down Postion</td>
                            <td>{(parseInt((BigInt(info.downPosition) / BigInt('100000000000000')).toString()) / 10000).toString()} $INJ</td>
                        </tr>
                    </table>
                </div>
                <input type="number" className="input" value={inputValue} onChange={(e) => handleChange(e)} />
                <div className="--button-container ---a">
                    <button onClick={handleUpBet} disabled={info.status != "1"}></button>
                    <p className="--button-text">UP</p>
                    <object className="--center-vertical" data="up.svg" width="50" height="50"> </object>

                </div>
                <div className="--button-container ---b">
                    <object className="--center-vertical" data="down.svg" width="40" height="40"> </object>
                    <p className="--button-text">DOWN</p>
                    <button onClick={handleDownBet} disabled={info.status != "1"}></button>
                </div>
            </div>
        </div >
    );
};

export default CurrentBet;
