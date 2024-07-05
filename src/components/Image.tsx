

export function Image({...props} : React.ImgHTMLAttributes<HTMLImageElement>)  {
    return (
        <div className="flex align-center grow p-1">
            <img className="w-full h-auto" src={props.src} alt={props.alt} />
        </div>
    )
}