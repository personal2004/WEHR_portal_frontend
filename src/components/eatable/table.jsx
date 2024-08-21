import './index.css';
import icons from '../../constants/icons';
import { useState } from 'react';
const Eatable=({tablecon})=>{

    const [searchvalue,setsearchvalue]=useState('');
    
    const filteredEmployees = searchvalue ? tablecon.filter(data =>
            data.name.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
            data.name.rollnum.toLowerCase().includes(searchvalue.toLocaleLowerCase())
        )
    : tablecon;

    return(
        <div className='eatable_component'>
            <div className='eatable_header'>
                   <h4>{tablecon[0].data.dataname}<span>{tablecon[0].data.count}</span></h4>
                    <div>
                    <span style={{fontSize:"25px",position:'absolute',paddingTop:'3px',paddingLeft:'5px'}}>{icons.search}</span>
                    <input type='text' placeholder='Type here…' onChange={(e)=>setsearchvalue(e.target.value)}/>
                    </div>
            </div> 
            <table>
                    <tr>
                        <th>{tablecon[0].header.col1}</th>
                        <th>{tablecon[0].header.col2}</th>
                        <th>{tablecon[0].header.col3}</th>
                        <th>{tablecon[0].header.col4}</th>
                        <th style={{color:'#808080'}}>{tablecon[0].header.col5}</th>                        
                    </tr>
                    {filteredEmployees.map((data,index)=>{
                        return(
                            <tr key={index}>
                                <td>
                                    <div style={{display:'flex',gap:'30px'}}>
                                       <span style={{color:'#808080',fontSize:'20px'}}>{icons.circle}</span> 
                                        <h4 style={{color:'black'}}>{data.name?.rollnum}</h4>
                                        <div>
                                            <h4 style={{color:'black'}}>{data.name.name}</h4>
                                            <p>{data.name.email}</p>  
                                        </div>
                                    </div>
                                </td>
                                <td>{data.date}</td>
                                <td>{data.designation}</td>
                                <td>{data.status}</td>
                                <td style={{color:'#808080'}}>{icons.threedot}</td> 
                            </tr>
                        );
                    })}
            </table>           
        </div>
    );
}
export default Eatable;