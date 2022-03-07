import { useRef, useState, useContext } from 'react';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../ListItem/ListItem'
import './movielists.scss'

function MovieLists({ list }) {
    const listRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${260 + distance}px)`;
        } 
        if(direction === 'right' && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-260 + distance}px)`;
        }

  }
  
    return (
    <div className="list">
        <div className="listTitle">{list.title}</div>
        <div className="wrapper">
            <ArrowBackIosOutlined style={{display: !isMoved && "none"}}
                className="arrowoutlined left" 
                onClick={() => handleClick('left')}
            />
                <div className="container" ref={listRef}>
                    {
                        list.content.map((item, index) => <ListItem key={index} item={item} index={index} />)
                    }
                    
                    
                </div>
            <ArrowForwardIosOutlined className="arrowoutlined right" onClick= {() => handleClick('right')}/>
        </div>
    </div>
  )
}

export default MovieLists