function Cardsearch (props){

    const {message}=props;

    if(message.id !=null){
    return(
        <div className="card-serch">
        <p> {message.id}</p>
        <p> {message.product_name}</p>
        <p> {message.price}</p>
        <p> {message.discription}</p>
        
      </div>
    )}

   
}

export default Cardsearch;
