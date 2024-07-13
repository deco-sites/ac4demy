import Icon from "site/components/ui/Icon.tsx";

export interface Props{
    placeholderBusca?: string;
}

export default function HeaderTop({placeholderBusca}: Props){
    return(
        <div class={`flex bg-menu border-b border-white border-opacity-10 items-center justify-between w-full p-10`}>
            <div class={`flex items-center relative min-w-[400px]`}>
                <input type="text" placeholder={`${placeholderBusca || "Encontre seu curso"}`} class={`w-full bg-white bg-opacity-5 pl-10 rounded-lg h-11`}/>
                <Icon id="search" width={16} height={17} strokeWidth={1} class={`absolute top-[14px] left-3 z-10`}/>
            </div>
            <div class={`flex items-center gap-4`}>
                <a href="/notify">
                    <Icon id="bell" width={14} height={17} strokeWidth={1}/>
                </a>
                <a class={`w-[52px] h-[52px] flex items-center rounded-full bg-white bg-opacity-5 justify-center`} href="/login">
                    <Icon id="user" size={24} strokeWidth={1}/>
                </a>
            </div>
        </div>
    );
}
