import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

export const MyDay = ({ text, updatingInInput, deleteDay}) => {
    return (
        <div>
            <p>{text}</p>
            <RiEditFill onClick={updatingInInput}/>
            <MdDelete onClick={deleteDay}/>
        </div>
    )
}