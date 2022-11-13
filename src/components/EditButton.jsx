export const EditButton = ({ isAdmin }) => {
    return (
        <div>
            {console.log(isAdmin)}
            <button className="bg-blue-500 rounded-md p-1 text-white" disabled={!isAdmin}>編集ボタン</button>
        </div>
    )
}