export interface EpisodesDropDownListPropsInterface{
    episodes:{ 
        episodes_last_page: number;
        episodes: {
            episode_id: number;
            title: string;
        }[];
    };
    episodesPage: number;
    changeEpisodesPage: () => void;
}