export interface Props{
    placeholderBusca?: string;
}

export default function HeaderTop({placeholderBusca}: Props){
    return(
        <div>
            <div class={``}>
                <input type="text" placeholder={`Encontre o seu curso`}/>
            </div>
        </div>
    );
}