import {Fragment, useState} from "react";
import './listView.css'
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import ListItem from "../../component/listItem/listItem";

function ListView(props) {
    // const listData = props.ListData
    const [listData ] = useState(props.ListData)
    const [currentPage, setCurrentPage] = useState(0)
    const pageSize = 5;
    const pagesCount = Math.ceil(listData.length / pageSize);

    // useEffect(() => {
    //     console.log('>>>>>', listData)
    // }, [listData])

    const handleClick=(e, index)=> {

        e.preventDefault();
        setCurrentPage(index)
    }
    return (
        <Fragment>
            <div >
                {listData
                    .slice(
                        currentPage * pageSize,
                        (currentPage + 1) * pageSize
                    )
                    .map((data, i) =>
                        <div className="data-slice" key={i}>
                            <ListItem data={data}/>
                        </div>
                    )}
                <Pagination aria-label="container">

                    <PaginationItem disabled={currentPage <= 0}>

                        <PaginationLink
                            onClick={e => handleClick(e, currentPage - 1)}
                            previous
                            href="#"
                        />

                    </PaginationItem>

                    {[...Array(pagesCount)].map((page, i) =>
                        <PaginationItem active={i === currentPage} key={i}>
                            <PaginationLink onClick={e => handleClick(e, i)} href="#">
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}

                    <PaginationItem disabled={currentPage >= pagesCount - 1}>

                        <PaginationLink
                            onClick={e => handleClick(e, currentPage + 1)}
                            next
                            href="#"
                        />

                    </PaginationItem>

                </Pagination>

            </div>

        </Fragment>
    );
}

export default ListView;
