import './index.css';
import icons from '../../constants/icons';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const Eatable=({tablecon,height,width})=>{

    const [searchvalue,setsearchvalue]=useState('');
    const location=useLocation();
    const filteredEmployees = searchvalue ?tablecon.filter(data =>
            data.name.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
            (data.name?.rollnum || '').toLowerCase().includes(searchvalue.toLocaleLowerCase())
        )
    : tablecon;

    const isleaverequestpage=location.pathname==="/attendance/leaverequest";
    const isemployeepage=location.pathname==="/employee/employeelist";
    return(
        <div className='eatable_component' style={{height:height,width:width}}>
            <div className='eatable_header'>
                   <h4>{tablecon[0].data.dataname}<span>{tablecon[0].data.count}</span></h4>
                    <div className='eatable_header_search'>
                        <input type='text' placeholder='Type here…' onChange={(e)=>setsearchvalue(e.target.value)}/>
                        <span>{icons.search}</span>
                    </div>
            </div> 
            <table>
                    <tr>
                        <th>{tablecon[0].header.col1}</th>
                         {isemployeepage?
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Joined date</option>
                        <option value="1">Created date</option>
                        <option value="2">Releved Dated</option>
                        <option value="3">Salary Hike date by</option>
                        </select> :<th>{tablecon[0].header.col2}</th>}
                        <th>{tablecon[0].header.col3}</th>
                        <th>{tablecon[0].header.col4}</th>
                        <th style={isleaverequestpage?{color:'#4F5E74'}:{color:'#808080'}}>{tablecon[0].header.col5}</th>
                        {isleaverequestpage && <th>{tablecon[0].header.col6}</th>}
                        {isleaverequestpage &&<th style={{color:'#808080'}}>{tablecon[0].header.col7}</th> }                       
                    </tr>
                    {filteredEmployees.map((data,index)=>{
                        console.log(data)
                        return(
                            <tr key={index}>
                                <td>
                                    <div style={{display:'flex',gap:'30px'}}>
                                       <span style={{color:'#808080',fontSize:'20px'}}>{icons.circle}</span> 
                                        <h4 className='table_col_row_one'>{data.name?.rollnum}</h4>
                                        <div>
                                            <h4 className='table_col_row_one'>{data.name.name}</h4>
                                            <p>{data.name.email}</p>  
                                        </div>
                                    </div>
                                </td>
                                <td>{data.date}</td>
                                <td>{data.designation}</td>
                               {isleaverequestpage && <td style={isleaverequestpage?{color:'#4F5E74'}:{display:'none'}}>{data.Reason}</td>}
                               {isleaverequestpage && <td style={isleaverequestpage?{color:'#4F5E74'}:{display:'none'}}>{data.days}</td>}
                                <td>{data.status}</td>
                                <td >
                                      <div class='threedot'>{icons.threedot}</div>
                                      <div className='leave_action'>
                                        <h5>{icons.correct} Approve Leave</h5> 
                                        <h5>{icons.wrong} Reject Leave</h5>
                                        <h5>{icons.eye} View Details</h5>
                                      </div>
                                </td> 
                              
                            </tr>
                        );
                    })}
            </table>           
        </div>
    );
}
export default Eatable;