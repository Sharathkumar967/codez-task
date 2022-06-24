import React,{useState,useRef} from 'react';


const structure = {
    status:"Active",
    hr:[
        {
            name:"",
            salary:"",
            age:"",
            phone:"",
            experience:"",
            bonus:"",
        }
    ],
    IT:[
        {
            name:"",
            salary:"",
            age:"",
            phone:"",
            experience:"",
            bonus:"",
        }
    ]
}

const Json = () => {

    const [active,setActive] = useState("inActive")
    const [finalData,setFinalData] =  useState([])


const activeInactive = (e)=> {
setActive("active")
}

    const handleSubmit = (id)=>{
      const arr = []
        arr.push(id)

  }
  
  const onChangeEvent = () => {
    
  }
   
  return (
    <div className='json' style={{dispay:"flex", margin: "50px auto", width:"600p"}}>
        {/* <form style={{margin:"0px 50px"}}>
  <div className="form-group">
    <label for="exampleInputEmail2">Email address</label>
    <input ref={inputRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword2">Password</label>
    <input  ref={inputRef} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
</form> */}

     <form style={{border: '1px solid #000', padding:"20px"}}>
        <div style={{display:"flex"}}>
        <div style={{width:"300px"}}>
          <label>Status</label>
          <select name='state'  placeholder='Select' onChange={activeInactive}>
             <option value="active">Active</option>
           </select><br/>
           {
            active == "active" ?
            <>
            <label>Category</label>
            <select name='category'>
               <option value="hr">HR</option>
               <option value="it">I.T</option>
               
            </select><br/>
            <input type="text" name='name' placeholder='name' onChange={onChangeEvent}/><br/>

            <input type="text" name='name' placeholder='name' onChange={onChangeEvent}/><br/>


            <input type="text" name='name' placeholder='name' onChange={onChangeEvent}/><br/>


            <input type="text" name='name' placeholder='name' onChange={onChangeEvent}/><br/>


            <input type="text" name='name' placeholder='name' onChange={onChangeEvent}/><br/>


            <input type="text" name='name' placeholder='name' onChange={onChangeEvent}/><br/>

            </>:""
           }
         </div>
        </div>
        
     </form>
    </div>
  )
}

export default Json;

