export const ListOrdered = ()=>{
    return (
        <ol>
            <ListItems />
        </ol>
    )
}

export const ListUnOrdered = ()=>{
    return (
        <ul>
            <ListItems />
            
        </ul>
    )
}

const ListItems = ()=>{
    return (
        <div>
            <li>Shasha</li>
            <li>Vali</li>
        </div>
    );
}