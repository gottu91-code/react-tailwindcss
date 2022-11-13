import { EditButton } from "./EditButton"

export const Card = ({ isAdmin }) => {
    return (
        <div>
            Cardです
            <EditButton isAdmin={isAdmin} />
        </div>
    )
}