export interface ModalPropsInterface { 
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    header?: string;
    content?: any;
}