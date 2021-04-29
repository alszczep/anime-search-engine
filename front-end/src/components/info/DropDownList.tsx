import { FC } from "react";
import arrowIcon from "./../../images/arrow_icon.svg";
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react";
import { InfoContext } from "../Info";
import { toggleElement } from "../../modules/info/toggle-element";
import { DropDownListPropsInterface } from "../../interfaces/props/DropDownListPropsInterface";

const DropDownList: FC<DropDownListPropsInterface> = ({ headerText, data, children }): JSX.Element => {
    const { refs } = useContext(InfoContext);
    return (
        <section
            className='drop-down-list'>
            <section
                className='drop-down-list__header-wrapper'>
                <h3 
                    className='drop-down-list__header'
                    onClick={toggleElement(refs[headerText.toLowerCase()].ref, refs[headerText.toLowerCase()].imageRef, (children? refs.episodes.pageRef: null))}>
                    <img 
                        className='drop-down-list__button'
                        ref={refs[headerText.toLowerCase()].imageRef}  
                        src={arrowIcon} 
                        alt='arrow'/>
                    {headerText}
                </h3>
                {children}
            </section>
            <ul 
                className={`drop-down-list__list drop-down-list__list--${headerText.toLowerCase()}`}
                ref={refs[headerText.toLowerCase()].ref}>
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