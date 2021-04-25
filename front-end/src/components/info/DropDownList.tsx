import { FC } from "react";
import arrowIcon from "./../../images/arrow_icon.svg";
import { v4 as uuidv4 } from 'uuid';

const DropDownList: FC<any> = ({ headerText, data, toggleElement, elementRef, imageRef, episodesPageRef, children }): JSX.Element => {
    return (
        <section
            className='drop-down-list'>
            <section
                className='drop-down-list__header-wrapper'>
                <h3 
                    className='drop-down-list__header'
                    onClick={toggleElement(elementRef, imageRef, (children? episodesPageRef: null))}>
                    <img 
                        className='drop-down-list__button'
                        ref={imageRef}  
                        src={arrowIcon} 
                        alt='arrow'/>
                    {headerText}
                </h3>
                {children}
            </section>
            <ul 
                className={`drop-down-list__list drop-down-list__list--${headerText.toLowerCase()}`}
                ref={elementRef}>
                {
                    data.map((item: any, index: any) => {
                            return (
                                <li 
                                    className='drop-down-list__list-item'
                                    key={uuidv4()}>
                                    {
                                        children?
                                        `${item.episode_id}. ${item.title}`:
                                        item
                                    }
                                </li>
                            );
                    })
                }
            </ul>
        </section>
    )
};

export default DropDownList;