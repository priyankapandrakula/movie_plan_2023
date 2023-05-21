import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from  "@reach/router";

const ProductCard = (props) => {
    let { price,genre, name,language,timings,description, id} = props.data;
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
    }
    return (
        <Card 
            style={{ width: '18rem', height: 'auto'}}
            className={`'bg-dark text-black'  p-0 overflow-hidden shadow mx-auto mb-4`}
        >
            {/* <Link to={`/product-details/${id}`}>
                <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                    <div style={{ width: '9rem'}}>
                        <Card.Img variant="top" src={image} className="img-fluid" />
                    </div>
                </div>
            </Link> */}
            <Card.Body>
            <Card.Title style={{textAlign:'center', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                   {id}
                </Card.Title>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                   <u><b>Name:</b></u> {name}
                </Card.Title>
                <Card.Title>
                <u><b>Price:</b></u> &nbsp; Rs. <span className="">{price}</span>
                </Card.Title>
                <Card.Title>
                <u><b>Timings:</b></u>&nbsp;  <span className="">{timings}</span>
                </Card.Title>
                <Card.Title>
                <u><b>Language:</b></u>&nbsp;  <span className="">{language}</span>
                </Card.Title>
                <Card.Title>
                <u><b>Genre:</b></u>&nbsp;  <span className="">{genre}</span>
                </Card.Title>
                <Card.Title>
                <u><b>Description:</b></u> <br></br>  <span className="">{description}</span>
                </Card.Title>
                <Button
                    onClick={()=> addToCart()}
                    className={`bg-light-primary  d-flex align-item-center m-auto border-0`}
                >
                    <BsCartPlus size="1.8rem" />
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;