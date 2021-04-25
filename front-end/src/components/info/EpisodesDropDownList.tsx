import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';

const EpisodesDropDownList: FC<any> = ({ episodesPage, episodesPageRef, changeEpisodesPage, episodes }): JSX.Element => {
    if(episodes.episodes.length > 0)
        return (
            <select 
                className='drop-down-list__episodes-page-select'
                value={episodesPage}
                ref={episodesPageRef} 
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