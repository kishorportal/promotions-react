import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Promotions = () => {
    const [promotionData,setData]=useState([]);
   
    const getData=()=>{
      fetch('http://localhost:5000/api/Promotion/list'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
            return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[]);
    const resetFilter=()=>{
      console.log("filter----data=----");
      document.getElementById("search").value="";
      getData();
  }
  const _handleKeyPress = (e)=>{
      console.log(e.key);
      if(e.key==='Enter'){
          console.log(e.target.value);
         filterData(e.target.value);
      }
  }
  const activateBonus=(item)=>{
      console.log("activate Bonus-------"+item);
      fetch('http://localhost:5000/api/Promotion/ActivateBonus/'+item.name
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          getData();
        });
  }
  const filterData=(searchInput)=>{
      fetch('http://localhost:5000/api/Promotion/Search/'+searchInput
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    return (
        <>
            <div className="container-fluid">
                <div className="fade show">
                    <div className="row">
                        <div className="col-sm-5">
                            <h4 className="card-title">Services</h4>
                        </div>
                    </div>
                    <label className="form-text">Filter</label>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="form-group">
                                <input className="form-control" onKeyUp={_handleKeyPress} autoComplete="off" type="text" id="search"/>
                            </div>
                        </div>
                        <div className="col-sm-1 pl-0 pr-0">
                            <div className="form-group">
                                <button onClick={resetFilter} className="btn reset-button">Reset</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                                {
                                    promotionData && promotionData.length>0 && promotionData.map((item)=>
                                    <div className="card">
                                    <div className="card-body pl-2 pr-2">
                                    <div className="col-sm-12 row">
                                        <div className="col-sm-4">
                                            <h1>{item.name}</h1>
                                            <h6 className="text-muted">{item.description}</h6>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label className="form-text">PROMOCODE</label>
                                                <input className="form-control" value={item.promoCode} readOnly type="text" />
                                                <FontAwesomeIcon icon={['far', 'copy']} className="copy-icon"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <button onClick={()=>activateBonus(item)} disabled={item.IsBonusActive} className="btn btn-primary activate-btn">Activate Bonus</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                    )
                                }  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Promotions;