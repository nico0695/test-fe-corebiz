import React, { useState, useEffect } from "react";
import { 
    Container,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Label
} from "reactstrap";
import axios from "axios";
import store from '../../store/';
import { addProduct } from "../../actions";

import Slider from "react-slick";

import "./styles.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Lista los productos y permite agregar al carrito
const BestSeller = () => {
    const [items, setItems] = useState([])

    // Botones para avanzar y retroceder en la lista de productos
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return <i className={'fa fa-chevron-right arrow-r'} onClick={onClick}/>;
    }
    
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return <i className={'fa fa-chevron-left arrow-l'} onClick={onClick}/>;
    }
    
    // Configuracion par ael componente Slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        activeSlide: 0,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    
    const onClick = (id) => {
        // Se agrega el id al estado de productos en la store
        store.dispatch(addProduct(id))
    }
    
    const productsCard = items.map((item, i) => {
      return (
          <div key={'pc-'+i}>
            <Card className={'mx-auto border-0 py-2 product-card'}>
                {item.listPrice && 
                    <div className={'tag-offer'}>
                        <Label>OFF</Label>
                    </div>}
                <CardImg top width="216px" src={item.imageUrl} alt="" />
                
                <CardBody className={'text-center'}>
                    <CardTitle tag="h5" className={'my-1 text-truncate'}>{item.productName}</CardTitle>
                    <div className={'my-2'}>
                        <div style={{width: '67px', display: 'flex'}} className={'mx-auto justify-content-between'}>
                            <i className={`fa fa-${item.stars<1 ? "star-o" : "star"}`} />
                            <i className={`fa fa-${item.stars<2 ? "star-o" : "star"}`} />
                            <i className={`fa fa-${item.stars<3 ? "star-o" : "star"}`} />
                            <i className={`fa fa-${item.stars<4 ? "star-o" : "star"}`} />
                            <i className={`fa fa-${item.stars<5 ? "star-o" : "star"}`} />
                        </div>
                    </div>
                    <CardSubtitle tag="h6" className="my-2">{`de $ ${item.listPrice ? item.listPrice : item.price}`}</CardSubtitle>
                    <CardText>
                        <span>{`por $ ${item.price}`}</span>
                        <br/>
                        {item.installments.length>0 ?
                            `o en ${item.installments[0].quantity}x de R $ ${item.installments[0].value}`
                        :
                            <br/>
                        }
                    </CardText>
                    <Button onClick={() => onClick(item.productId)}>COMPRAR</Button>
                </CardBody>
            </Card>
        </div>
      );
    });

    // Caputra los productos y los guardo en el estado
    const fetchProducts = () => {
        let url = 'https://corebiz-test.herokuapp.com/api/v1/products';
        axios.get(url)
        .then(response => {
            setItems(response.data);
        })
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        
        <Container className=" px-0">
            <Slider {...settings}>
                {productsCard}
            </Slider>
        </Container>
    );
};

export default BestSeller;
