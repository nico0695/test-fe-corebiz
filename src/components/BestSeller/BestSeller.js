import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Label
} from "reactstrap";
import axios from "axios";

import "./styles.css";


const BestSeller = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const [items, setItems] = useState([])
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
          cssModule={{background: 'red'}}
        >
          <Row xs={4}>
            {item.map((e) => <Col>
                <Card className={'mx-auto border-0 py-2 product-card'}>
                    <CardImg top width="216px" src={e.imageUrl} alt="" />
                    {e.listPrice && 
                        <div className={'tag-offer'}>
                            <Label>OFF</Label>
                        </div>}
                    <CardBody className={'text-center'}>
                        <CardTitle tag="h5" className={'my-1 text-truncate'}>{e.productName}</CardTitle>
                        <div className={'my-2'}>
                            <div style={{width: '67px', display: 'flex'}} className={'mx-auto justify-content-between'}>
                                <i className={`fa fa-${e.stars<1 ? "star-o" : "star"}`} />
                                <i className={`fa fa-${e.stars<2 ? "star-o" : "star"}`} />
                                <i className={`fa fa-${e.stars<3 ? "star-o" : "star"}`} />
                                <i className={`fa fa-${e.stars<4 ? "star-o" : "star"}`} />
                                <i className={`fa fa-${e.stars<5 ? "star-o" : "star"}`} />
                            </div>
                        </div>
                        <CardSubtitle tag="h6" className="my-2">{`de $ ${e.listPrice ? e.listPrice : e.price}`}</CardSubtitle>
                        <CardText>
                            <span>{`por $ ${e.price}`}</span>
                            <br/>
                            {e.installments.length>0 ?
                                `o en ${e.installments[0].quantity}x de R $ ${e.installments[0].value}`
                            :
                                <br/>
                            }
                        </CardText>
                        <Button>COMPRAR</Button>
                    </CardBody>
                </Card>
            </Col>)}
          </Row>
        </CarouselItem>
      );
    });

    const fetchProducts = () => {
        let url = 'https://corebiz-test.herokuapp.com/api/v1/products';
        axios.get(url)
        .then(response => {
            // console.log('response= ',response.data)
            // console.log('data= ',response.data.slice(-4))
            let data = response.data;
            let arItems = [];
            for(let i=0; i<data.length; i += 4){
                if((data.length-i)<4){
                    arItems.push(data.slice(-4));
                }else{
                    arItems.push(data.slice(i,4));
                }
            }
            setItems(arItems);

        })
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    
    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={false} controls={false}>
            {slides}
            <CarouselControl
                direction="prev"
                // directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                // directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
};

export default BestSeller;
