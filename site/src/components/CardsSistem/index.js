import './index.scss';

export const CardsSistems = props =>{
    return(
        <div className='Card-sistem'>
            <a className='Link' href={props.link}>
                <p> {props.nome}</p>
                <img className='img' src={props.image} alt="" />
            </a>
        </div>
    );
}