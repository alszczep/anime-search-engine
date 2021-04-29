import { useContext } from "react";
import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';
import { EpisodesDropDownListPropsInterface } from "../../interfaces/props/EpisodesDropDownListPropsInterface";
import { InfoContext } from "../Info";

const EpisodesDropDownList: FC<EpisodesDropDownListPropsInterface> = ({ episodes, episodesPage, changeEpisodesPage }): JSX.Element => {
    const { refs } = useContext(InfoContext);
    if(episodes.episodes.length > 0)
        return (
            <select 
                className='drop-down-list__episodes-page-select'
                value={episodesPage}
                ref={refs.episodes.pageRef} 
                onChange={changeEpisodesPage}>
                {
                    Array.from({length: episodes.episodes_last_page}, (_, i) => i + 1).map((item, index) => {
                        return (
                            <option className='drop-down-list__episodes-page-option'
                                key={uuidv4()} 
                                value={index+1}>
                                {item}
                            </option>
                        );
                    })
                }
            </select>
        )
    return (<></>)
};

export default EpisodesDropDownList;