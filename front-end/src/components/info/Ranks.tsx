import { useState } from "react";
import { FC } from "react";
import { BsFillHeartFill } from 'react-icons/bs';
import { RanksPropsInterface } from "../../interfaces/props/RanksPropsInterface";
import { fetchData } from "../../modules/fetch-data";
import Modal from "../shared/Modal";

const Ranks: FC<RanksPropsInterface> = ({ score, rank, likes, user_like, mal_id }): JSX.Element => {
    const [userLike, setUserLike] = useState(user_like);
    const [likesCount, setLikesCount] = useState(likes);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const onLike = async() => {
        if(sessionStorage.getItem('jwtToken')){
            const likeResult = await fetchData(`/api/anime/info/like/${mal_id}`, 'GET', undefined, { jwtToken: sessionStorage.getItem('jwtToken')});
            if(likeResult && likeResult.action)
                likeResult.action === 'liked'? 
                like(): 
                unlike()
        }else{
            setIsModalOpen(true);
        }
    }
    const like = () => {
        setUserLike(true)
        setLikesCount(likesCount + 1)
    }
    const unlike = () => {
        setUserLike(false)
        setLikesCount(likesCount - 1)
    }
    return (
        <section 
            className='info__ranks'>
            <Modal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                header={'Error'}
                content={'You have to be logged in to like.'}/>
            <section 
                className='info__ranks-box info__ranks-box--score'>
                <p 
                    className='info__score-number info__score-number--score'>
                    {score}
                </p>
                <p 
                    className='info__score-desc info__score-desc--score'>
                    score
                </p>
            </section>
            <section 
                className='info__ranks-box info__ranks-box--rank'>
                <p 
                    className='info__score-number info__score-number--rank'>
                    #{rank}
                </p>
                <p 
                    className='info__score-desc info__score-desc--rank'>
                    rank
                </p>
            </section>
            <section 
                className='info__ranks-box info__ranks-box--like'>
                <p 
                    className='info__like-image-wrapper'>
                    <BsFillHeartFill 
                        className='info__like-image'
                        color={userLike? 'red': 'grey'}
                        onClick={onLike}/>
                </p>
                <p 
                    className='info__score-desc info__score-desc--like'>
                    {likesCount}
                </p>
            </section>
        </section>
    )
};

export default Ranks;