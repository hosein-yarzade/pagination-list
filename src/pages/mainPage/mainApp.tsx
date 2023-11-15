import operations from "../../services/data";
import {useEffect, useState} from "react";
import {Spinner} from "reactstrap";
import './style.css'
import ListView from "../../views/listView/listView";
import ModalView from "../../views/modalView/modalView";

function MainApp() {
    const [loader, setLoader] = useState(true)
    const [ListData, setListData] = useState([])
    const fetchListTicket = () => {
        // setLoader(true)
        // operations.getUserTicket(page, query).then(res => {
        //     // setIsLoading(prev => !prev)
        //     console.log('>>>>>', res)
        //     setAllDataTickets(res)
        //     setLoader(false)
        // }).catch((e) => {
        //     // console.log(e)
        // })

        setListData(operations)
        setLoader(false)
    }
    useEffect(() => {
        // console.log('>>>>>', data)
        fetchListTicket()
    }, [])
    return (
        <div className="container">
            {
                loader ?<div className="spinnerContainer"><Spinner color='primary' size="lg"/></div>
                    : <div>
                    <ListView ListData={ListData}/>
               <ModalView/>
                    </div>
            }
        </div>
    );
}

export default MainApp;
