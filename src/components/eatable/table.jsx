import './index.css';
import icons from '../../constants/icons';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const Eatable=({tablecon,tableclass='eatable_component'})=>{

    const [searchvalue,setsearchvalue]=useState('');
    const [showoption,setshowoption]=useState(true);
    const location=useLocation();
    const filteredEmployees = searchvalue ?tablecon.filter(data =>
            data.name.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
            (data.name?.rollnum || '').toLowerCase().includes(searchvalue.toLocaleLowerCase())
        )
    : tablecon;

    const isleaverequestpage=location.pathname==="/attendance/leaverequest";
    const isemployeepage=location.pathname==="/employee/employeelist";
    return(
        <div className={tableclass}>
            <div className='eatable_header'>
                   <h4>{tablecon[0].data.dataname}<span>{tablecon[0].data.count}</span></h4>
                    <div className='eatable_header_search'>
                        <button className='search-button'>{icons.search}</button>
                        <input type='text' placeholder='Type here…' onChange={(e)=>setsearchvalue(e.target.value)}/>
                    </div>
             </div> 
               <table style={{overflowX:'auto'}}>
                    <thead>
                        <tr>
                            <th style={isleaverequestpage?{width:'205px'}:null}>{tablecon[0].header.col1}</th>
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
                    </thead>
                    <tbody>
                        {filteredEmployees.map((data,index)=>{
                            return(
                                    <tr key={index}>
                                        <td>
                                            <div className='table_emp_name'>
                                                <span style={{color:'#808080',fontSize:'20px'}}>{icons.circle}</span> 
                                                <h4 >{data.name?.rollnum}</h4>
                                                <div className='table_name_email'>
                                                    <h4 className>{data.name.name}</h4>
                                                    <p>{data.name.email}</p>  
                                                </div>
                                            </div>
                                        </td>
                                        <td>{data.date}</td>
                                        <td>{data.designation}</td>
                                    {isleaverequestpage && <td style={isleaverequestpage?{color:'#4F5E74'}:{display:'none'}}>{data.Reason}</td>}
                                    {isleaverequestpage && <td style={isleaverequestpage?{color:'#4F5E74'}:{display:'none'}}>{data.days}</td>}
                                        <td>{data.status}</td>
                                        <td style={{position:'relative'}}>
                                            <div class='threedot'>{icons.threedot}</div>
                                            <div className={showoption?'leave_action':'leave_action_disapper'} onClick={(e)=>(setshowoption(!showoption))}>
                                                <h5>{icons.correct} Approve Leave</h5> 
                                                <h5>{icons.wrong} Reject Leave</h5>
                                                <h5>{icons.eye} View Details</h5>
                                            </div>
                                        </td> 
                                    
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
        </div>
    );
}
export default Eatable;