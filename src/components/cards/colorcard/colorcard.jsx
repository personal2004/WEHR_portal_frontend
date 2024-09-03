import "./index.css";

const Colorcard=({cardcontent,cards="colorcards",card='colorcard'})=>{
    return(
        <div className={cards}>
        {cardcontent.map((data,index)=>{
            return(
            <div key={index} className={card} style={{ backgroundColor: data.color }}>
                    <h4>{data.subject}</h4>
                    <h4 style={{fontSize:'35px'}}>{data.count}</h4>
                    <p>{data.percent}</p>
                </div>);
        })}
    </div>
    );
}

export default Colorcard;