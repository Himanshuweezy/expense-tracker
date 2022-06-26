import './Card.css'

export const Card = (props)=>{
    const classname=props.className+' card'
    return <div className={classname}>{props.children}</div>
}