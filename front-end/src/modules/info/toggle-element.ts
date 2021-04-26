export const toggleElement = (elementRef: React.RefObject<HTMLUListElement>, imageRef: React.RefObject<HTMLHeadingElement>, episodesPageRef?: React.RefObject<HTMLSelectElement>) => {
    return () => {
        if(elementRef && elementRef.current){
            if(imageRef && imageRef.current){
                if(elementRef.current.style.display === 'none' || !elementRef.current.style.display){
                    elementRef.current.style.display = 'block';
                    imageRef.current.classList.add('drop-down-list__button--fliped');
                }
                else{
                    elementRef.current.style.display = 'none';
                    imageRef.current.classList.remove('drop-down-list__button--fliped');
                }
                if(episodesPageRef && episodesPageRef.current && elementRef.current.classList.contains('drop-down-list__list--episodes'))
                    episodesPageRef.current.style.display = elementRef.current.style.display;
            }
        }
    }
};