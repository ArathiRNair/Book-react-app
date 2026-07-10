import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewBook = () => {
  const[data,changeData]=useState(
    [
      {"name":"Percy Jackson","author":"Rick Riordan","price":"450","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mszoHtk9cQ8BEMaqT9PTksaOPFoYkvsrWnxe6tkhcw&s=10 "},
      {"name":"Silent patient","author":"Alex Michaelides","price":"450","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Myt1S3LHESg1HibPdEw3CiUpM4fQXoflED15Wh7WYg&s "},
      {"name":"Harry Potter","author":"J.K Rowling","price":"450","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApKMup7AFBWTYfgW_fvOaYGCzx4Fq8ysw-w-W9PxTzQ&s=10 "},
      {"name":"Nightingale","author":"Kristin Hannah","price":"450","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnLbhkT_h2x3JkNFEh4z72NCC82I99ER-uVRPN4WjHQ&s=10 "},
      {"name":"A man called ove","author":"Fredrik Backman","price":"450","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_CTo-bbiQ5RBPcBMj3gTjLunkSLTdNaHnpfo9MUYuw&s "}
    ]
  )
  return (
    <div>
       <NavigationBar />
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
{data.map(
  (value,index)=>{
    return(
      <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<div class="card" >
  <img src={value.avatar} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{value.name}</h5>
      </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{value.author}</li>
    <li class="list-group-item">{value.price}</li>
    <li class="list-group-item">   <a href="#" class="btn btn-success">Add To Cart</a></li>
  </ul>
</div>

                </div>
    )
  }
)}

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ViewBook