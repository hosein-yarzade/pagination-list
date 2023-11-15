import './listItem.css'

function MainApp(props) {
    const {title , body }=props.data
    return (

        <div className="listItemContainer">
            <div className="listItemView">
                <div className="listItemTitle">
                    {title}
                </div>
                <div className="listItemContent">
                    {body}
                </div>

            </div>
        </div>
    );
}

export default MainApp;
