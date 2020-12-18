export const Icon = ({path, className, onClick}) => {
    return(
        <svg className={className ? className : ""} onClick={onClick}>
            <use href={`#${path}`} xlinkHref={`#${path}`} />
        </svg>
    )
}