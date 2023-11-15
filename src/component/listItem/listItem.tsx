import './listItem.css'

function ListItem(props:any) {
    const {title , body }=props.data
    return (

        <div className="listItemContainer">
            <div className="listItemView">
                <div className="listItemTitle">
                    {title}
                </div>
                <div className="listItemBody">
                    {body}
                </div>

            </div>
        </div>
    );
}

export default ListItem;
