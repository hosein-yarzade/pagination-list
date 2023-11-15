import operations from "../../service/data";
import {useEffect, useState} from "react";
import {Spinner} from "reactstrap";
import './style.css'
import ListView from "../../view/listView/listView";
import ModalView from "../../view/modalView/modalView";

function MainApp() {
    const [loader, setLoader] = useState(true)
    const [ListData, setListData] = useState([{
        userId: 1,
        id: 1,
        title: "none",
        body: "none"
    },])
    const fetchList = () => {
        setLoader(true)
        operations.getPost().then(res => {
            setListData(res.slice(0,24))
            setLoader(false)
        }).catch((e) => {
        })

    }
    useEffect(() => {
        fetchList()
    }, [])
    const changList = (Title: any, Text: any) => {
        const lastIndexList: any = ListData[ListData.length - 1]
        const lastIdList = lastIndexList.id
        // @ts-ignore
        setListData([ {userId: 1, id: lastIdList + 1, title: Title, body: Text}, ...ListData])
    }
    return (
        <div className="containerMain">
            {
                loader ? <div className="spinnerContainer"><Spinner color='primary' type="grow"  size="lg"/></div>
                    : <div className="containerView">
                        <ListView ListData={ListData}/>
                        <ModalView ChangList={changList}/>
                    </div>
            }
        </div>
    );
}

export default MainApp;
