export const changeEpisodesPage = (setEpisodesPage: React.Dispatch<React.SetStateAction<number>>, episodesPageRef: React.RefObject<HTMLSelectElement>) => {
    setEpisodesPage(episodesPageRef && episodesPageRef.current? parseInt(episodesPageRef.current.value): 1);
};