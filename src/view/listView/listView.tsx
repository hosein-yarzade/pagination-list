import {Fragment, useState} from "react";
import './listView.css'
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import ListItem from "../../component/listItem/listItem";

function ListView(props:any) {

    const [currentPage, setCurrentPage] = useState(0)
    const pageSize = 5;
    const pagesCount = Math.ceil(props.ListData.length / pageSize);


    const handleClick=(e:any, index:number)=> {

        e.preventDefault();
        setCurrentPage(index)
    }
    return (
        <Fragment>
            <div className='itemViewContainer'>
                <div className='itemViewContainerInner'>
                {props.ListData
                    .slice(
                        currentPage * pageSize,
                        (currentPage + 1) * pageSize
                    )
                    .map((data:object, i:number) =>
                        <div className="data-slice " key={i} >
                            <ListItem data={data}/>
                        </div>
                    )}
                </div>
                <Pagination aria-label="container" className="paginationView">

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
