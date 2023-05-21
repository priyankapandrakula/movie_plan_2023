import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import { Button } from 'react-bootstrap';
import {AiOutlineFileSearch} from "react-icons/ai"
import { Link } from '@reach/router';

const Index=()=> {
  return (
    <>

        <Header/>
   
    <Card className="bg-white text-dark" style={{position:'relative',top:"54px" , textAlign:'center'}}>
      <Card.Img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-movie-ticket-cinema-promotion-banner-image_189804.jpg" style={{position:'relative', width:"100%" }} height={600}  alt="Card image" />
      <Card.ImgOverlay style={{top:'36%'}}>
        <Card.Title><b className='text-dark h1' style={{fontFamily:'serif',fontWeight:'bolder'}}>MyMoviePlan  <br></br></b> A Place to Book Your Faviorate Movie Tickets</Card.Title>
        <Card.Text>
          This is a Online Movie Ticket Booking Websit from which you can Book your Tickets Online
        </Card.Text>
        <Link to="/home" className='btn btn-primary '><AiOutlineFileSearch size="1.8rem"/>  Search Medicines</Link>
      </Card.ImgOverlay>
    </Card>
    
    </>
  );
}

export default Index;

// width: 87%;
//     position: relative;
//     left: 6%;