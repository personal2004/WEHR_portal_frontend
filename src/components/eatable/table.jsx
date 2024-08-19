import './index.css';
import icons from '../../constants/icons';
import { employeetable } from '../../constants/jsonconstant';
import { useState } from 'react';
const Eatable=()=>{

    const [searchvalue,setsearchvalue]=useState('');

    const filteredEmployees = searchvalue ? employeetable.filter(data =>
            data.name.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
            data.name.rollnum.toLowerCase().includes(searchvalue.toLocaleLowerCase())
        )
    : employeetable;

    return(
        <div className='eatable_component'>
            <div className='eatable_header'>
                   <h4>employee<span>250</span></h4>
                    <div>
                    <span style={{fontSize:"25px",position:'absolute',paddingTop:'3px',paddingLeft:'5px'}}>{icons.search}</span>
                    <input type='text' placeholder='Type here…' onChange={(e)=>setsearchvalue(e.target.value)}/>
                    </div>
            </div> 
            <table>
                    <tr>
                        <th>Name</th>
                        <th>Join Date </th>
                        <th>Designation</th>
                        <th>Status </th>
                        <th style={{color:'#808080'}}>Options</th>                        
                    </tr>
                    {filteredEmployees.map((data,index)=>{
                        return(
                            <tr key={index}>
                                <td>
                                    <div style={{display:'flex',gap:'30px'}}>
                                       <span style={{color:'#808080',fontSize:'20px'}}>{icons.circle}</span> 
                                        <h4 style={{color:'black'}}>{data.name.rollnum}</h4>
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