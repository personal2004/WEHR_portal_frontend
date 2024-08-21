import "./index.css";

const Colorcard=({cardcontent,width,height,padding_top})=>{
    return(
        <div className='colorcards' style={{width:width,height:height,paddingTop:padding_top}}>
        {cardcontent.map((data,index)=>{
            return(
            <div key={index} className='colorcard' style={{ backgroundColor: data.color }}>
                    <h4>{data.subject}</h4>
                    <h4 style={{fontSize:'35px'}}>{data.count}</h4>
                    <p>{data.percent}</p>
                </div>);
        })}
    </div>
    );
}

export default Colorcard;