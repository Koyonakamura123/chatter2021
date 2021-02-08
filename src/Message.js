
function Message(props){
    let username = "Anonymous";
    if (props.name !== '') {
      username = props.name;
    }
    return <div className="message-row">
      <div className="text-username">
        {username}
      </div>
      <div className="message">
        {props.text}
      </div>
    </div>
}

export default Message