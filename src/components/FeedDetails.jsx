


function FeedDetails(props) {
    return (
      <div >
          {
                    props.users.map((item) => {

                        return(
                            <p className="listChild">{`Name : ${item.name} | Department : ${item.dept} | Rating : ${item.rate}`}</p>
                        )
                    })
                }
      </div>
    )
  }
  
  export default FeedDetails;