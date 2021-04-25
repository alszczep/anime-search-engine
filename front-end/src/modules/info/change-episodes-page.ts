export const changeEpisodesPage = (mal_id: number, setEpisodesPage: React.Dispatch<React.SetStateAction<number>>, episodesPageRef: React.RefObject<HTMLSelectElement>) => {
    setEpisodesPage(episodesPageRef && episodesPageRef.current? parseInt(episodesPageRef.current.value): 1);
};